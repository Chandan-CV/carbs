// import { Link } from '@react-navigation/native';
import React, { useState } from 'react'
import { Button, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SVG from '../assets/Co2LogoFinal.svg'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fontsLoaded] = useFonts({
        'Krona': require('../assets/fonts/KronaOne-Regular.ttf'),
    });
    return (
        <SafeAreaView style={styles.page}>
            <SVG height={140} width={140} style={styles.img} />
            <Text style={styles.headings}>Login</Text>
            <Text style={styles.subheadings}>Email</Text>
            <TextInput style={styles.inputs} value={email} onChangeText={setEmail} inputMode='email' />
            <Text style={styles.subheadings}>Password</Text>
            <TextInput style={styles.inputs} value={password} onChangeText={setPassword} secureTextEntry={true} />
            <Text style={{ ...styles.texts, marginLeft: 35, marginVertical: 15 }}>Don't have an account?<TouchableOpacity
                onPress={() => navigate('HomeScreen')}
                underlayColor='#fff'
            >
                <Text style={styles.links}>Create an account</Text>
            </TouchableOpacity></Text>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { }}>
                <Text style={styles.button}>SUBMIT</Text>
            </TouchableOpacity>
            <Text style={{ ...styles.subheadings, textAlign: "center" }}>carbs</Text>
        </SafeAreaView >
    )
}

export default Login


const styles = StyleSheet.create({
    page: {
        backgroundColor: "#1e1e1e",
        height: "100%",
    },
    headings: {
        textAlign: "center",
        fontSize: 45,
        marginVertical: 25,
        color: "#ffff",
        fontFamily: 'Krona'

    },
    img: {
        alignSelf: 'center'
    },
    subheadings: {
        fontSize: 20,
        marginHorizontal: 35,
        marginTop: 25,
        marginBottom: 10,
        color: "#ffff",
        fontFamily: 'Krona'
    },
    inputs: {
        borderBottomColor: '#ffff',
        borderBottomWidth: 1,
        marginHorizontal: 35,
        fontSize: 20,
        color: '#fff'
    },
    texts: {
        color: '#fff'
    },
    links: {
        color: '#fff',
        fontWeight: '900',
        marginTop: 0,
        marginHorizontal: 20,
        padding: 0,
    },
    button: {
        backgroundColor: '#fff',
        textAlign: 'center',
        fontFamily: 'Krona',
        padding: 10,
        margin: 25,
        width: 150
    }
})