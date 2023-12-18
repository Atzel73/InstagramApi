import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import {FlatList, Text, View, StyleSheet, Button } from 'react-native';

type SearchBarComponentProps = {};





const SwitchComponent: React.FunctionComponent<SearchBarComponentProps> = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <View style={styles.view}>
      <Text style={styles.text}>User Search!</Text>
      {/* @ts-ignore */}
      
      <SearchBar
      
        placeholder="Find someone..."
        onChangeText={updateSearch as any}
        value={search}
        platform="default"
      />
    <Button title={"Find User"} ></Button>

<FlatList
        data={[
          {key: 'post 1'},
          {key: 'post 2'},
          {key: 'post 3'},
        ]}
        
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
    
  );
};


const nextScreen = ({navigation}) =>{
  return(
    
       navigation.navigate("User")
    
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
    marginTop: 16,
    marginLeft: 125,
  }
});


export default SwitchComponent;
