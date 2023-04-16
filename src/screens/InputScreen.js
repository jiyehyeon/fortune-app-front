import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import DatePicker from "react-native-datepicker";
import { Constants } from "../../constants";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

export default InputScreen = () => {
  const navigation = useNavigation();

  const [birthYear, setBirthYear] = useState(null);
  const [birthMonth, setBirthMonth] = useState(null);
  const [birthDay, setBirthDay] = useState(null);

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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigation.navigate("Loading", { data });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>정보 입력</Text>

      <DatePicker
        date={birthYear}
        mode="year"
        placeholder="select year"
        format="YYYY"
        maxDate={moment().year()}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => setBirthYear(date)}
      />
      <DatePicker
        date={birthMonth}
        mode="month"
        placeholder="select month"
        format="MM"
        maxDate={moment().format("YYYY-MM")}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => setBirthMonth(date)}
      />
      <DatePicker
        date={birthDay}
        mode="date"
        placeholder="select day"
        format="DD"
        maxDate={moment(`${birthYear}-${birthMonth}`, "YYYY-MM").daysInMonth()}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => setBirthDay(date)}
      />

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.buttonText}>결과 보기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    wkeyth: "80%",
    marginTop: 20,
    marginBottom: 20,
  },
  inputLabel: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "#f1f1f1",
    height: 40,
    paddingHorizontal: 10,
  },
  dropdown: {
    backgroundColor: "#f1f1f1",
    height: 40,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  dropdownText: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
    wkeyth: "80%",
  },
  button: {
    backgroundColor: "#00bfff",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  picker: {
    height: "50",
    width: "200",
    color: "#000",
  },
});
