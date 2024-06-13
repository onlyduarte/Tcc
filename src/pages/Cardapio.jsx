import React from "react";
import { SafeAreaView, StyleSheet, View, ScrollView, Text, Modal } from "react-native";
import Navbar from "../componentes/Navbar";
import Search from "../componentes/Search";
import Filtro from "../componentes/Filtro";
import CardCliente from "../componentes/CardCliente";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "@rneui/base";



const Cardapio = ({ navigation }) => {
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  return (
      <View style={style.body}>
      <Navbar />
        <ScrollView>
          <Search />
          <View style={style.body2}>
      <View style={style.container}>
        <View style={style.filter}>
          <CheckBox
            containerStyle={{ backgroundColor: "transparent", width: "0%" }}
            size={25}
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="#E98E02"
          />
          <Text style={style.text}>Online</Text>
        </View>
        <View style={style.filter}>
          <Ionicons name="filter" size={30} color={`white`} />
          <Text style={style.text}>Filtro</Text>
        </View>
      </View>
        <Text style={[style.text, {marginLeft: 10, marginBottom: 15}]}>8 Profissionais próximos numa área de 20 km</Text>
    </View>
          <CardCliente star={2} avaliacao={20} />
          <CardCliente star={5}/>
          <CardCliente star={3}/>
          <CardCliente star={1}/>
          <CardCliente star={4}/>
          <CardCliente star={3}/>
          <CardCliente star={4}/>
          <CardCliente star={5}/>
        </ScrollView>
      </View>
  );
};

const style = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: "#06121E",
    paddingTop: 10,
  },
  body2: {
    borderBottomWidth: 10,
    borderBottomColor: '#EBB512',
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#ffffff",
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginLeft: 20,
    left: 120,
  },
});
export default Cardapio;
