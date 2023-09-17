import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import ProgressCircle from "react-native-progress-circle";
function ShowScore() {
  return (
    <View style={styles.container}>
      <ProgressCircle
        percent={60}
        radius={100}
        borderWidth={20}
        color="yellow"
        shadowColor="#fff"
        bgColor="#1E1E1E"
      >
        <Text style={{ fontSize: 24, color: "yellow" }}>{"0.6 Tonnes"}</Text>
      </ProgressCircle>
    </View>
  );
}

export default ShowScore;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
