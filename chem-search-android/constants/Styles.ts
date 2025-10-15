import { StyleSheet } from "react-native";

const background = require('@/assets/images/background.jpeg')


/*
all styles here except theme-depending text/view styles
=> ThemedView, ThemedText 
*/

const styles = StyleSheet.create({
  button: {
      height: 60,
      borderRadius: 20,
      backgroundColor: 'rgba(0,0,0,0.75)',
      padding: 6,
      justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    resizeMode: "cover"
  },
  camera: {
    flex: 1
  },
    buttonContainer: {
    position: 'absolute',
    bottom: 64,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    paddingHorizontal: 64,
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 12,
    backgroundColor: background
  },
  textBack: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.47)',
    color: 'white'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
    color: 'white'
  },
})

export default styles