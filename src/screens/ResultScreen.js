import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default LoadingScreen = ({ route }) => {
  const fortuneText = route.params;

  return (
    <View>
      <Text>{fortuneText}</Text>
    </View>
  );
};
