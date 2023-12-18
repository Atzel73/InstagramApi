import React from 'react';
import { Text } from 'react-native-elements';


function Cat(){
    return(
      <Text>Im your cat;</Text>
      
    );
  }




  axios.get('/GeeksforGeeks', {
    params: {
        articleID: articleID
    }
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        // always executed
    });  



    
export default Cat;  