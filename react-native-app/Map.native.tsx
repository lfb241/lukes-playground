// LeafletMap.native.tsx
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import MapView, { UrlTile } from 'react-native-maps';

export default function Map() {

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
    >
    <UrlTile
        urlTemplate="http://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maximumZ={19}
        tileSize={256}
        flipY={false}
    />

    </MapView>
  )

}}