import { BlockQuote } from "@expo/html-elements";
import { config } from "@gluestack-ui/config";
import {
  Box,
  GluestackUIProvider,
  Text,
  ImageBackground,
  View,
  Button,
  ButtonText,
  Center,
} from "@gluestack-ui/themed";
import { ScrollView } from "react-native";

export default function StartScreen() {
  return (
    <GluestackUIProvider config={config}>
      <View h="$full" w="$full">
        <ImageBackground
          source={require("../assets/Images/startimage.jpeg")}
          style={{ flex: 1, justifyContent: "center" }}
        ></ImageBackground>
        <Box h="$80" p="$4" bgColor="$white">
          <Text
            fontSize={"$4xl"}
            pb="$4"
            fontWeight="$bold"
            color="$primary950"
          >
            Find The Place Of Your Dream
          </Text>

          <Text
            fontSize={"$md"}
            pb="$4"
            fontWeight="$light"
            color="$primary950"
          >
            The best place for you and your family life! Get ready now
          </Text>
          <Button
            size="xl"
            variant="solid"
            action="primary"
            bgColor="$primary950"
            mb="$6"
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
              Don't have an account?
              <Button variant="link">
                <ButtonText>Sign Up</ButtonText>
              </Button>
            </Text>
          </Center>
        </Box>
      </View>
    </GluestackUIProvider>
  );
}
