 
import { ThemedView } from '@/components/ThemedView';
import styles from '@/constants/Styles';
import { ImageBackground } from 'expo-image';
import { View } from 'react-native';


/* let Map : any; // DOESNT WORK

if (Platform.OS === "web"){Map = require('../../LeafletMap.web').default }
if (Platform.OS !== "web"){Map = require('../../Map.native').default} */
// eslint-disable-next-line import/no-unresolved
import Map from '@/Map';



// FIXME allowed? seems to work

const background = require('@/assets/images/background.jpeg')


export default function GeolocScreen() {

  return (
    
    <ThemedView style={styles.container}>

      <ImageBackground
        source={background}
        style={styles.image}>
          <View style={{flex:1}}>
          {<Map/>}
          </View>

        </ImageBackground>
        
    </ThemedView>
  );
}