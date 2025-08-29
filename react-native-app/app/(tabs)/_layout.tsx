import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { Tabs } from 'expo-router';
import React from 'react';

/*
This file manages the Tab Navigator, routing to home, search, camera, location.
This group (tabs) has its own layout/slot using <Tabs>.

Every (group) in expo-router must define its own _layout.tsx file 

This acts as the layout and contains the implicit <Slot /> for screens.
*/

export default function TabLayout() {

  const colorScheme = useColorScheme(); // use different color schemes

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;  

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.tint,
        tabBarInactiveTintColor: theme.inactiveTint, 
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: theme.background
        }
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />, // parameter color is coming from screenOptions
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="alarm" color={color} />,
        }}
      />

      <Tabs.Screen
        name="camera"
        options={{
          title: 'Camera',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="alarm.fill" color={color} />,
        }}
      />

      <Tabs.Screen
        name="location"
        options={{
          title: 'Location',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="seal" color={color} />,
        }}
        />
        
    </Tabs>
  );
}
