import React, { useState, useEffect } from "react";
import { ImageBackground, View, Text, TouchableOpacity, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/InputScreen";
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
    if (birthYear && birthMonth) {
      const newMaxDay = getDaysInMonth(birthMonth, birthYear);
      if (birthDay > newMaxDay) setBirthDay(null);
      setMaxDay(newMaxDay);
    }
  }, [birthYear, birthMonth]);

  const pickerItems = {
    years: Array.from(
        { length: maxYear - minYear + 1 },
        (_, i) => `${minYear + i}`
    ),
    months: Array.from({ length: 12 }, (_, i) =>
      i < 9 ? `0${i + 1}` : `${i + 1}`
    ),
    days: Array.from({ length: maxDay }, (_, i) =>
    i < 9 ? `0${i + 1}` : `${i + 1}`
    ),
    calander: [{
      label: "양력",
      value: "solar",
    },
    {
      label: "음력",
      value: "lunar"
    }]};

  const handleSubmit = () => {
    if (!birthYear || !birthMonth || !birthDay || !calander) {
      Alert.alert('모든 항목을 입력해 주게나');
      return;
    }
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
              {pickerItems.years.map((year) => (
                <Picker.Item key={year} label={year} value={year} />
              ))}
            </Picker>
            <Picker
              selectedValue={birthMonth}
              onValueChange={handleMonthChange}
              style={{ height: 50, width: 150 }}
            >
              {pickerItems.months.map((month) => (
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
                pickerItems.days.map((day) => (
                  <Picker.Item key={day} label={day} value={day} />
                ))}
            </Picker>
            <Picker
              selectedValue={calander}
              onValueChange={(value) => setCalander(value)}
              style={{ height: 50, width: 150 }}
            >
              {pickerItems.calander.map((cal) => (
                <Picker.Item label={cal.label} value={cal.value} />
              ))}
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
