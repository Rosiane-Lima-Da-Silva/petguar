import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Para o icon de menu


const { width } = Dimensions.get('window');

export function Porta({ navigation }) {
  const [isDoorOpen, setIsDoorOpen] = useState(false);

  const alternarPorta = () => {
    setIsDoorOpen(!isDoorOpen);
  };

  return (
    <View style={styles.container}>
      {/* Menu */}
      <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.navigate('Menu')}>
        <Ionicons name="menu" size={32} color="black" />
      </TouchableOpacity>

      <Image style={styles.image} source={require('../imagens/logo.png')} />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: isDoorOpen ? 'green' : 'red' }]}
        onPress={alternarPorta}
      >
        <Text style={styles.buttonText}>{isDoorOpen ? 'Porta Aberta' : 'Porta Fechada'}</Text>
      </TouchableOpacity>

      <Text style={styles.statusText}>
        {isDoorOpen ? 'A porta está aberta' : 'A porta está fechada'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  menuIcon: {
    position: 'absolute',
    top: 20,
    left: 20, 
    zIndex: 1,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20, 
    alignSelf: 'center', 
  },
  button: {
    width: width > 600 ? '50%' : '80%', 
    padding: 20,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  statusText: {
    fontSize: 18,
    color: '#333',
    marginTop: 20,
  },
});
