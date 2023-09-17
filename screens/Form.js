import React, { useState } from 'react';
  import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import {useForm , Controller, set} from "react-hook-form";
import { AddData } from '../firebaseFunctions';


  

  const Form1 = ({navigation}) => {

  const data3 = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
  ];
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
    const [ElectricityUsage, setElectricityUsage] = useState(0);
    const [NaturalGasUsage, setNaturalGasUsage] = useState(0);
    const [LPGCylinders, setLPGCylinders] = useState(0);
    const [CoalUsage, setCoalUsage] = useState(0);
    const [WoodenPellets, setWoodenPellets] = useState(0);
    const [Propane, setPropane] = useState(0);
    let data={ElectricityUsage, NaturalGasUsage, LPGCylinders, CoalUsage, WoodenPellets, Propane};
    const onSubmit = () => {
      AddData(data);
      alert("Data Added");
      navigation.navigate('Form2');
    }
    return (
        
      <View style={styles.container}>
      <View style={styles.container2}>
         <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
        <View style={styles.Input}>
            <Text>Electricity Usage</Text>
            
          <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 8, paddingHorizontal: 8, }}
            placeholder="kilowatt hours"
            onBlur={onBlur}
            onChangeText={(text) => {setElectricityUsage(text)
            console.log(ElectricityUsage)}}
            value={value}
          />
        </View>
        )}
        name="ElectricityUsage"
      />
      {errors.firstName && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
        <View style={styles.Input}>
            <Text>Natural Gas Usage</Text>
            
          <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 8, paddingHorizontal: 8, }}
            placeholder="Killowatt hours"
            onBlur={onBlur}
            onChangeText={(text) => setNaturalGasUsage(text)}
            value={value}
          />
        </View>
        )}
        name="NaturalGasUsage"
      />
      {errors.firstName && <Text>This is required.</Text>}
      <View style={styles.Input}>
        <Text>LPG Cylinders</Text>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data3}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            setLPGCylinders(item.value);
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
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
        <View style={styles.Input}>
            <Text>Coal Usage</Text>
            
          <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 8, paddingHorizontal: 8, }}
            placeholder="kilogrames"
            onBlur={onBlur}
            onChangeText={(text) => setCoalUsage(text)}
            value={value}
          />
        </View>
        )}
        name="CoalUsage"
      />
      {errors.firstName && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
        <View style={styles.Input}>
            <Text>Wooden Pellets</Text>
            
          <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 8, paddingHorizontal: 8, }}
            placeholder="kilogrames"
            onBlur={onBlur}
            onChangeText={(text) => setWoodenPellets(text)}
            value={value}
          />
        </View>
        )}
        name="WoodenPellets"
      />
      {errors.firstName && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
        <View style={styles.Input}>
            <Text>Propane</Text>
            
          <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 8, paddingHorizontal: 8, }}
            placeholder="liters"
            onBlur={onBlur}
            onChangeText={(text) => setPropane(text)}
            value={value}
          />
        </View>
        )}
        name="Propane"
      />
      {errors.firstName && <Text>This is required.</Text>}
      </View>
        <Button style={styles.Button2} title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    );
  };

  export default Form1;

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
        height: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });