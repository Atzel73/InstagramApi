import React from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'post 1'},
          {key: 'post 2'},
          {key: 'post 3'},
        ]}
        
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      <FlatList
        data={[
          {key: 'post 1'},
          {key: 'post 2'},
          {key: 'post 3'},
        ]}
        
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
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

export default FlatListBasics;