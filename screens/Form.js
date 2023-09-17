import { PaperProvider } from "react-native-paper";
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
  
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Detail from '../screens/Detail';


const stackNavigatorOptions = {
    headerShown:false
}

const AppNavigator = createStackNavigator({
    Home:{screen:Home},
    Detail:{screen:Detail}
},
{
    defaultNavigationOptions:stackNavigatorOptions
}
)
export default Form(AppNavigator);
