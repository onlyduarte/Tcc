import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Stars from "./Stars";

const Avaliacao = (props) => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Stars star={props.star}/>
      </View>
    </SafeAreaView>
  );
};

export default Avaliacao;

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: 100,
    gap: 5,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  container:{
    marginLeft: 10,
    top: -10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10
  },
  name: {
    fontSize: 17,
    color: "white",
  },

});
