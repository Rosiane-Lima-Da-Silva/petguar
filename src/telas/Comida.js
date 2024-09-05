import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For the menu icon

// Get the screen dimensions
const { width } = Dimensions.get('window');

export function Comida({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Menu Icon */}
      <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={32} color="black" />
      </TouchableOpacity>

      {/* Centered Image */}
      <Image style={styles.image} source={require('../imagens/logo.png')} />

      {/* Title */}
      <Text style={styles.title}>Nivel da ração</Text>

      {/* Buttons */}
      <TouchableOpacity style={[styles.button, styles.responsiveButton]} onPress={() => alert('Liberação Automática')}>
        <Text style={styles.buttonText}>Programar Horário</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.responsiveButton]} onPress={() => alert('Liberação Manual')}>
        <Text style={styles.buttonText}>Pôr ração</Text>
      </TouchableOpacity>
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
    left: 20, // Left side of the screen
    zIndex: 1,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20, // Adds space between the image and the title
    alignSelf: 'center', // Align the image to the center of the screen
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#3FA5A0',
    padding: 15,
    borderRadius: 45,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  // Responsiveness based on screen width
  responsiveButton: {
    width: width > 600 ? '40%' : '80%',  // 40% width on larger screens (PC), 80% on smaller screens (smartphone)
  },
});
