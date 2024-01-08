import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Reserve from '../componentes/Reserve'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../componentes/Navbar'


const Reservation = () => {
  return (
    <View style={styles.body}>
      <Navbar/>
    <ScrollView>
      <View style={styles.vish}>
    <Text style={{fontSize: 25, color: 'white', alignSelf: 'center', marginBottom: 10, marginTop: 30, borderBottomColor: 'white', borderBottomWidth: 1,}}>Minhas Reservas</Text>
      <Reserve/>
      <Reserve/>
      <Reserve/>
      <Reserve/>
      </View>
    </ScrollView>
    </View>   
  )
}

export default Reservation

const styles = StyleSheet.create({
    body:{
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#06121E',
        paddingTop: 10,
    },
    vish:{
      alignItems: 'center'
    }
})