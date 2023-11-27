import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Stars from "./Stars";

const CardCliente = (props) => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View>
          <Image
            source={require("../images/logoTCC.png")}
            style={{ width: 100, height: 100, top: 15 }}
          />
        </View>
        <View style={styles.infoUser}>
          <Text style={styles.textUser}>Juan Denner</Text>
          <Text style={[styles.textUser, { marginBottom: 15, fontSize: 13 }]}>
            Cabeleleiro
          </Text>
          <Text style={[styles.textUser, { fontSize: 13 }]}>
            100% de recomendação
          </Text>
        </View>
        <View style={{ top: 15, gap: 2 }}>
        <Stars star={props.star}/>
          <Text>Avaliações: {props.avaliacao}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: 130,
    alignItems: "center",
    marginTop: 20,
  },
  container: {
    width: "90%",
    height: "100%",
    backgroundColor: "#D9D9D9",
    borderRadius: 3,
    flexDirection: "row",
  },
  star: {
    flexDirection: "row",
  },
  infoUser: {
    top: 20,
    gap: 3,
  },
  textUser: {
    fontWeight: "bold",
  },
});
export default CardCliente;
