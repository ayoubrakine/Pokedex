import React from 'react';
import { StyleSheet, View, Image, SectionList } from 'react-native';
import { Text, Button } from 'react-native-elements';

const PokemonDetails = ({ route, navigation }) => {
  const { pokemon } = route.params;

  const data = [
    {title: 'Num', data: [pokemon.num]},
    {title: 'Type', data: [pokemon.type.join(', ')]},
    {title: 'Height', data: [pokemon.height]},
    {title: 'Weight', data: [pokemon.weight]},
    {title: 'Next Evolution', data: pokemon.next_evolution ? pokemon.next_evolution.map(evolution => evolution.name) : []},
  ];

  return (
    <View style={styles.container}>
      <Image source={{ uri: pokemon.img }} style={styles.image} />
      <Text h3 style={styles.name}>{pokemon.name}</Text>
      <Text style={styles.details}></Text>
      
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Text style={styles.details}>{item}</Text>}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />

      <Button
        title="Close"
        onPress={() => navigation.goBack()}
        buttonStyle={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFD23F',
    
  },
  image: {
    marginTop:80,
    width: 200,
    height: 190,
    marginBottom: 0,
  },
  name: {
    marginBottom: 10,
    fontWeight: 'bold',
    color:'red'
  },
  details: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontWeight: 'bold',
    backgroundColor: '#F5F5F5',
    padding: 5,
  },
  button: {
    marginTop: 10,
    width: 101,
    marginBottom :60,
  },
});

export default PokemonDetails;
