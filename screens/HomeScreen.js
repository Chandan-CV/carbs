import React from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";
import ShowScore from "../components/ShowScore";

function HomeScreen({ navigation }) {
  return (

    <View style={styles.container}>
      <View style={{ alignItems: "center", marginVertical: 30 }}>
        <Text style={styles.currentScore}>Your Current Score</Text>
      </View>
      <ShowScore />
      <Button title="Login" onPress={() => {
        navigation.navigate('Login')
      }} />
    </View>

  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E1E",
    flex: 1,
    alignContent: "center",
  },
  currentScore: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  }
});
