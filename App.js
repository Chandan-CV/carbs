import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import { Ionicons } from "@expo/vector-icons";
import { PaperProvider } from "react-native-paper";
import { createStackNavigator } from '@react-navigation/stack';

// react-native-vector-icons/Ionicons otherwise.

const Stack = createStackNavigator();
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

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "ios-list" : "ios-list-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#4EB829",
            tabBarInactiveTintColor: "white",
            tabBarStyle: {
              backgroundColor: "grey",
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: "Carbs",
              headerTitleAlign: "center",
            }}
          />
          <Tab.Screen name="Login" component={Login} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
