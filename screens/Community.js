import React from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";
import ShowScore from "../components/ShowScore";
import YourActivity from "../components/YourActivity";
import Cards from "../components/Cards";
import { Avatar } from 'react-native-paper';


function Community({ navigation }) {
  return (
  
      <View style={styles.container6}>
      <Avatar.Image size={24} source={require('../assets/Avatar.jpeg')} />
        <Cards style={{display:"flex", flex:1, width:"100%"}}/>
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
    },
    container6: {
        display:"flex",
        flexDirection:"row",
        marginVertical: 8,
        marginHorizontal:16,
        gap:16,
        width:"100%",
        
    }
  });
  

export default Community;
