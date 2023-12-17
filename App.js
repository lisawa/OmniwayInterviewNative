import React, { useState } from 'react';
import Login from './page/login';
import Proflie from './page/profile';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  let timer = {};

  function saveLogin(data) {
    setToken(data.jwt);
    setUser(data.user);
    timer = setTimeout(() => cleanAuth(), 10 * 1000);
  }

  function cleanAuth() {
    clearTimeout(timer);
    setToken('');
    setUser({});
  }

  return (
    <View style={styles.container}>
      { token ? 
      <Proflie user={user} logout={() => cleanAuth()} /> : 
      <Login saveLogin={(obj) => saveLogin(obj)} /> }
      
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
