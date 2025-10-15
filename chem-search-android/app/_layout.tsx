import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';


/*
main rooting
*/

export default function RootLayout() {

  const colorScheme = useColorScheme(); // use different color schemes

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;  

  const [loaded] = useFonts({ //Destructuring -> useFonts returns array with boolean that is saved in [loaded] 
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  // Only two possible screens on Stack: routes from (tabs) or +not-found
  return ( 
    <Stack screenOptions={{ headerStyle: {backgroundColor: theme.headerBackground, }, headerTintColor: theme.text, headerShadowVisible: false}}>
      
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> 
      
      <Stack.Screen name="+not-found" />
      
    </Stack>
  );
}
