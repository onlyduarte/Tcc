import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "@rneui/base";

const Filtro = () => {
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <View>
      <View style={style.container}>
        <Ionicons name="return-up-back" size={30} marginLeft={10} />
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
          <Ionicons name="filter" size={30} />
          <Text style={style.text}>Filtro</Text>
        </View>
      </View>
        <Text style={[style.text, {marginLeft: 10}]}>17 Profissionais próximos {"\n"} numa área de 20 km</Text>
    </View>
  );
};
const style = StyleSheet.create({
  body: {

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

export default Filtro;
