import React, { Component, useState } from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

const Login = ({ saveLogin }) => {
  const [account, setAccount] = useState('in005');
  const [password, setPassword] = useState('uN9PcwziTzzellN');

  function login() {
    axios.post('https://interview.m-inno.com/api/auth/local', {
      identifier: account,
      password: password, 
    })
    .then(function (response) {
      if (response.status == 200) {
        const { jwt, user } = response.data;
        saveLogin({
          user, jwt
        })
      }
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          value={account}
          onChangeText={(account) => setAccount(account)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>       
      <TouchableOpacity style={styles.loginBtn}
        onPress={() => login()}
      >
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  inputView: {
    borderColor: '#cccccc',
    borderWidth: 2,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#212B36",
  },
  loginText: {
    color: '#ffffff'
  }
});

export default Login;