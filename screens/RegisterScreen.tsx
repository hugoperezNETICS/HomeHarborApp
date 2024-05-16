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
  HStack,
} from "@gluestack-ui/themed";
import { ScrollView } from "react-native";

export default function RegisterScreen() {
  return (
    <GluestackUIProvider config={config}>
      <View h="$full" w="$full">
        <ImageBackground
          source={require("../assets/Images/registerimage.webp")}
          style={{ flex: 1, justifyContent: "center" }}
        ></ImageBackground>
        <Box h="63%" p="$4" bgColor="$white">
          <Center>
            <Text fontSize={"$3xl"} fontWeight="$bold" color="$primary950">
              Get started now!
            </Text>
            <Text
              fontSize={"$2xl"}
              pb="$4"
              mb="$3"
              fontWeight="$normal"
              color="$primary950"
            >
              Fill in your details to sign up.
            </Text>
          </Center>

          <ScrollView>
            <VStack space="xl" reversed={false}>
              <HStack space="md">
                <Input
                  variant="outline"
                  size="xl"
                  w="$48"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}
                >
                  <InputField placeholder="Name(s)" />
                </Input>

                <Input
                  variant="outline"
                  size="xl"
                  w="$48"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}
                >
                  <InputField placeholder="Last Name" />
                </Input>
              </HStack>

              <Input
                variant="outline"
                size="xl"
                w="$full"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputField placeholder="email@example.com" />
              </Input>

              <Input
                variant="outline"
                size="xl"
                w="$full"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputField placeholder="password" type="password" />
              </Input>

              <Input
                variant="outline"
                size="xl"
                w="$full"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputField placeholder="confirm password" type="password" />
              </Input>

              <Button
                size="xl"
                variant="solid"
                action="primary"
                bgColor="$primary950"
              >
                <ButtonText>Sign up</ButtonText>
              </Button>

              <Center>
                <Text
                  fontSize={"$md"}
                  pb="$4"
                  fontWeight="$light"
                  color="$primary950"
                >
                  Already have an account?
                  <Button variant="link">
                    <ButtonText>Sign in here.</ButtonText>
                  </Button>
                </Text>
              </Center>
            </VStack>
          </ScrollView>
        </Box>
      </View>
    </GluestackUIProvider>
  );
}
