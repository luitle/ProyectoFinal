import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import PokemonDetailScreen from '../Screens/DetailScreen'; 
import DatosEstudiantes from '../Screens/DatosEstudiantes';
import Newpokes from '../Screens/Newpokes'; // Asegúrate de importar Newpokes

const Stack = createStackNavigator();

export default function StackNavigator1() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PokemonDetailScreen"
        component={PokemonDetailScreen}
        options={({ route }) => ({
          title: route.params.pokemon.name,
        })}
      />

      {/* Agrega la pantalla DatosEstudiantes */}
      <Stack.Screen
        name="DatosEstudiantes"
        component={DatosEstudiantes}
        options={{ title: 'Datos de Estudiantes' }}
      />

      {/* Agrega la pantalla Newpokes */}
      <Stack.Screen
        name="Newpokes"
        component={Newpokes}
        options={{ title: 'Nuevos Pokémon' }}
      />
    </Stack.Navigator>
  );
}
