import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import { Ionicons } from "@expo/vector-icons";
import { Button, PaperProvider } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { auth } from "./fireBase";
import ProfilePage from "./screens/ProfilePage";

// react-native-vector-icons/Ionicons otherwise
import Form from "./screens/Form";
import Form2 from "./screens/Form2";
import Form3 from "./screens/Form3";
import HomeIcon from "./assets/icons/HomeIcon";
import Community from "./assets/icons/Community";
import LeaderboardIcon from "./assets/icons/LeaderboardsIcon";
import TipsIcon from "./assets/icons/TipsIcon";
import Profile from "./screens/Profile";
import LogoIcon from "./assets/icons/LogoIcon";
import leaderboard from "./screens/Leaderboard";
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
                      <Community />
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
              component={Profile}
              options={{
                headerTitle: "Carbs",
                headerTitleAlign: "center",
                
                //   tabBarIcon: ({size,focused,color}) => {
                //   return (
                //     <View>
                //     <LogoIcon />
                //     </View>
                //   );
                // },
              }}
            />
            <Tab.Screen name="Community" component={Form} />
            <Tab.Screen name="Leaderboards" component={leaderboard} />
            <Tab.Screen name="Tips" component={Form3} />
            <Tab.Screen name="Profile" component={ProfilePage} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
  } else {
    return <Login />;
  }
}
