import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons'


const InputPadrao = ({icon}) => {
    return ( 
        <View style={style.container}>
            <Ionicons name={`${icon}`}/>
        <TextInput style={style.input}>
        </TextInput>
        </View>
     );
}
 
const style = StyleSheet.create({
    container: {
        backgroundColor: "#F1F5F4",
        width: 280,
        height: 35,
        borderRadius: 5,
        paddingHorizontal: 7,
        flexDirection: 'row',
        alignItems: 'center',
      },
      input:{
        width: '100%',
      }
    })
export default InputPadrao;