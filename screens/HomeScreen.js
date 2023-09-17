import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";
import ShowScore from "../components/ShowScore";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import YourActivity from "../components/YourActivity";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getdbuser } from "../firebaseFunctions";
import FireFrame from "./FireFrame";

function HomeScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [dbuser, setdbuser] = useState(null);
  async function fetchData() {
    await getLocation();
    setdbuser(await getdbuser());
  }
  useEffect(() => {
    fetchData();
  }, []);
  const getLocation = async () => {
    let { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await getCurrentPositionAsync({});
    let temp = { ln: location.coords.longitude, lt: location.coords.latitude };
    console.log(temp);
    setLocation(temp);
  };

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  const CircleButton = (props) => (
    <TouchableOpacity
      style={{
        margin: props.margin,
        height: props.size,
        width: props.size,
        backgroundColor: props.color,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: props.size * 2,
      }}
      onPress={props.onPress}
    >
      <Text style={{ color: props.textColor, fontSize: props.fontSize }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
  const showMessage = () => Alert.alert("Button clicked !");
  if (dbuser) {
    if (dbuser.hasOwnProperty("CoalUsage") == false) {
      return <FireFrame />;
    } else {
      return (
        <View style={styles.container}>
          <View style={{ alignItems: "center", marginVertical: 30 }}>
            <Text style={styles.currentScore}>Your Current Score</Text>
          </View>
          <ShowScore />
          <Text
            style={{
              fontSize: 25,
              color: "white",
              alignItems: "center",
              padding: 16,
            }}
          >
            Your Activity
          </Text>
          <YourActivity />
          <View style={styles.AddMore}></View>
        </View>
      );
    }
  } else {
    return (<View>
      <Text>Loading...{JSON.stringify(dbuser)}</Text>
      <Button title="Reload" onPress={fetchData}/>
    </View>
    )
  }
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
  },
});
