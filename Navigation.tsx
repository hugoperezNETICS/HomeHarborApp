import React from 'react'; 
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import StartScreen from "./screens/StartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

export type RootStackParamList = {
    Start: undefined,
    Register: undefined,
    Login: undefined,
    Home: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

function MyStacks() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name='Start' component={StartScreen}/>  */}
            {/* <Stack.Screen name='Register' component={RegisterScreen}/> */}
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Home' component={HomeScreen}/>
        </Stack.Navigator>

    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStacks />
        </NavigationContainer>
    )
}