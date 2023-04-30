import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const PokemonList = ({ navigation }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then(response => response.json())
      .then(data => setPokemonList(data.pokemon))
      .catch(error => console.error(error));
  }, []);

  const groupPokemonsByType = () => {
    return pokemonList.reduce((grouped, pokemon) => {
      const { type } = pokemon;
      const primaryType = type[0]; // Utiliser le premier type seulement
      if (grouped[primaryType]) {
        grouped[primaryType].push(pokemon);
      } else {
        grouped[primaryType] = [pokemon];
      }
      return grouped;
    }, {});
  };
  

  const renderPokemonItem = ({ item }) => {
    const { name, num, img } = item;

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('PokemonDetails', { pokemon: item })}
      >
        <Image source={{ uri: img }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    );
  };

  const renderPokemonType = ({ item }) => {
    const { type, data } = item;

    return (
      <View style={styles.typeContainer}>
        <Text style={styles.typeTitle}>{type}</Text>
        <FlatList
          data={data}
          renderItem={renderPokemonItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    );
  };

  const groupedPokemons = groupPokemonsByType();
  const pokemonTypeList = Object.keys(groupedPokemons).map(type => ({
    type,
    data: groupedPokemons[type],
  }));

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonTypeList}
        renderItem={renderPokemonType}
        keyExtractor={item => item.type}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD23F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  typeContainer: {
    marginTop: 20,
    backgroundColor:'#FFD23F',
  },
  typeTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor:'black',
    borderColor:'black',
    color:'white',
    shadowColor:'gray',
    padding:15
    

  },
  card: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    width: 160,
    height: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PokemonList;