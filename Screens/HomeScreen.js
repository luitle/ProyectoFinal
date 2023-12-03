import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { SearchBar } from '@rneui/themed';
import Constants from 'expo-constants';
import BotonesImage from '../Botones.png';
import CrucetaImage from '../Cruceta.png';




const HomeScreen = ({ navigation }) => {
  const [lista, setLista] = useState([]);
  const [pokemon, setPokemon] = useState("");
  const [total, setTotal] = useState(0);
  const [consultado, setConsultado] = useState(false);
    const handlePokeballPress = () => {
    navigation.navigate('Newpokes');
  };

  const buscar = (poke) => {
    setConsultado(true);
    const api_url = `https://pokeapi.co/api/v2/pokemon/${poke.toLowerCase()}/`;

    fetch(api_url)
      .then(data => {
        if (!data.ok) {
          throw new Error('Pokémon no encontrado');
        }
        return data.json();
      })
      .then(resultado => {
        setLista([resultado]); // Convertimos el resultado a un array para que FlatList pueda renderizarlo
        setTotal(1);
      })
      .catch(error => {
        console.error(error.message);
        setLista([]);
        setTotal(0);
      });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('PokemonDetailScreen', { pokemon: item })}
    >
      <Image
        style={styles.images}
        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png` }}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Buscador de Pokémon</Text>

 <SearchBar
  round
  containerStyle={{
    backgroundColor: '#FE1717', // Color de fondo
    borderTopWidth: 0, // Sin borde superior
    borderBottomWidth: 0, // Sin borde inferior
    borderBottomColor: 'transparent', // Color del borde inferior transparente
    paddingHorizontal: 10, // Espaciado horizontal
  }}
  inputStyle={{
    backgroundColor: '#fff', // Color del campo de entrada
    fontSize: 16,
    color: '#000', // Color del texto de entrada
  }}
  placeholderTextColor="#888" // Color del texto de marcador de posición
  onChangeText={(texto) => {
    setPokemon(texto);
    buscar(texto);
  }}
  onClear={() => {
    setPokemon("");
    setConsultado(false);
    setLista([]);
  }}
  value={pokemon}
  placeholder="Escribe aquí..."
/>

      <View style={{ margin: 10, fontSize: 20 }}>
        {
          consultado
            ?
            <Text style={styles.texto}>
              Hay {total} resultados
            </Text>
            :
            <Text style={styles.texto}>
              Realiza una búsqueda
            </Text>
        }
      </View>

      <FlatList
        contentContainerStyle={{ alignItems: "center" }}
        data={lista}
        numColumns={3}
        keyExtractor={(item) => {
          const pokemonId = item?.id || ''; 
          return pokemonId.toString();
        }}
        renderItem={renderItem}
      />
    
  {/* Botones decorativos */}
  <View style={styles.buttonsContainer}>
  <Image source={BotonesImage} style={[styles.buttonImage, styles.leftButton]} />
  <Image source={CrucetaImage} style={[styles.buttonImage, styles.rightButton]} />
</View>
 {/* Imagen para navegar a DatosEstudiantes */}
      <TouchableOpacity
        onPress={() => navigation.navigate('DatosEstudiantes')}
        style={styles.pokedexButton}
      >
        <Image
          source={require('../Pokedex.png')}
          style={styles.pokedexImage}
        />
        
       </TouchableOpacity>
  {/* Imagen para navegar a Newpokes */}
      <TouchableOpacity
        onPress={handlePokeballPress}
        style={styles.pokeballContainer}
      >
        <Image
          source={require('../Pokeball.png')}
          style={styles.pokeballImage}
        />
      </TouchableOpacity>
    </View>
  );
}


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: 'flex-start',
    backgroundColor: '#FE1717',
  },
  images: {
    width: 100,
    height: 100,
    margin: 5,
  },
  texto: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
  },
 buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },

  buttonImage: {
    width: 60,
    height: 60,
  },

  leftButton: {
    alignSelf: 'flex-start',
  },

  rightButton: {
    alignSelf: 'flex-end',
  },
  
  pokedexButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  pokedexImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
   pokeballContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    marginBottom:150,
  },
  pokeballImage: {
    width: 80,  // Ajusta el tamaño según sea necesario
    height: 80, // Ajusta el tamaño según sea necesario
    resizeMode: 'contain', // Ajusta el modo de redimensionamiento
  },
});