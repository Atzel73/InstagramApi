import React, { useState } from 'react';
import { View, Button,  StyleSheet } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { PokeSearch } from './Screens/searchPoke';
import {DexPoke} from './Screens/pokeDex';


  const Stack = createNativeStackNavigator();



export default function App() {
  return (
  

    <View style={styles.container}>
  <NavigationContainer>
      <Stack.Navigator>
    <Stack.Screen
      name="Search"
      component={PokeSearch}  
      options={{ title: 'Searching pokemon!' }}
    />
    
  </Stack.Navigator>
    </NavigationContainer>
    <Button title="See pokemon list!" onPress={() => {DexPoke}} color='black'></Button>
    </View>
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    
  }
});
