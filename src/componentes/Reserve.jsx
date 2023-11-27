import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import { Button } from '@rneui/base'

const Reserve = () => {
  return (
    <View style={styles.body}>
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>Juan Dener</Text>
      <Text style={styles.textColor}>Cortes especiais para pessoas especiais</Text>
      <View style={styles.viewInfo}>
        <View style={styles.viewIcon}>
        <Ionicons name='calendar-outline' color={'white'} size={30}/>
        <Text style={styles.textColor}>13/11/2023</Text>
        </View>
        <View style={styles.viewIcon}>
        <Ionicons name='time-outline' color={'white'} size={30}/>
        <Text style={styles.textColor}>09:30h</Text>
        </View>
        <View style={styles.viewIcon}>
        <Ionicons name='cash-outline' color={'white'} size={30}/>
        <Text style={styles.textColor}>R$ 35,00</Text>
        </View>
      </View>
      <View style={styles.viewIcon}>
        <Ionicons name='location-outline' color={'white'} size={30} style={{bottom: 25}} />
        <View>
        <Text style={styles.textColor}>Av. Nove de Julho, 854</Text>
        <Text style={styles.textColor}>Centro - São Paulo</Text>
        <Text style={styles.textColor}>(11) 4002-8922</Text>
        </View>
      </View>
      <View style={styles.btn}>
        <Button title={"Reagendar"} buttonStyle={{width: 160, height: 45}}/>
        <Button title={"Excluir Reserva"} color={'red'} buttonStyle={{width: 160, height: 45}}/>
      </View>
    </View>
  )
}

export default Reserve

const styles = StyleSheet.create({
    body:{
        width: '100%',
        marginLeft: 20,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingBottom: 20,
        marginBottom: 20
    },
    textColor:{
        color: 'white',
        fontSize: 17,
        marginLeft: 5,
        marginBottom: 5
    },
    viewIcon:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    viewInfo:{
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        gap: 30,
        flexWrap: 'wrap'
    },
    btn:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 30,
        marginTop: 10
    }
})