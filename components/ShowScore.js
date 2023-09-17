import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import ProgressCircle from 'react-native-progress-circle'
function ShowScore() {
  return (
  <View style={styles.container}>
    <ProgressCircle
            percent={40}
            radius={100}
            borderWidth={20}
            color="#4EB829"
            shadowColor="#fff"
            bgColor="#000"
        >
            <Text style={{ fontSize: 36 , color:"white"}}>{'40%'}</Text>
        </ProgressCircle>
  </View>
  )
}

export default ShowScore

const styles = StyleSheet.create({
    container: {
       alignItems:"center",
    }
})