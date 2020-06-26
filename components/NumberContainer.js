import React from "react";

import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Number}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  Number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default NumberContainer;
