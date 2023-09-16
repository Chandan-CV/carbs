import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location";

export const getLocation = async ({setLocation, errorMsg, setErrorMsg}) => {
    let { status } = await requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await getCurrentPositionAsync({});
    let temp = { ln: location.coords.longitude, lt: location.coords.latitude };
    console.log(temp);
    setLocation(temp);
  };

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }