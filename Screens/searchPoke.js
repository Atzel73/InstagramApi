import React, { useState } from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

export const  PokeSearch = () => {
  const [poki, sendPoki] = useState('');
  const [advice, setAdvice] = useState('');
  const [spriteBack, setBack] = useState('');
  const [spriteFront, setFront] = useState('');
  const [id, setId] = useState('');
  const [type, setType] = useState('');
  const [abi, setAbilitie] = useState('');
  const [error, setError] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [abilityNames, setAbilityNames] = useState([]);
  let name;
   
  const getAdvice = (poki) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${poki}`)
      .then((response) => {
        setAdvice(response.data.species.name);
        setBack(response.data.sprites.back_default);
        setFront(response.data.sprites.front_default);
        setId(response.data.id);
        setType(response.data.types[0].type.name);
        setAbilitie(response.data.abilities[0].ability.name);
        setShowDetails(true);
        setError(null);
        const abilities = response.data.abilities;

  const names = abilities.map(a => a.ability.name);

  setAbilityNames(names);
        
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('No se encontró el Pokémon');
        setShowDetails(false);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="search pokimon" style={styles.input} value={poki} onChangeText={(text) => sendPoki(text)}
      />

      <Button title="Get Pokimon" onPress={() => getAdvice(poki)} style={styles.button} color='black'/>

      {showDetails && (
        <View style={styles.detailsContainer}>
          <Text style={styles.text}>El pokemon es: {advice}</Text>
          <Text style={styles.text}>Su ID es: {id}</Text>
          <Text style={styles.text}>Su tipo es: {type}</Text>
          {abilityNames.map(name => <Text style={styles.text}>Su habilidad es: {name}</Text>)} 
          <View style={styles.imageContainer}>
            <Image style={styles.Image} source={{ uri: spriteBack }} />
            <Image style={styles.Image} source={{ uri: spriteFront }} />
          </View>




          
        </View>
        
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  button:{
    borderBlockColor: 'white',
    borderColor: 'white',
  },
  detailsContainer: {
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'auto',
    color: 'white',
  },
  input: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 115,
    marginTop: -195,
    color: 'white',
  },
  Image: {
    width: 200,
    height: 200,
    marginBottom: 55,
    marginLeft: 10,
    marginEnd: -10,
  },
  imageContainer: {
    marginTop: -25,
    marginEnd: -25,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});
