import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const Card1 = ({conteudo}) => {
    return (  
        <View style={[style.body, {width: conteudo.cardWidth? conteudo.cardWidth : 150, height: conteudo.cardHeight? conteudo.cardHeight : 150}]}>
            <Text style={style.text}>
                {conteudo.title}
            </Text>
                <Image source={`${conteudo.img}`} style={{width: conteudo.width? conteudo.width: 150, height: conteudo.height? conteudo.height: 150, borderRadius: conteudo.borderRadius}}/>
        </View>

    );
}


const style = StyleSheet.create({
    body:{
        alignItems: 'center',
        gap: 5,
    },
    text:{
        color: '#f5f5f5',
        fontSize: 20,
    }
})
    


export default Card1;