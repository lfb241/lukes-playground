import { Link } from 'expo-router'
import React from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'

const background = require('@/assets/images/background.jpeg')

const app  = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode='cover'
        style={styles.image}>
          <Text style={styles.title}>ChemSearch</Text>

          <Text style={styles.text}>Your App to explore Chemistry</Text>

          <Link href='/search' style={{marginHorizontal: 'auto'}} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Search</Text>
            </Pressable>
          </Link>

      </ImageBackground>
    </View>
  )
}

export default app 

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column'
  },
  title: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(25, 22, 221, 0.3)',
    marginTop:10,
    marginBottom: 20
  },
  text: {
    color: 'black',
    fontSize: 26,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 20
  },
  link: {
    color: 'black',
    fontSize: 26,
    fontWeight: '300',
    textAlign: 'center',
    textDecorationLine: 'underline',
    padding: 4
  },
  button: {
      height: 60,
      borderRadius: 20,
      backgroundColor: 'rgba(0,0,0,0.75)',
      padding: 6,
      justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    padding: 4
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',  
  }
})