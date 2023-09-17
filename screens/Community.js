import React from "react";
import { SafeAreaView, View, Text, Button, StyleSheet, ScrollView } from "react-native";
import ShowScore from "../components/ShowScore";
import YourActivity from "../components/YourActivity";
import Cards from "../components/Cards";
import { Avatar } from 'react-native-paper';


function Community({ navigation }) {
  return (
  
      <ScrollView>
        <Cards title="Joe saved 5kg Co2 Today" head ="Joe Salamana" uri="https://source.unsplash.com/NZf63wFnaXY" style={{ padding:10, margin:10 }}/>
        <Cards title="Chandan saved 17kg Co2 In two days" head ="Chandan Cv" uri="https://source.unsplash.com/mNGaaLeWEp0" style={{ padding:10, margin:10 }}/>
        <Cards title="Prakhar saved 20kg Co2 This week" head ="Prakhar Khurana" uri="https://source.unsplash.com/3FFEdm8TOek" style={{ padding:10, margin:10 }}/>
        <Cards title="Aditya saved 25kg Co2 This week" head ="Aditya Sharma" uri="https://source.unsplash.com/IPtSV340-j4" style={{ padding:10, margin:10 }}/>
      </ScrollView>
   
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
        flexDirection:"row",
    }
  });
  

export default Community;
