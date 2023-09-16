import React from "react";
import {View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../fireBase";

function ProfilePage() {
  return (
    <SafeAreaView>
        <View style={{marginTop:50}}>
      <Button 
      onPress={()=>{auth.signOut()}}>
        Logout
      </Button>
      </View>
    </SafeAreaView>
  );
}

export default ProfilePage;
