import React from "react";
import Card1 from "../componentes/Card1"
import {useState, useEffect, useRef} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import Cardapio from "./Cardapio";
import MapView from "react-native-maps";
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'


const Home = () => {
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);

    useEffect(() => {
      (async function(){
        const{status, permissions } = await Permissions.askAsync(Permissions.LOCATION)
        if(status === 'granted'){
            let location = await Location.getCurrentPositionAsync({enableHighAcurracy: true});
            setOrigin({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.000922,
              longitudeDelta: 0.000421  
            })
        }else{
          throw new Error('Location permission not granted');
        }
      })();
    },[]);

  const teste = () => {
    console.log("teste")
    }
  return (
    <View style={style.container}>
      <Image
        source={require("../images/logoTCC.png")}
        style={{ width: 200, height: 170}}
        />
      <View style={style.texto}>
        <Text style={style.text}>Seja bem vindo, usuário!</Text>
      </View>
      <MapView
      style={style.map}
          initialRegion={origin}
          showsUserLocation={true}
          loadingEnabled={true}
        
      />
      {/* <View style={style.services}>
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
      </View> */}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#06121E",
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
  map:{
    width: '90%',
    height: '40%',
  }
});

export default Home;
