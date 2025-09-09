import { ThemedView } from '@/components/ThemedView';
import styles from '@/constants/Styles';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import MapView from 'react-native-maps';


const background = require('@/assets/images/background.jpeg')


const GeoLoc = () => {

  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() =>{

    async function getCurrentLocation(){

      let  { status }  = await Location.requestForegroundPermissionsAsync() // destructuring
      if (status !== 'granted'){
        setErrorMsg('Permission denied')
        return;
      }
      let loc = await Location.getCurrentPositionAsync({})
      setLocation(loc.coords)
    }

    getCurrentLocation();
  }, [])


  const renderMap = () => {

  if(errorMsg) {
    return <Text>{errorMsg}</Text>
  } else if (location) {
    return(
    <MapView
      region={{
        latitude: location.latitude,
        longitude: location.longitude,
        longitudeDelta: 0.1,
        latitudeDelta: 0.1,
      }}
      style={{ flex: 1 }}
    />
  )
    }
    return null

  }

  return (
    <ThemedView style={styles.container}>

      <ImageBackground
        source={background}
        resizeMode='cover'
        style={styles.image}>
          <View style={{flex:1}}>
          {renderMap()}
          </View>

        </ImageBackground>
        
    </ThemedView>
  )
}

export default GeoLoc
