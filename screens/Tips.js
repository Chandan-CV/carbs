import React from "react";
import { SafeAreaView, View, Text, Button, StyleSheet, ScrollView } from "react-native";
import ShowScore from "../components/ShowScore";
import YourActivity from "../components/YourActivity";
import CardsDonation from "../components/CardsDonation";
import { Avatar } from 'react-native-paper';
import InfoCards from "../components/InfoCards";


function Tips({ navigation }) {
  return (
    <ScrollView style={{backgroundColor:"#fff"}}>
  
      <ScrollView horizontal={true}>
        <View style={{alignItems:"center", marginVertical:30, display:"flex", flexDirection:"row", gap:32, margin:16}}>
            <CardsDonation title="American Forest Conservation" price="₹175.00/100kg" uri="https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2023/09/14063259/w7QG-1694593441-600x600.jpg" style={{ padding:10, margin:10 }}/>
            <CardsDonation title="Donate to Project Haryana" price="₹105.00/100kg" uri="https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2023/09/13111800/UpxU-1684308262-700x700.jpg" style={{ padding:10, margin:10 }}/>
            <CardsDonation title="Donate to Project Chattisgarh" price="₹275.00/100kg" uri="https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2023/09/06105417/HM1v-1664528454-500x500.jpg" style={{ padding:10, margin:10 }}/>
            <CardsDonation title="Donate to Project Jharkhand" price="₹195.00/100kg" uri="https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2023/09/15102332/FDQt-1566384842.jpg" style={{ padding:10, margin:10 }}/>
            <CardsDonation title="Donate to Pune Community" price="₹145.00/100kg" uri="https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2023/09/15101736/ildN-1632397551-600x600.jpg" style={{ padding:10, margin:10 }}/>
            <CardsDonation title="Donate to Project Pachadham" price="₹149.00/100kg" uri="https://s3-ap-south-1.amazonaws.com/sankalptaru-web/wp-content/uploads/2023/04/27051514/e5Yo-1593072178.jpg" style={{ padding:10, margin:10 }}/>
        </View>
      </ScrollView>
    
    <View style={{margin:32, gap:32}}>
        <InfoCards color="#00A86B" head ="Reduce air travel" data="As of 2017, the amount of transportation-related carbon dioxide emissions eclipsed the amount of electricity generation emissions. Transportation is now the number-one source of greenhouse gases" style={{ padding:10, margin:10 }}/>
        <InfoCards color="#03C04A" head ="Make your driving more efficient" data="While living a car-free lifestyle may not be possible for everybody, try substituting car trips with bike rides, bus trips, train rides, or other forms of public transportation. When you drive, cut back on fossil fuel emissions by accelerating slowly and using the air conditioning sparingly. " style={{ padding:10, margin:10 }}/>
        <InfoCards color="#004830" head ="Plant trees" data="Deforestation is one of the significant causes of carbon emissions. Trees absorb and store the carbon dioxide in the atmosphere, but they can no longer absorb carbon once they are cut down. Planting trees is among the most inexpensive, natural ways to take climate action and reduce our negative environmental impact." style={{ padding:10, margin:10 }}/>
        <InfoCards color="#00755E" head ="Switch to clean energy" data=" Clean energy is another way to help reduce carbon emissions. Solar panels, wind turbines, and geothermal energy are all energy sources with a higher level of sustainability, produce low carbon emissions, and lower our dependence on natural gas and resource harvesting." style={{ padding:10, margin:10 }}/>
        <InfoCards color="#29AB87" head ="Eat less red meat." data="Over 220 grams of carbon dioxide are produced for every gram of beef produced, resulting in almost four percent of the total GHG emissions. Eating vegetarian more often or consuming less beef can lower the amount of carbon present in our atmosphere." style={{ padding:10, margin:10 }}/>
        <InfoCards color="#50C878" head ="Make your home more energy-efficient." data=" If you live in a state that allows you to choose your energy supplier, the first thing you should do is look for a supplier that uses renewable energy sources. For instance, a coal-fired power plant burns fossil fuel and is more harmful to the environment than wind power or solar power. Ensure your home is adequately insulated and that doors and windows are sealed with weather stripping to prevent cooled and heated air from escaping." style={{ padding:10, margin:10 }}/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#1E1E1E",
      flex:1,
      alignContent: "center",
    },
    currentScore:{
      fontSize:25,
      color:"white",
      fontWeight:"bold",
    },
    container6: {
        flexDirection:"row",
    }
  });
  

export default Tips;