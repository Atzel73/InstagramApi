import React from 'react';
import { useState } from "react"; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TextInput } from 'react-native';
import axios from 'axios';



export default function App() { 
  const [advice, setAdvice] = useState(""); 
  const[spriteBack, setBack] = useState("");
  const[spriteFront, setFront] = useState("");

  const getRandomId = (min, max) => { 
      min = Math.ceil(min); 
      max = Math.floor(max); 
      return (Math.floor(Math.random() *  
          (max - min + 1)) + min).toString(); 
  }; 

  const getAdvice = () => { 
      axios 
          .get("https://pokeapi.co/api/v2/pokemon/" +  
              getRandomId(1, 900)) 
          .then((response) => { 
              setAdvice(response.data.species.name); 
              setBack(response.data.sprites.back_default);
              setFront(response.data.sprites.front_default);
          }); 
  }; 

  return ( 
      <View style={styles.container}> 
      
          
          <TextInput placeholder='search pokimon' style={styles.input}></TextInput>
          <Text style={styles.text}>{advice}</Text>
          <Image style={styles.Image} source={{uri: spriteBack}}></Image> 
          <Image style={styles.Image} source={{uri: spriteFront}}></Image>
          
          <Button title="Get Pokimon" 
              onPress={getAdvice} color="black" /> 


              
      </View> 
  ); 
} 







const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  text:{
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 160,
    marginLeft: 175,
  },
  input:{
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginLeft: 115,
    marginTop: -145,
  },
  Image:{
    marginLeft: 115,
    width: 200, 
    height: 200,
    marginBottom: 55,
  }
});

