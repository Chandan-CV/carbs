import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Button, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../fireBase";
import { registerUser } from "../firebaseFunctions";

const Login = () => {
  return (
    <SafeAreaView>
      <Button
        title="Create  chandan"
        onPress={() => {
          registerUser("chandan", "chandancvp08@gmail.com", "chandan123")
            .then(() => {
              alert("User created successfully");
            })
            .catch((e) => {
              alert(e.message);
            });
        }}
      />
      <View style={{margin:20}}/>
      <Button
      title="Login as  chandan"
      onPress={() => {
       signInWithEmailAndPassword(auth, "chandancvp08@gmail.com","chandan123")
      }}
    />
     
    </SafeAreaView>
  );
};

export default Login;
