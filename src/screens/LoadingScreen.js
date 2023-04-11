import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
// import { Card, Button } from "react-native-elements";
import Axios from "axios";
import Constants from "../../constants";

export default LoadingScreen = ({ route }) => {
  const data = route.params.data;
  console.log(data);

  useEffect(async () => {
    try {
      // const res = await Axios.post("http://localhost:3000", {
      //   data,
      // });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <View>
      <Text>자네의 운세를 분석하는 중이네.</Text>
    </View>
  );
};
