import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import Form3 from './Form3'
import Form from './Form'
import HomeScreen from './HomeScreen'

const Stack = createStackNavigator();
function FireFrame() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Form1" component={Form} />
        <Stack.Screen name="Form2" component={Form3} />
        <Stack.Screen name="Home" component={HomeScreen} />

    </Stack.Navigator>
  )
}

export default FireFrame