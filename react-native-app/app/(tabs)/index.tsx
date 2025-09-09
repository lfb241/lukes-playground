import LinkButton from '@/components/LinkButton';
import { ThemedText } from '@/components/ThemedText';
import styles from '@/constants/Styles';
import { Text } from '@react-navigation/elements';
import React from 'react';
import { ImageBackground, View } from 'react-native';

const background = require('@/assets/images/background.jpeg')

/*
Homepage with buttons leading to Search, Camera, Location using custom component: LinkButton
*/

const app  = () => {
  return (

    <View style={styles.container}>

      <ImageBackground
        source={background}
        resizeMode='cover'
        style={styles.image}>

          <ThemedText type='title' lightColor='white'>ChemSearch</ThemedText> {/*playing around with ThemedText here*/}
          
          <Text style={styles.textBack}>Your App to explore Chemistry</Text>
          
          <LinkButton link ="/search" label="Search"/>

          <LinkButton link ="/camera" label="Camera"/>
          
          <LinkButton link ="/geoloc" label="Location"/>


      </ImageBackground>
    </View>
  )
}

export default app 
