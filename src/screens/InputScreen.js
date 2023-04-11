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

export default InputScreen = () => {
  const navigation = useNavigation();

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
      <View style={styles.inputContainer}>
        {inputItems.map((item) => (
          <View key={item.key} style={styles.item}>
            <Text style={styles.label}>{item.label}</Text>
            {item.type === "text" ? (
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.textInput}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    maxLength={item.length}
                  />
                )}
                name={item.key}
                defaultValue=""
              />
            ) : (
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Picker
                    style={{ height: 50, width: 150 }}
                    selectedValue={value}
                    onValueChange={onChange}
                  >
                    {item.options.map((option, idx) => (
                      <Picker.Item key={idx} label={option} value={option} />
                    ))}
                  </Picker>
                )}
                name={item.key}
                defaultValue=""
              />
            )}
            {errors[item.key] && (
              <Text style={styles.errorText}>필수 항목입니다.</Text>
            )}
          </View>
        ))}
      </View>
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
