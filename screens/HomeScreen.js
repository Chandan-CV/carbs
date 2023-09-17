import React from "react";
import { SafeAreaView, View, Text, Button, StyleSheet,TouchableOpacity } from "react-native";
import ShowScore from "../components/ShowScore";
import YourActivity from "../components/YourActivity";

function HomeScreen({ navigation }) {
  const CircleButton = props => (
    <TouchableOpacity
      style={{
        margin: props.margin,
        height: props.size,
        width: props.size,
        backgroundColor: props.color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: props.size * 2,
      }}
      onPress={props.onPress}>
      <Text style={{color: props.textColor, fontSize: props.fontSize}}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
  const showMessage = () => Alert.alert('Button clicked !');
  return (
  
      <View style={styles.container}>
        <View style={{alignItems:"center", marginVertical:30}}>
          <Text style={styles.currentScore}>Your Current Score</Text>
        </View>
        <ShowScore />
        <Text style={{fontSize:24, color:"white", alignItems:"center",display:"flex", padding:16}}>Your Activity</Text>
        <YourActivity />
        <View style={styles.AddMore}>
        
        </View>
      </View>

   
  );
}

export default HomeScreen;

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
});
