import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
const GameOver = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over</TitleText>
      <View style={styles.imgWrapper}>
        <Image
          style={styles.imgStyle}
          source={require("../assets/original.png")}
          // source={{
          //   uri:
          //     "https://aniskhan.com/wp-content/uploads/2019/10/how-to-be-successful-person-in-life-follow-easy-15-tips__1569920231_103.132.30.69.jpg",
          // }}
        />
      </View>
      <View style={styles.resultWrapper}>
        <BodyText style={styles.resultText}>
          Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </BodyText>
      </View>

      <Button title="New Game" onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgWrapper: {
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "grey",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 30,
  },
  imgStyle: {
    width: "100%",
    height: "100%",
  },
  resultWrapper: {
    marginHorizontal: 20,
  },
  resultText: {
    textAlign: "center",
    marginVertical: 15,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOver;
