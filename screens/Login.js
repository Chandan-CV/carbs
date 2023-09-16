// import { Link } from '@react-navigation/native';
import React, { useState } from 'react'
import { Button, Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../fireBase'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <SafeAreaView>
            <Text>Email</Text>
            <TextInput value={email} onChangeText={setEmail} inputMode='email' />
            <Text>Password</Text>
            <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} />
            <Text>Don't have an account? <Button title='Create an account' onPress={() => {

            }} /></Text>
            <Button title='Submit' onPress={() => {
              signInWithEmailAndPassword(auth, email, password)
            }} />
        </SafeAreaView>
    )
}

export default Login;
