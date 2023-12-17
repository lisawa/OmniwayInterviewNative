import React, { Component, useState } from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, require } from 'react-native';

const Proflie = ({ user, logout }) => {
  console.log(user);
  function logoutUser() {
    logout();
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.profile}>
        <Image
            style={{width: 300, height: 300}}
            source={{uri: `https://interview.m-inno.com${user?.photoURL?.url}`}}
        />
        <Text>UserName: {user?.displayName}</Text>
        <Text>Email: {user?.email}</Text>
      </View>       
      <TouchableOpacity style={styles.loginBtn}
        onPress={() => logoutUser()}
      >
        <Text style={styles.loginText}>LOGOUT</Text> 
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center',
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

export default Proflie;