import { PaperProvider } from "react-native-paper";
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
  
const Tab2 = createBottomTabNavigator();
  function Form() {

    return (
        <PaperProvider>
        <NavigationContainer>
     <Tab2.Navigator>
        <Tab2.Screen name="Form1" component={Form1} />
        <Tab2.Screen name="Form2" component={Form2} />
        <Tab2.Screen name="Form3" component={Form3} />
        </Tab2.Navigator>
        </NavigationContainer>
        </PaperProvider>
    );
  }

    export default Form;