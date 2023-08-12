import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default ResultScreen = ({ route }) => {
  const fortuneText = route.params;

  return (
    <View>
      <Text>{fortuneText}</Text>
    </View>
  );
};
