import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { config } from "@gluestack-ui/config";
import {
  Box,
  GluestackUIProvider,
  Text,
  View,
  ImageBackground,
  Center,
  VStack,
  Input,
  InputField,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { useAuth } from "../contexts/Authcontext";
import { RootStackParamList } from "../Navigation";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigation.navigate("Home");
    } catch (error) {
      if (typeof error === "string") {
        setError(error);
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <GluestackUIProvider config={config}>
      <View h="$full" w="$full">
        <ImageBackground
          source={require("../assets/Images/loginimage.webp")}
          style={{ flex: 1, justifyContent: "center" }}
        ></ImageBackground>

        <Box h="$96" p="$4" bgColor="$white">
          <Center>
            <Text
              fontSize={"$3xl"}
              pb="$4"
              mb="$3"
              fontWeight="$bold"
              color="$primary950"
            >
              Great to see you again!
            </Text>
          </Center>

          <VStack space="xl" reversed={false}>
            <Input
              variant="outline"
              size="xl"
              w="$full"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField
                placeholder="email@example.com"
                value={email}
                onChangeText={setEmail}
              />
            </Input>
            <Input
              variant="outline"
              size="lg"
              w="$full"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField
                type="password"
                placeholder="password"
                value={password}
                onChangeText={setPassword}
              />
            </Input>
            <Button
              size="xl"
              variant="solid"
              action="primary"
              bgColor="$primary950"
              mb="$6"
              onPress={handleLogin}
            >
              <ButtonText>Sign in</ButtonText>
            </Button>
            <Center>
              <Text
                fontSize={"$md"}
                pb="$4"
                fontWeight="$light"
                color="$primary950"
              >
                Forgot your password? No worries,
                <Button variant="link">
                  <ButtonText>lets reset it.</ButtonText>
                </Button>
              </Text>
            </Center>
          </VStack>
        </Box>
      </View>
    </GluestackUIProvider>
  );
}
