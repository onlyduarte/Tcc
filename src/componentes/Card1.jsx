import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Card1 = ({ conteudo }) => {
  const { cardWidth, cardHeight, onePress, title, img, width, height, borderRadius } = conteudo;
  
  return (
    <TouchableOpacity
      style={[
        style.body,
        { width: cardWidth ? cardWidth : 150, height: cardHeight ? cardHeight : 150, borderRadius },
      ]}
    >
      <Text style={style.text}>{title}</Text>
      <Image source={img} style={{ width: width ? width : 150, height: height ? height : 150, borderRadius }} />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  body: {
    alignItems: 'center',
    gap: 5,
  },
  text: {
    color: '#f5f5f5',
    fontSize: 20,
  },
});

export default Card1;
