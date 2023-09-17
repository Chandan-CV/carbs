import React from 'react'
import { StyleSheet, Text, View,ScrollView, FlatList, Button, TouchableOpacity } from 'react-native'
function YourActivity() {
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
        const showMessage = () => {console.log("Button clicked !")};        
  return (
    <ScrollView style={{width:"100%"}}>
  <View style={styles.container}>
    {
        /* your activity area drop down*/
    }
    <View style={styles.container2}>
    
    <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%", padding:16}}>
        <Button style={styles.Button} color="#1E1E1E" height="80" title="" onPress={() => showMessage} />
        </View>
      <FlatList
      style={{width:"100%", gap:16, display:"flex", flexDirection:"column", flex:1,}}
        data={[
          {key: 'Devin',score: 10},
          {key: 'Dan',score: 20},
          {key: 'Dominic',score: 30},
          {key: 'Jackson',score: 40},
          {key: 'James',score: 50},
          {key: 'Joel',score: 60},
          {key: 'John',score: 70},
          {key: 'Jillian',score: 80},
          {key: 'Jimmy',score: 90},
          {key: 'Julie',score: 100},
        ]}
        renderItem={({item}) => <View style={styles.textbox}>
        <Text style={styles.item}>{item.key}</Text>
        <Text style={styles.item}>{item.score} Points</Text>
            </View>}
      />
    </View>
    <View style={styles.container5}>
      <CircleButton
        text="+"
        size={50}
        color="#ffffff"
        textColor="black"
        fontSize={20}
        margin={10}
        onPress={() => {styles.Button={width:"100%", height:"100%", backgroundColor:"red"}}}
      />
      </View>
  </View>
  </ScrollView>
  )
}

export default YourActivity

const styles = StyleSheet.create({
    container: {
       alignItems:"center",
       width:"100%",
    },
    container2: {
        flex: 1,
        gap:16,
        width:"100%",
      },
      item: {
        color:"white",
        padding: 10,
        fontSize: 18,
      },
      textbox:{
        display:"flex",
        flexDirection:"row",
        marginVertical: 8,
        borderRadius:8,
        flex:1,
        padding:16,
        backgroundColor:"#1E1E1E",
        justifyContent:"space-between",
      },
      Button: {
        display: 'flex',
        borderRadius:50,
        borderColor:"white",
        borderWidth:1,
        padding:16,
        marginVertical: 'auto',
        flex: 1,
        height:80,
        width:"100%",
      }, 
      container5: {
        position: 'absolute',
        top: 0,
        right: 10,

      }

})