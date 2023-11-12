import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'


export default function CheckBox({options = [], onChange}) {
  return (
    <View>
      {options.map((op, index) => (
        <><View>
          <TouchableOpacity>
            <Ionicons name='checkbox' />
          </TouchableOpacity>
        </View><Text>{op?.text}</Text></>
      ))}
    </View>
  )
}
const style = StyleSheet.create({
  optionContainer: {
    
  }
})