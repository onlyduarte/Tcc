import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Info = (props) => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.name}>{props.nome}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Info;

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
  },
  name: {
    fontSize: 17,
    color: "white",
  },

});
