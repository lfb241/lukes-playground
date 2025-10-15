import { Colors } from '@/constants/Colors';
import styles from '@/constants/Styles';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { useCompoundSearch } from '@/hooks/useCompoundSearch';
import { useFocusEffect } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, ImageBackground, Platform, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
const background = require('@/assets/images/background.jpeg')

// FIXME - Compression of Components on top because of FlatList



const Search = () => {

  const colorScheme = useColorScheme(); // use different color schemes

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;  

  const [text, setText] = useState('');
  const { results, loading, error, fetchCompounds, resetResults } = useCompoundSearch() // usage of custom hook
  const List = Platform.OS === "web" ? ScrollView : SafeAreaView; // checks if OS or web for a better view
  

  // function for fetching the state text when submitting
  const handleSubmit = () => { 
    if (text.trim() !== '') {
      fetchCompounds(text)
    }
  }

  // text/draft are set to empty strings by callback function when search is focused 
  useFocusEffect(
    React.useCallback(() => { // callback verhindert new creation of function at rendering
      setText('');
      resetResults()
    },[])  // FIXME - Maximum update depth exceeded when giving the deps.
  );

  return (
    <View style={styles.container}>  

      <ImageBackground
        source={background}
        resizeMode='cover'
        style={styles.image}>

          <Text style={styles.textBack}>Compound Search</Text>

          <Text style={[styles.buttonText, {color:'green'}]}>Quickly find chemical information:</Text>
          
          <TextInput
            style = {styles.input}
            onChangeText={setText}
            value={text}
            onSubmitEditing={handleSubmit}
          />
      
      <List>
        <FlatList
          data={results}  // manipulated results are used as data through useCompoundSearch
          keyExtractor={(item) => item.CID.toString()} //because each object needs a key for efficient updating of lists
          contentContainerStyle={styles.contentContainer}
          renderItem={( { item }) => (
            <View>
              <View>
                <Text>Molecular Formula:  {item.MolecularFormula}</Text>
                <Text>Molecular Weight: {item.MolecularWeight} g/mol</Text>
              </View>
            </View>
          )}>
        </FlatList>

      </List>
      
      </ImageBackground>

    </View>
  )
}

export default Search

