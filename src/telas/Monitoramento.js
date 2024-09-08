import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For the menu icon

const { width } = Dimensions.get('window');

export function Monitoramento({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Menu */}
      <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.navigate('Menu')}>
        <Ionicons name="menu" size={32} color="black" />
      </TouchableOpacity>
      

      {/* Centered Image with borderRadius */}
      <Image style={styles.image} source={require('../imagens/logo.png')} />
      <Text style={styles.title}>Monitoramento</Text>
      <Image style={styles.image2} source={require('../imagens/cat.gif')} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: '#333',
  },
  image: {
    width: 100,
    height: 120,
    borderRadius: 5, 
    marginBottom: 50,
    alignSelf: 'center',
  },
  image2: {
    width: 280,
    height: 180,
    borderRadius: 5, 
    marginBottom: 90,
    alignSelf: 'center',
  },

});
