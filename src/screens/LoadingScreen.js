import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getFortune } from "../api/fortune";

export default LoadingScreen = ({ route }) => {
  const navigation = useNavigation();

  const { birthYear, birthMonth, birthDay, calander } = route.params;

  useEffect(() => {
    (async function () {
      try {
        const fortune = await getFortune(
          birthYear,
          birthMonth,
          birthDay,
          calander
        );
        navigation.navigate("Result", fortune);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <View>
      <Text>자네의 운세를 분석하는 중이네.</Text>
    </View>
  );
};
