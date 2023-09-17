import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import { Ionicons } from "@expo/vector-icons";
import { Button, PaperProvider } from "react-native-paper";
import { useEffect, useState } from "react";
import { auth } from "./fireBase";
import ProfilePage from "./screens/ProfilePage";

// react-native-vector-icons/Ionicons otherwise
import HomeIcon from "./assets/icons/HomeIcon";
import LeaderboardIcon from "./assets/icons/LeaderboardsIcon";
import TipsIcon from "./assets/icons/TipsIcon";
import LogoIcon from "./assets/icons/LogoIcon";
import leaderboard from "./screens/Leaderboard";
import CommunityIcon from "./assets/icons/Community";
import Community from "./screens/Community";
import Tips from "./screens/Tips";
import HomeScreen from "./screens/HomeScreen";
// react-native-vector-icons/Ionicons otherwise.
const Tab = createBottomTabNavigator();
export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  if (user) {
    return (
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                color = "Black";
                if (route.name === "Home") {
                  return (
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      <HomeIcon />
                    </View>
                  );
                } else if (route.name === "Community") {
                  return (
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      <CommunityIcon />
                    </View>
                  );
                } else if (route.name === "Leaderboards") {
                  return (
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      <LeaderboardIcon />
                    </View>
                  );
                } else if (route.name === "Tips") {
                  return (
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      <TipsIcon />
                    </View>
                  );
                }else if(route.name === "Profile"){
                  return (
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      <LogoIcon />
                    </View>
                  );
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "black",
              tabBarInactiveTintColor: "gray",
              tabBarStyle: {
                backgroundColor: "white",
                paddingVertical: 20,
                height: 80,
                justifyContent: "space-around",
                alignItems: "center",
                display: "flex",
              },
            })}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerTitle: "Carbs",
                headerTitleAlign: "center",
                headerBackgroundContainerStyle: {
                  backgroundColor: "black",
                },
                //   tabBarIcon: ({size,focused,color}) => {
                //   return (
                //     <View>
                //     <LogoIcon />
                //     </View>
                //   );
                // },
              }}
            />
            <Tab.Screen name="Community" component={Community} />
            <Tab.Screen name="Leaderboards" component={leaderboard} />
            <Tab.Screen name="Tips" component={Tips} />
            <Tab.Screen name="Profile" component={ProfilePage} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
  } else {
    return <Login />;
  }
}
