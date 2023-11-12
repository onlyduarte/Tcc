import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, ImageBackground} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

const Search = () => {
    const [busca, setBusca] = useState(null)
    return ( 
        <ImageBackground source={require('../images/bgCont.jpg')} style={style.body}>
            <Text style={style.text}>
                Pesquise por profissionais ou tópicos
            </Text>
            <TextInput style={style.input}/>
            </ImageBackground>
     );
}
 
const style = StyleSheet.create({
    body:{
       width: '100%',
       height: 150,
       justifyContent: 'center',
       alignItems: 'center',
       gap: 10,
    },
    text:{
        color: '#f5f5f5',
        fontWeight: 'bold',
        fontSize: 18,
    },
    input: {
        backgroundColor: "#F1F5F4",
        width: "70%",
        height: 35 ,
        borderRadius: 5,
        paddingHorizontal: 7,
      },
})
export default Search;