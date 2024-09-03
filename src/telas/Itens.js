import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Se estiver usando Expo para ícones

export function Cadastro({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Submit = () => {
    if (!name || !email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    Alert.alert('Cadastro realizado com sucesso!', `Nome: ${name}\nEmail: ${email}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={32} color="black" />
        </TouchableOpacity>
        <Image style={styles.img} source={require('../imagens/logo.png')} />
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Comida</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Agua</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Monitoramento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Porta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  menu: {
    alignItems: 'center',
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: '#cccccc',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    marginVertical: 5,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 18,
    color: 'black',
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 20,
    width: '90%',
    padding: 10,
    margin: 10,
    textAlign: 'center',
    backgroundColor: 'lightgrey',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
