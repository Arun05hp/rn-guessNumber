import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ style }) => {
  return (
    <TextInput
      blurOnSubmit
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="numeric"
      maxLength={2}
      style={{ ...styles.Input, ...style }}
    />
  );
};

const styles = StyleSheet.create({
  Input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
export default Input;
