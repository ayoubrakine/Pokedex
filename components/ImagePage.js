import React from 'react';
import { View, Image ,isPressed,StyleSheet} from 'react-native';
import { Text, Button } from 'react-native-elements';

const ImagePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cont} />
      <Image source={require('../assets/pokemonLogo.png')} style={styles.image1} />
      <View style={{ height: 35, backgroundColor: '#FFD23F' }} />
      <Image source={require('../assets/pokemon3.png')} style={styles.image2} />
      
     <Button
        title="GO"
        onPress={() => navigation.navigate('PokemonList')}
        buttonStyle={styles.button}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  button: {

    marginTop: 60,
   
    padding:25,
    backgroundColor: isPressed ? 'blue' : '#3166ae',
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: 'black',
    borderRadius : 30,
    paddingHorizontal: 24,
    paddingVertical: 12,

    width: 200,
  
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius:3,
    height:70,

    alignSelf:'center'
    
   
    
    
  },
  image1: {
    borderRadius: 30,
    marginTop:10,
    margin:0.1,
    width: 380, 
    height: 140,
    alignSelf:'center',

    
  },
  image2: {
    borderRadius: 10,
    marginTop : 30,
    width: 350, 
    height: 250,
    alignSelf:'center',
    marginBottom:50,
    
    
  },
  container:{
    flex:1,
    backgroundColor:'#FFD23F',
  },

  cont:
    { height: 35, backgroundColor: '#FFD23F' }
  

 
  
  });



  export default ImagePage;