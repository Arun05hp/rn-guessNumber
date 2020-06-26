import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (min - max)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
const GameScreen = ({ userChoice }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  return (
    <View style={styles.screen}>
      <Text>Oppenent's Guess</Text>
      <NumberContainer>{CurrentGuess}</NumberContainer>
      <Card style={styles.wrapper}>
        <Button title="Lower" OnPress={} />
        <Button title="Greater" OnPress={} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "80%",
  },
});

export default GameScreen;
