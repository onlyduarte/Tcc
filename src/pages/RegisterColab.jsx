import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { Button } from '@rneui/base'
import React from 'react'

const RegisterColab = ({ navigation }) => {
  const cadastrar = () => {
    alert("Cadastrado com sucesso");
    navigation.navigate("Login");
  };
  return (
    <View style={styles.body}>
      <Image
        source={require("../images/logoTCC.png")}
        style={{ width: 180, height: 180, marginTop: 20 }}
      />
      <View style={styles.containerInput}>
        <TextInput placeholder="Nome" style={styles.inputMini} />
        <TextInput placeholder="Sobrenome" style={styles.inputMini} />
      </View>
      <View style={styles.containerInput}>
        <TextInput placeholder="CPF/CNPJ" style={styles.inputMini} />
        <TextInput placeholder='CEP' style={styles.inputMini}/>
      </View>
      <TextInput
        placeholder="Tipo de estabelecimento"
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        placeholder="E-mail"
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput placeholder="Confirmar Senha" style={styles.input} />
      <Button
        title={"Cadastrar"}
        buttonStyle={{
          width: 250,
          height: 40,
          backgroundColor: "#EBB512",
        }}
        onPress={cadastrar}
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