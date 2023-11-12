import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import Navbar from "../componentes/Navbar";
import Search from "../componentes/Search";
import Filtro from "../componentes/Filtro";

const Cardapio = () => {
  return (
    <SafeAreaView>
      <Navbar />
      <View style={style.body}>
        <Search />
        <Filtro />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: "#02854F",
  },
});
export default Cardapio;
