import React, { useState } from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";
import ShowScore from "../components/ShowScore";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location";

function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getLocation = async () => {

    let { status } = await requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await getCurrentPositionAsync({});
    let temp = { ln: location.coords.longitude, lt: location.coords.latitude };
    console.log(temp);
    setLocation(temp);
  };

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (

    <View style={styles.container}>
      <View style={{ alignItems: "center", marginVertical: 30 }}>
        <Text style={styles.currentScore}>Your Current Score</Text>
      </View>
      <ShowScore />
      <Text style={styles.currentScore}>{text}</Text>
      <Button title="START" onPress={getLocation} />
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
