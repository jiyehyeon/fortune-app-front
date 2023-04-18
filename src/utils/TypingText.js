import React, { useState, useEffect } from "react";
import { Text } from "react-native";

export default TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i === text.length) {
        clearInterval(interval);
      }
    }, 100);
  }, []);

  return <Text style={styles.text}>{displayedText}</Text>;
};

const styles = {
  text: {
    color: "#fff",
    fontFamily: "NotoSans",
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 20,
  },
};
