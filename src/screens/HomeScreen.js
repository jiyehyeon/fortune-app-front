import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TypingText from "../utils/TypingText";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/home-background.png")}
        style={styles.backgroundImage}
      >
        <TouchableOpacity style={styles.bubble}>
          <TypingText
            style={styles.text}
            text="어서오게나. 2023년의 사주를 봐달라고?"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Input")}
        >
          <Text>운세보기</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  bubble: {
    position: "absolute",
    top: 50,
    left: 50,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    minWidth: "70%",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
    marginHorizontal: 40,
  },
  button: {
    position: "absolute",
    bottom: 50,
    left: "40%",
    backgroundColor: "#fbb785",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
};

export default HomeScreen;
