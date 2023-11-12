import React from 'react';
import {Ionicons} from '@expo/vector-icons'
import { View, StyleSheet, Image } from 'react-native';


const Navbar = () => {
    return ( 
        <View style={style.container}>
            <Ionicons name='menu' size={35}/>
            <Image source={require("../images/logoTCC.png")} style={{width: 50, height: 50, alignSelf: 'center'}} />
            <Ionicons name='notifications' size={35} />
        </View>
     );
}
 
const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: '#E98E02',
        top: 25,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 5,
        zIndex: 3,

    }
})
export default Navbar;