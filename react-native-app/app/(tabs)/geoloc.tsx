import { ThemedView } from '@/components/ThemedView';
import styles from '@/constants/Styles';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Platform, Text, View } from 'react-native';
import MapView, { UrlTile } from 'react-native-maps';


// FIXME Ugly workaround for being able to debug in web




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

  } else if (location && Platform.OS === 'web') {
    return(
    <MapView
      region={{
        latitude: location.latitude,
        longitude: location.longitude,
        longitudeDelta: 0.1,
        latitudeDelta: 0.1,
      }}
      
      style={{ flex: 1 }}
    >
        <UrlTile
          urlTemplate="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
          tileSize={256}
          flipY={false}
        />

    </MapView>
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
