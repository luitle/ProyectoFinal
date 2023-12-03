import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DatosEstudiantes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EQUIPO 4</Text>
      <Text style={styles.students}>
        ESTUDIANTES:
        {'\n'}
        Estrada Islas Luis Armando-20210933
        {'\n'}
        Tellez Gutiérrez Azul Daniel-20210953
      </Text>
      <View style={styles.imagesContainer}>
        <Image
          source={require('../Sableye.png')}
          style={styles.pokemonImageLeft}
        />
        <Image
          source={require('../Gardevoir.png')}
          style={styles.pokemonImageRight}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FE1717',
  },
  title: {
    fontSize: 54,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  students: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  pokemonImageLeft: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  pokemonImageRight: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default DatosEstudiantes;
