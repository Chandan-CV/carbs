import React, { useState } from 'react';
  import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import GOOGLE_MAPS_APIKEY from '../process.env';
  import {useForm , Controller} from "react-hook-form";

  const data = [
    { label: 'None', value: '0' },
    { label: 'Diesel Car', value: '1' },
    { label: 'Petrol Car', value: '2' },
    { label: 'CNG Car', value: '3' },
  ];
  const data2 = [
    { label: 'None', value: '0' },
    { label: 'Below 125cc', value: '1' },
    { label: 'Between 125cc to 500cc', value: '2' },
    { label: 'Above 500cc', value: '3' },
  ];
 
  const onSubmit = (data) => console.log(data)

  const Form3 = () => {
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
    const[value2, setValue2] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);
    const [CarType, setCarType] = useState(0);
    const [BikeType, setBikeType] = useState(0);
      let data3=[CarType, BikeType];
    // const geocoder = new Google.maps.Geocoder();
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
      <View style={styles.Input}>
        <Text>Car Type</Text>
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
            setCarType(item.value);
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
      <View style={styles.Input}>
        <Text>Bike Type</Text>
        <Dropdown
          style={[styles.dropdown, isFocus2 && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data2}
          search
          maxHeight={300}
          labelField="label"
          valueField="value2"
          placeholder={!isFocus2 ? 'Select Type' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus2(true)}
          onBlur={() => setIsFocus2(false)}
          onChange={item => {
            setValue2(item.value);
            setIsFocus2(false);
            setBikeType(item.value);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus2 ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
        </View>
      {errors.firstName && <Text>This is required.</Text>}
      {/*needs to be changed*/}
        
      </View>
      <View style={styles.container3}>
      <Button style={styles.Button} color="green" title="Standardize All" height="80" onPress={handleSubmit(onSubmit)} />
      <Button style={styles.Button2} title="Submit" onPress={console.log(data3)} />
      </View>
      </View>
    );
  };

  export default Form3;

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
        justifyContent: 'flex-end',
        gap: 16,
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
        height: 40,
    },
    Button2: {
        display: 'flex',
        marginVertical: 'auto',
        flex: 1,
        height: 40,
        padding: 8,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });