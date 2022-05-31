import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Country({country}) {
  return (
    <View>
      <Text>Country: {country.common}</Text>
    <image style={{height:200, width:200}}
    source={{url: 'country.flag.png'}}
    >
    </image>
    </View>
  )
}
// const styles = StyleSheet.create({
//     container: {
//         height:200, 
//     }
// })