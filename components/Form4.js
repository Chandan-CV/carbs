import React, { useState } from 'react';
  import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import GOOGLE_MAPS_APIKEY from '../process.env';
  import {useForm , Controller} from "react-hook-form";

  const data = [
    { label: 'Car', value: '1' },
    { label: 'Bus', value: '2' },
    { label: 'Flight', value: '3' },
    { label: 'Train', value: '4' },
    { label: 'Bike', value: '5' },
    { label: 'Walk', value: '6' },
    { label: 'Average (Unknown Value) ', value: '7' },
  ];
 
  const onSubmit = (data) => console.log(data)

  const Form4 = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: {
          firstName: "",
          lastName: "",
        },
      })
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const[StartLatitudeA1, setStartLatitudeA1] = useState("");
    const[StartLongitudeA1, setStartLongitudeA1] = useState("");
    const[LandingLatitudeA2, setLandingLatitudeA2] = useState("");
    const[LandingLongitudeA2, setLandingLongitudeA2] = useState("");
    let data2=[StartLatitudeA1, StartLongitudeA1, LandingLatitudeA2, LandingLongitudeA2];
    const[VehicleType, setVehicleType] = useState(0);
    // const geocoder = new Google.maps.Geocoder();
    return (
        
        
      <View style={styles.container}>
      
      <View style={styles.container2}>
      <View style={styles.Input}>
        <Text>Vehicle Taken</Text>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Type' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            setVehicleType(item.value);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
        </View>
      {errors.firstName && <Text>This is required.</Text>}
      <Text >Start Location</Text>
      <GooglePlacesAutocomplete
      GooglePlacesDetailsQuery={{ fields: "geometry" }}
      fetchDetails={true}
      placeholder='Search'
      styles = {{
            container: {
              flex: 0,
              padding: 1,
                borderWidth: 1,
                borderRadius: 8,
            },
            textInput: {
              fontSize: 12,
            },
          }}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log("data", data);
        console.log("details", details);
        console.log(JSON.stringify(details?.geometry?.location));
        setStartLatitudeA1(JSON.stringify(details?.geometry?.location.lat));
        setStartLongitudeA1(JSON.stringify(details?.geometry?.location.lng));

      }}
      query={{
        key: 'AIzaSyAeSLKGC-l-Snb-kOUigxqtXRgvPb84XFI',
         
        language: 'en',
      }}
    />
    <Text >Landing Location</Text>
    <GooglePlacesAutocomplete
      GooglePlacesDetailsQuery={{ fields: "geometry" }}
      fetchDetails={true}
      placeholder='Search'
      styles = {{
        container: {
              flex: 0,
              padding: 1,
                borderWidth: 1,
                borderRadius: 8,
            },
            textInput: {
              fontSize: 12,
            },
          }}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        //get the lat and long
        
        console.log("data", data);
        console.log(VehicleType);
        console.log("details", details);
        console.log(JSON.stringify(details?.geometry?.location));
        
        setLandingLatitudeA2(JSON.stringify(details?.geometry?.location.lat));
        setLandingLongitudeA2(JSON.stringify(details?.geometry?.location.lng));
      }}
      query={{
        key: 'AIzaSyAeSLKGC-l-Snb-kOUigxqtXRgvPb84XFI',
         
        language: 'en',
      }}
    />
      
      </View>
        <Button style={styles.Button2} title="Submit" onPress={()=>{console.log(data2); console.log(VehicleType)}} />
      </View>
    );
  };

  export default Form4;

  const styles = StyleSheet.create({
    Input: {
        display: 'flex',
        gap: 16,
    },
    container: {
      backgroundColor: 'white',
      justifyContent:'space-between',
      display: 'flex',
        flex: 1,
    },
    container2: {
        display: 'flex',
        flex: 1,
      gap: 16,
      padding: 16,
    },
    container3: {
        display: 'flex',
        padding: 16,
        flex: 1,
        gap: 16,
        backgroundColor:"gray",
    },
    dropdown: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    Button: {
        display: 'flex',
        marginVertical: 'auto',
        flex: 1,
    },
    Button2: {
        display: 'flex',
        marginVertical: 'auto',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });