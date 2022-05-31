import { StatusBar } from 'expo-status-bar';
import React,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Countries from './Component/Countries';

export default function App() {
  const [countries, setCountries]=useState([])
  useEffect(() => {
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json)
  .then(data => setCountries(data))

  },[])
  return (
    <View style={styles.container}>
      <Text>Abeta e valo hye ja</Text>
      <scroll>
        {
          countries.map(country => <Countries country={country} key={country.id}></Countries>
          )
        }
      </scroll>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
