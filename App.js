import React from 'react';
import { useState } from "react"; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TextInput } from 'react-native';
import axios from 'axios';

export default function App() { 
  const [poki, sendPoki] = useState("");
  const [advice, setAdvice] = useState(""); 
  const [spriteBack, setBack] = useState("");
  const [spriteFront, setFront] = useState("");
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [abi, setAbilitie] = useState("");
  const [error, setError] = useState(null); // Nuevo estado para almacenar mensajes de error

var element;
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


        for ( element of setAbilitie){
          <Text style={styles.text}>Su habilidad es: {element}</Text>
        }


        
        setError(null); // Limpiar el estado de error en caso de éxito
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('No se encontró el Pokémon'); // Establecer un mensaje de error
      });
  }; 

  return ( 
    <View style={styles.container}> 
      <TextInput placeholder='search pokimon' style={styles.input} value={poki} onChangeText={text => sendPoki(text)}></TextInput>
      
      <Text style={styles.text}>El pokemon es: {advice}</Text>
      <Text style={styles.text}>Su ID es: {id}</Text>
      <Text style={styles.text}>Su tipo es: {type}</Text>
      
      <View style={styles.imageContainer}> 
        <Image style={styles.Image} source={{ uri: spriteBack }}></Image>
        <Image style={styles.Image} source={{ uri: spriteFront }}></Image>
      </View>
      <Button title="Get Pokimon" onPress={() => getAdvice(poki)} color="black" /> 
    </View> 
  ); 
} 
 








const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  container: {
    flex: 1,
    paddingTop: 22,
    flexDirection: "column",
    justifyContent: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  text:{
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'auto',
  },
  input:{
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 115,
    marginTop: -195,
  },
  Image:{
    marginLeft: 115,
    width: 200, 
    height: 200,
    marginBottom: 55,
    marginLeft: 10,
    marginEnd: -10,
  },
  imageContainer:{
    marginTop: -25,
    marginEnd:-25,
    justifyContent: 'center',
    flexDirection: 'row',
  }
});

