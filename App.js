import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PhotoPage from './Views/PhotoPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FrontPage from './Views/FrontPage';
import PhotoPage from './Views/PhotoPage';

//kode
const Tab = createBottomTabNavigator;

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Photo" component={PhotoPage} />
        <Tab.Screen name="Front Page" component={FrontPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
