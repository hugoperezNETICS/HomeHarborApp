import { config } from "@gluestack-ui/config";
import { Box, GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { ScrollView } from "react-native";
import Navigation from "./Navigation";
import { AuthProvider } from "./contexts/Authcontext";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </GluestackUIProvider>
  );
}
