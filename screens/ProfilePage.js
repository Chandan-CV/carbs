import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../fireBase";
import { addCommunity } from "../firebaseFunctions";

function ProfilePage() {
  const [communityKey, setCommunityKey] = useState("");
  return (
    <SafeAreaView>
      <View style={{ marginTop: 50 }}>
        <Button
          onPress={() => {
            auth.signOut();
          }}
        >
          Logout
        </Button>
        <View>
          <Text>Enter the community secret key </Text>
          <TextInput
            placeholder="enter the community secret key"
            value={communityKey}
            onChangeText={(e) => setCommunityKey(e)}
          />
          <Button
            onPress={() => {
              addCommunity(communityKey);
            }}
            mode="contained"
          >
            Join Community
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ProfilePage;
