import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '@rneui/base'

const TypeAccount = ({ navigation }) => {
    const RegisterClient = () => {
        navigation.navigate("RegisterCliente");
    }
    const RegisterColab = () => {
        navigation.navigate("RegisterColab");
    }
  return (
    <SafeAreaView style={styles.body}>
      <Image source={require("../images/logoTCC.png")} style={{width: 250, height: 200, alignSelf: 'center', top: 50}}/>
      <View style={styles.container}>
      <Button title={'Cadastrar como cliente'} buttonStyle={{width: 250, height: 60, marginBottom: 20, backgroundColor: '#EBB512'}}
      onPress={RegisterClient}/>
      <Button title={'Cadastrar como colaborador'} buttonStyle={{width: 250, height: 60, marginBottom: 20, backgroundColor: '#EBB512'}}
      onPress={RegisterColab}/>
      </View>
    </SafeAreaView>
  )
}

export default TypeAccount

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#06121E',
        width: '100%',
        height: '100%',
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        top: 130
    },
    btn:{
        width: 50,
        height: 30
    }
})