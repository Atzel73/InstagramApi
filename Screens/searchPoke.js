import React, { useState } from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

export const PokeSearch = () => {
  const [poki, sendPoki] = useState('');
  const [advice, setAdvice] = useState('');
  const [spriteBack, setBack] = useState('');
  const [spriteFront, setFront] = useState('');
  const [id, setId] = useState('');
  const [typeName, setType] = useState([]);
  const [abi, setAbilitie] = useState('');
  const [error, setError] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [abilityNames, setAbilityNames] = useState([]);

  const getAdvice = (poki) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${poki}`)
      .then((response) => {
        setAdvice(response.data.species.name);
        setBack(response.data.sprites.back_default);
        setFront(response.data.sprites.front_default);
        setId(response.data.id);
        //setType(response.data.types[0].type.name);
        setAbilitie(response.data.abilities[0].ability.name);
        setShowDetails(true);
        setError(null);


        const types = response.data.types;
        const nameTypes = types.map((t) => t.type.name);
        setType(nameTypes);
        console.log("Arreglo de tipos: ", nameTypes);


        const abilities = response.data.abilities;
        const names = abilities.map((a) => a.ability.name);
        setAbilityNames(names);
        console.log("Arreglo de habilidades: ", names);
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
        placeholder="Buscar Pokémon"
        style={styles.input}
        value={poki}
        onChangeText={(text) => sendPoki(text)}
      />

      <Button title="Obtener Pokémon" onPress={() => getAdvice(poki)} style={styles.button} color="black" />

      {showDetails && (
        <View style={styles.detailsContainer}>
          <View style={styles.containerHorizontal}>
            <View style={styles.imageContainer}>
              <Text style={styles.text}>
                Name <Text style={styles.sp}>{advice}</Text>
              </Text>
              <Image style={styles.image} source={{ uri: spriteBack }} />
              <Image style={styles.image} source={{ uri: spriteFront }} />
            </View>

            <View style={styles.textContainer}>

              <Text style={styles.text}>
                ID <Text style={styles.sp}>{id}</Text>
              </Text>


              {typeName.map((name, index) => (
                <Text key={index} style={styles.text}>
                  Type <Text style={styles.sp}>{name}</Text>{''}
                </Text>
              ))}


              {abilityNames.map((name) => (
                <Text key={name} style={styles.text}>
                  Ability <Text style={styles.sp}>{name}</Text>{' '}
                </Text>
              ))}


            </View>
          </View>
        </View>
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: '#083F6F',
    borderWidth: 9,
  },
  button: {
    borderBlockColor: 'white',
    borderColor: 'white',
  },
  detailsContainer: {
    marginTop: 20,
  },
  containerHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  textContainer: {
    marginLeft: 20,
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'auto',
    color: 'black',
    marginBottom: 10,
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'column',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  sp: {
    color: '#083F6F',
  },
});
