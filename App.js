import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import ImagePage from './components/ImagePage';

const Stack = createStackNavigator();

const App = () => {
  return (
    

  <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Acceuil" component={ImagePage} />
        <Stack.Screen name="PokemonList" component={PokemonList} options={{ title: 'Pokédex' }} />
        <Stack.Screen name="PokemonDetails" component={PokemonDetails} options={{ title: 'Pokemon Details' }} />
      </Stack.Navigator>
  </NavigationContainer>

  );
};

export default App;
