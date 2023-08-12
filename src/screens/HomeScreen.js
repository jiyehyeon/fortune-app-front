import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TypingText from "../utils/TypingText";
import { useFonts } from "expo-font";
import styles from "../styles/InputScreen";

const HomeScreen = () => {
  console.log(process.env.REACT_APP_SERVER_URL);

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Heirof: require("../../assets/fonts/HeirofLightBold.ttf"),
    // NotoSans:
    //   "https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap",
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/main-background.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.bubble}>
          <TypingText text="어서오게나. 2023년의 운세를 봐달라고?" />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Input")}
        >
          <ImageBackground
            source={require("../../assets/images/button-background.png")}
            style={styles.buttonImage}
            resizeMode="contain"
          >
            <Text style={styles.buttonText}>운세보기</Text>
          </ImageBackground>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
