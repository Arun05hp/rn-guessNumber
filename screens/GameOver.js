import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";

const GameOver = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <ScrollView>
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
            Your Phone needed{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>
          </BodyText>
        </View>

        <MainButton onClick={onRestart}>New Game</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  imgWrapper: {
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 2,
    borderColor: "grey",
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 20,
  },
  imgStyle: {
    width: "100%",
    height: "100%",
  },
  resultWrapper: {
    marginHorizontal: 20,
    marginVertical: Dimensions.get("window").height / 60,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOver;
