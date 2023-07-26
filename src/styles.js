import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  bubble: {
    position: "absolute",
    top: 60,
    alignSelf: "center",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    // borderWidth: 1,
    borderColor: "#dfbf9f",
    borderRadius: 15,
    width: "80%",
  },
  button: {
    position: "absolute",
    bottom: 50,
    width: "70%",
    alignSelf: "center",
    backgroundColor: "transparent",
    borderRadius: 50,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Heirof",
    fontSize: 18,
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 8,
    textAlign: "center",
    margin: 20,
  },
});

export default styles;
