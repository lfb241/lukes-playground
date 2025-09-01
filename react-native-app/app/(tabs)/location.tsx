import { ThemedView } from '@/components/ThemedView';
import styles from '@/constants/Styles';
import * as Location from 'expo-location';
import React, { useState } from 'react';
import { ImageBackground, Text } from 'react-native';

const background = require('@/assets/images/background.jpeg')


const Location = () => {

  const [location, setLocation] = useState<Location.LocationObject | null>(null)

  useEffect

  return (
    <ThemedView style={styles.container}>

      <ImageBackground
        source={background}
        resizeMode='cover'
        style={styles.image}>

          <Text style={styles.textBack}>Location Function</Text>


        </ImageBackground>
        
    </ThemedView>
  )
}

export default location
