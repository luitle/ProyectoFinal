import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';

const Newpokes = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
        const data = await response.json();

        const pokemonData = await Promise.all(data.results.map(async (result) => {
          const pokemonResponse = await fetch(result.url);
          const pokemonData = await pokemonResponse.json();

          return {
            name: result.name,
            image: pokemonData.sprites.front_default,
          };
        }));

        setPokemonList(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchData();
  }, []);

  const renderPokemonImage = ({ item }) => (
    <Image
      style={styles.pokemonImage}
      source={{ uri: item.image }}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonList}
        renderItem={renderPokemonImage}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE1717',
  },
  pokemonImage: {
    width: 100,
    height: 100,
    margin: 5,
    resizeMode: 'contain',
  },
});

export default Newpokes;
