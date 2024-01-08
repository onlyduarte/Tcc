import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { Button } from '@rneui/base'
import React from 'react'

const RegisterColab = ({ navigation }) => {
  const finalizarCadastro = () => {
    alert("Cadastrado com sucesso");
    navigation.navigate("Login");
  };
  return (
    <View style={styles.body}>
      <Image
        source={require("../images/logoTCC.png")}
        style={{ width: 180, height: 180, marginTop: 20 }}
      />
      <TextInput
        placeholder="Tempo de experiência"
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        placeholder="Certificados"
        style={styles.input}
      />
      <TextInput
        placeholder="Tipos de serviços"
        style={styles.input}
      />
      <TextInput
        placeholder="Contatos"
        style={styles.input}
      />
      {/* <TextInput
        placeholder="Selecione uma foto para o perfil"
        style={styles.input}
      /> */}
      <Button
        title={"Finalizar cadastro"}
        buttonStyle={{
          width: 250,
          height: 40,
          backgroundColor: "#EBB512",
        }}
        onPress={finalizarCadastro}
      />
    </View>
  )
}

export default RegisterColab

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: "#06121E",
    alignItems: "center",
    gap: 15,
  },
  input: {
    backgroundColor: "#F1F5F4",
    width: 330,
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 5,
  },
  inputMini: {
    backgroundColor: "#F1F5F4",
    width: 161,
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 5,
  },
  containerInput: {
    flexDirection: "row",
    gap: 8,
  },
})