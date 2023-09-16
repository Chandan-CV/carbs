import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
function YourActivity() {
  return (
  <View style={styles.container}>
    {
        /* your activity area drop down*/
    }
    <Text style={{fontSize:24, color:"white"}}>Your Activity</Text>
    <Text style={{fontSize:18, color:"white"}}>You have not done any activity yet</Text>
  </View>
  )
}

export default YourActivity

const styles = StyleSheet.create({
    container: {
       alignItems:"center",
       marginVertical:30,
    }
})