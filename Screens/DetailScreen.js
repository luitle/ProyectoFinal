import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PokemonDetailScreen = ({ route }) => {
  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
      {/* Imagen de la Pokébola */}
      <Image
        style={styles.pokeball}
        source={require('../Pokeball.png')}
      />
      {/* Imagen del Pokémon */}
      <Image
        style={styles.image}
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
        }}
      />
      {/* Texto de detalles */}
      <Text style={styles.text}>Pokedex Number: {pokemon.id}</Text>
      <Text style={styles.text}>
        Type: {pokemon.types.map((type) => type.type.name).join(', ')}
      </Text>
      {/* ... Otros detalles del Pokémon */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FE1717',
    position: 'relative', 
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    zIndex: 1, 
  },
  pokeball: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    position: 'absolute', 
    top: 50, 
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 5,
  },
});

export default PokemonDetailScreen;
