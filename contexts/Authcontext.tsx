import React, {createContext, useState, useContext, ReactNode}from 'react';
import * as yup from 'yup';

// Validation schemas using yup
const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

const registerSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
})

//typescript interface to define the data types 
interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, confirmPassword: string) => Promise<void>;
    logout: () => void;
  }

//allow access to email user in the components that use the 'Authcontext'
  interface User {
    email: string;
  }
  
//allow that the 'Authprovider' wrap anothers components y give access to the context auth 
  interface AuthProviderProps {
    children: ReactNode;
  }

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
  
    const login = async (email: string, password: string) => {
      try {
        // Validate the inputs
        await loginSchema.validate({ email, password });
  
        // Simulate authentication (replace this with your API call)
        setUser({ email });
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          // Handle validation errors
          alert(error.message);
        } else {
          // Handle other errors (e.g., API errors)
          console.error(error);
        }
      }
    };

    const register = async (email: string, password: string, confirmPassword: string) => {
        try {
          // Validate the inputs
          await registerSchema.validate({ email, password, confirmPassword });
    
          // Simulate registration (replace this with your API call)
          setUser({ email });
        } catch (error) {
          if (error instanceof yup.ValidationError) {
            // Handle validation errors
            alert(error.message);
          } else {
            // Handle other errors (e.g., API errors)
            console.error(error);
          }
        }
      };

      const logout = () => {
        setUser(null);
      };
    
      return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
          {children}
        </AuthContext.Provider>
      );
    };

    export const useAuth = (): AuthContextType => {
        const context = useContext(AuthContext);
        if (context === undefined) {
          throw new Error('useAuth must be used within an AuthProvider');
        }
        return context;
      };