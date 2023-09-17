import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getCommunites, getCommunityData } from "../firebaseFunctions";
import { Button } from "react-native-paper";

function Leaderboard() {
  const [communities, setCommunities] = useState([]);
  const [currentKey, setCurrentKey] = useState();
  const [CommunityData, setCommunityData] = useState();
  useEffect(() => {
    async function fetchData() {
      setCommunities(await getCommunites());
      console.log(communities);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      setCommunityData(await getCommunityData(currentKey));
    }
    fetchData();
  }, [currentKey]);
  return (
    <View style={{ display: "flex", flex: 1, backgroundColor: "#1E1E1E" }}>
      <Text style={styles.HeadingFont}>Community Leaderboard</Text>
      <View
        style={{
          height: "50%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {communities.map((element) => (
          <Button
            mode="contained"
            textColor="white"
            onPress={() => setCurrentKey(element)}
          >
            {element}
          </Button>
        ))}
      </View>
      <View>
        {CommunityData.map((element, index) => (
          <Text style={styles.Text}>
            {index + 1}: {element.name}
          </Text>
        ))}
      </View>
    </View>
  );
}

export default Leaderboard;

const styles = StyleSheet.create({
  Text: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    marginLeft: 20,
  },
  HeadingFont: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 20,
  },
});
