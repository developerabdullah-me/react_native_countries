import { View, Text ,TextInput,StyleSheet} from 'react-native'
import React from 'react'
import React,{ useState,useEffect } from 'react';
import Country from './Country'

export default function Countries() {
  const [countries, setCountries]=useState([])
  useEffect(() => {
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json)
  .then(data => setCountries(data))

  },[])
  return (
    <View>
      <Text> hello country's</Text>
      <Text> Dabdullah</Text>
      <Text> Abdullah@b69</Text>
<TextInput
 style={styles.input}
 onChangeText={onChangeNumber}
 value={number}
 placeholder="useless placeholder"
 keyboardType="numeric"
></TextInput>

      <scroll>
        {
          countries.map(country => <Country country={country} ></Country>
          )
        }
      </scroll>
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})