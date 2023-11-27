import React from "react";
import { View, Text, StyleSheet, TextInput, Image, Button } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  const entrar = () => {
    if (email == "teste" && senha == 1234) {
      navigation.navigate("Home");
    } else {
      alert("Login ou senha incorretos");
    }
  };
  return (
    <SafeAreaView style={style.body}>
      <Image
        source={require("../images/logoTCC.png")}
        style={{ width: 200, height: 170, marginBottom: -10 }}
      />
      <View style={style.container}>
        <View style={style.containerInput}>
          <Text style={style.text}>Email</Text>
          <TextInput style={style.input} onChangeText={setEmail} />
        </View>
        <View style={style.containerInput}>
          <Text style={style.text}>Senha</Text>
          <TextInput secureTextEntry={true} style={style.input} onChangeText={setSenha} />
        </View>
        <Button title="Acessar" onPress={entrar} color="#EBB512" />
        {/* <ButtonC title='Acessar' bgcolor='#421801' onPress={entrar}/> */}
      </View>
      <View style={style.footer}>
        <Text style={style.text}>Não tenho uma conta</Text>
        <Text style={style.text}>Esqueci a senha</Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  body: {
    backgroundColor: "#06121E",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    gap: 7,
    paddingBottom: 100,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  input: {
    backgroundColor: "#F1F5F4",
    width: "100%",
    height: 35,
    borderRadius: 5,
    paddingHorizontal: 7,
  },
  containerInput: {
    width: "70%",
    marginBottom: 10,
    gap: 5,
  },
  text: {
    fontWeight: "400",
    color: "#F1F5F4",
  },
  footer: {
    width: "100%",
    alignItems: "center",
  },
});

export default Login;
