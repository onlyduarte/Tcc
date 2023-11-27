import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Info from '../componentes/Info'
import Avaliacao from '../componentes/Avaliacao'
import { Button } from '@rneui/base'
import { SafeAreaView } from 'react-native-safe-area-context'

const Perfil = () => {
  return (
    <SafeAreaView style={styles.body}>
      <Info title={'Nome:'} nome={'João Dener'}/>
      <Info title={'E-mail:'} nome={'joaozinho123@hotmail.com'}/>
      <Info title={'Cep:'} nome={'4002-8922'}/>
      <Avaliacao title={'Avaliação como cliente:'} nome={'João Dener'} star={2}/>
      <Button  title={'Sair'}
      buttonStyle={{
        width: 250,
        height: 40,
        backgroundColor: '#EBB512',
        alignSelf: 'center',
        top: 10
      }}/>
    </SafeAreaView>
  )
}

export default Perfil

const styles = StyleSheet.create({
    body:{
        width: '100%',
        height: '100%',
        backgroundColor: '#06121E',
    },
})