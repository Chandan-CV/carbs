import React from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";
import ShowScore from "../components/ShowScore";
import YourActivity from "../components/YourActivity";

function Profile({ navigation }) {
  return (
  
      <View style={styles.container}>
        <View style={{alignItems:"center", marginVertical:30}}>
          <Text >Your Current Score</Text>
        </View>
        <ShowScore />
        <YourActivity />
      </View>
   
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#1E1E1E",
      flex:1,
      alignContent: "center",
    },
    currentScore:{
      fontSize:25,
      color:"white",
      fontWeight:"bold",
    }
  });
  

export default Profile;
