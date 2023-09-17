import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { PaperProvider } from "react-native-paper";
import Form from "./screens/Form";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import HomeIcon from "./assets/icons/HomeIcon";
import CommunityIcon from "./assets/icons/CommunityIcon";
import Community from "./screens/Community";
import LeaderboardIcon from "./assets/icons/LeaderboardsIcon";
import TipsIcon from "./assets/icons/TipsIcon";
import Profile from "./screens/Profile";
// react-native-vector-icons/Ionicons otherwise.
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
               color="Black";
              if (route.name === "Home") {
                return(
                  <View style={{alignItems:"center", justifyContent:"center",display:"flex"}}>
                  <HomeIcon />
                  </View>)
              } else if (route.name === "Community") {
                return(
                  <View style={{alignItems:"center", justifyContent:"center",display:"flex"}}>
                  <CommunityIcon />
                  </View>)
              }
              else if (route.name === "Leaderboards") {
                return(
                  <View style={{alignItems:"center", justifyContent:"center",display:"flex"}}>
                  <LeaderboardIcon />
                  </View>)
              }
              else if (route.name === "Tips") {
                return(
                  <View style={{alignItems:"center", justifyContent:"center",display:"flex"}}>
                  <TipsIcon />
                  </View>)
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
              headerStyle: {
                backgroundColor: "white",
              }

            }}
          />
          <Tab.Screen name="Community" component={Community} />
          <Tab.Screen name="Leaderboards" component={Form} />
          <Tab.Screen name="Tips" component={Form} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
