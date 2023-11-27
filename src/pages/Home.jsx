import React from "react";
import Card1 from "../componentes/Card1"
import {
  Button,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import Navbar from "../componentes/Navbar";

const Home = () => {
  return (
    <SafeAreaView>
      <Navbar />
    <View style={style.container}>
      <Image
        source={require("../images/logoTCC.png")}
        style={{ width: 200, height: 170 }}
        />
      <View style={style.texto}>
        <Text style={style.text}>Seja bem vindo, usuário!</Text>
        <Text style={style.text}>
          Por favor selecione qual tipo de serviço você deseja
        </Text>
      </View>
      <View style={style.services}>
      <Card1 conteudo={{title:"Barbearia", 
      img:`${require('../images/Cabelereiro.jpg')}`, 
      width: 150, 
      height: 150,
     }}
       />
      <Card1 conteudo={{title:"Salão de beleza", 
      img:`${require('../images/Salao.jpg')}`, 
      width: 150, 
      height: 150,
      cardHeight: 300,
      borderRadius: 5,
    }}
    />
      </View>
    </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#06121E",
    gap: 5,
  },
  text: {
    color: "#f9f9f9",
    fontWeight: "600",
    fontSize: 15
  },
  texto: {
    marginBottom: 20,
  },
  services: {
    gap: 20,
    flexDirection: "row",
  },
});

export default Home;
