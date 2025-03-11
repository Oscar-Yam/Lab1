// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
const App = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    // Navigate to Home screen
    //console.log("logged in");
    navigation.navigate('Home');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login From</Text>
      <TextInput style={styles.input}
        placeholder='Email'/>
      <TextInput style={styles.input}
        placeholder='Password'
        secureTextEntry/>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#533551',
  },
  title:{
    fontSize:32,
    fontWeight:'bold',
    color:'#f5f55f',
    marginBottom:16,
  },
  input:{
    width:"80%",
    height:50,
    borderColor:'#f5f55f',
    borderWidth:2,
    borderRadius:10,
    paddingHorizontal:10,
    backgroundColor:'#fff'
  },
  button:{
    width:"80%",
    height:50,
    backgroundColor:'#007bff',
    justifyContent:"center",
    alignItems:'center',
    borderRadius:20,
  },
  buttonText:{
    color:'#fff',
    fontSize:18,
    fontWeight:"bold",
  }
});

export default App;