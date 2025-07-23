import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const background = require('@/assets/images/background.jpeg')


const search = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode='cover'
        style={styles.image}>
          <Text style={styles.text}>Compound Search</Text>
          <Text style={styles.text2}>Quickly find chemical information:</Text>
      </ImageBackground>
    </View>
  )
}

export default search

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column'
  },
  text: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.47)'

  },
  text2: {
    color: 'black',
    fontSize: 28,
    fontWeight: '300',
    textAlign: 'center',
  },
    image: {
    flex: 1,
    justifyContent: 'center',  
  }

})