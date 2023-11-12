import React from 'react'
import { Text, TouchableOpacityProps, View, StyleSheet, } from 'react-native';
interface ButtonProps extends TouchableOpacityProps{
    title: string,
    bgcolor?: string,
    width?: string,
    height?: string,
}

const Button = ({title, bgcolor, width, height, ...props}: ButtonProps) => {
    return ( 
        <View style={[{backgroundColor: `${bgcolor}`}, style.body]}>
        <Text style={style.text}>
            {title}
        </Text>
        </View>
     );
}
 
const style = StyleSheet.create({
    body:{
        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    text:{
        color: '#F1F5F4'
    }
})
export default Button;