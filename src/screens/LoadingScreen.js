import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Axios from "axios";

export default LoadingScreen = ({ route }) => {
  const navigation = useNavigation();

  const data = route.params;
  console.log(data);

  useEffect(() => {
    const getFortune = async function () {
      try {
        const res = await Axios.post("http://192.168.0.5:3000/fortune", data);
        navigation.navigate("Result", res.data.fortune);
      } catch (e) {
        console.log(e);
      }
    };
    getFortune();
  }, []);

  return (
    <View>
      <Text>자네의 운세를 분석하는 중이네.</Text>
    </View>
  );
};
