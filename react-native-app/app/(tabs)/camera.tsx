import styles from '@/constants/Styles'
import { Text } from '@react-navigation/elements'
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera'
import React, { useState } from 'react'
import { ImageBackground, TouchableOpacity, View } from 'react-native'

// TODO - WORK ON

const background = require('@/assets/images/background.jpeg')


const Cam = () => {

  const [facing, setFacing] = useState<CameraType>('back')
  const [permission, requestPermission] = useCameraPermissions()

  if (!permission) {
    return <View></View>
  }


  if (!permission.granted) {
      return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode='cover'
        style={styles.image}>

          <Text style={styles.textBack}>We need your permission to show the camera</Text>
          <TouchableOpacity style={[styles.button, {marginHorizontal: 100, marginVertical:20}]} onPress={requestPermission}>
            <Text style={styles.buttonText}>GRANT PERMISSION</Text>
        </TouchableOpacity>
        </ImageBackground>
        
    </View>
      )


  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'))
  }

  
  return (
    <View style={styles.container}>

      <ImageBackground
        source={background}
        resizeMode='cover'
        style={styles.image}>
         <Text style={styles.textBack}>Camera</Text>
        <CameraView style={styles.camera} facing={facing}/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.textBack}>Flip Camera</Text>

          </TouchableOpacity>

        </View>

        </ImageBackground>

    </View>
  )
}

export default Cam
