import React, { useState, useEffect } from "react";
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
// import DatePicker from "react-native-datepicker";
// import { Constants } from "../../constants";
// import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";
import TypingText from "../utils/TypingText";

export default InputScreen = () => {
  const navigation = useNavigation();

  const [birthYear, setBirthYear] = useState(null);
  const [birthMonth, setBirthMonth] = useState(null);
  const [birthDay, setBirthDay] = useState(null);
  const [calander, setCalander] = useState("양력");
  const [maxDay, setMaxDay] = useState(null);

  const maxYear = new Date().getFullYear();
  const minYear = maxYear - 120;

  const years = Array.from(
    { length: maxYear - minYear + 1 },
    (_, i) => `${minYear + i}`
  );

  const months = Array.from({ length: 12 }, (_, i) =>
    i < 9 ? `0${i + 1}` : `${i + 1}`
  );

  const getDaysInMonth = (month, year) => new Date(year, month, 0).getDate();

  const handleYearChange = (value) => {
    setBirthYear(value);
  };

  const handleMonthChange = (value) => {
    setBirthMonth(value);
  };

  const handleDayChange = (value) => {
    setBirthDay(value);
  };

  useEffect(() => {
    console.log(birthYear, birthMonth);
    if (birthYear && birthMonth) {
      console.log(birthYear, birthMonth);
      const newMaxDay = getDaysInMonth(birthMonth, birthYear);
      console.log(newMaxDay);
      if (birthDay > newMaxDay) setBirthDay(null);
      setMaxDay(newMaxDay);
    }
  }, [birthYear, birthMonth]);

  const inputItems = [
    {
      label: "출생년",
      type: "dropdown",
      key: "birthYear",
      length: 4,
    },
    {
      label: "출생월",
      type: "dropdown",
      key: "birthMonth",
      length: 2,
    },
    {
      label: "출생일",
      type: "dropdown",
      key: "birthDay",
      options: Array.from({ length: 24 }, (_, i) => `${i}시 ~ ${i + 1}시`),
    },
    {
      label: "양/음력",
      type: "dropdown",
      key: "calander",
      options: ["양력", "음력"],
    },
  ];

  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  const handleSubmit = () => {
    navigation.navigate("Loading", {
      birthYear,
      birthMonth,
      birthDay,
      calander,
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/background.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.bubble}>
          <TypingText text="운세를 보려면 생년월일을 입력해 주게나." />
        </View>
        {/* 종이모양 */}
        <View style={styles.container}>
          <ImageBackground>
            <Picker
              style={{ height: 50, width: 150 }}
              selectedValue={birthYear}
              onValueChange={handleYearChange}
            >
              {years.map((year) => (
                <Picker.Item key={year} label={year} value={year} />
              ))}
            </Picker>
            <Picker
              selectedValue={birthMonth}
              onValueChange={handleMonthChange}
              style={{ height: 50, width: 150 }}
            >
              {months.map((month) => (
                <Picker.Item key={month} label={month} value={month} />
              ))}
            </Picker>
            <Picker
              selectedValue={birthDay}
              onValueChange={handleDayChange}
              style={{ height: 50, width: 150 }}
            >
              {birthMonth &&
                birthYear &&
                Array.from({ length: maxDay }, (_, i) =>
                  i < 9 ? `0${i + 1}` : `${i + 1}`
                ).map((day) => (
                  <Picker.Item key={day} label={day} value={day} />
                ))}
            </Picker>
            <Picker
              selectedValue={calander}
              onValueChange={(value) => setCalander(value)}
              style={{ height: 50, width: 150 }}
            >
              <Picker.Item label="양력" value="solar" />
              <Picker.Item label="음력" value="lunar" />
            </Picker>
          </ImageBackground>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.buttonText}>결과 보기</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
