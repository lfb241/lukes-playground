import { ThemedView } from '@/components/ThemedView';
import styles from '@/constants/Styles';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Text } from 'react-native';


const background = require('@/assets/images/background.jpeg')


const GeoLoc = () => {

  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() =>{

    async function getCurrentLocation(){

      let  { status }  = await Location.requestForegroundPermissionsAsync() // destructuring
      if (status !== 'granted'){
        setErrorMsg('Permission denied')
        return;
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    }

    getCurrentLocation();
  }, [])

  let text = ""
  if(errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location)
  }

  return (
    <ThemedView style={styles.container}>

      <ImageBackground
        source={background}
        resizeMode='cover'
        style={styles.image}>

          <Text style={styles.textBack}>{text}</Text>


        </ImageBackground>
        
    </ThemedView>
  )
}

export default GeoLoc
