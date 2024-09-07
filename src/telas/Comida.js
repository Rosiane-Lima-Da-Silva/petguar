import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Para o ícone do menu

// Obter as dimensões da tela
const { width } = Dimensions.get('window');

export function Comida({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Menu Icon */}
      <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={32} color="black" />
      </TouchableOpacity>

      {/* Imagem Centralizada */}
      <Image style={styles.image} source={require('../imagens/logo.png')} />

      {/* Título */}
      <Text style={styles.title}>Nivel da ração</Text>

      {/* Botões */}
      <TouchableOpacity style={[styles.button, styles.responsiveButton]} onPress={() => navigation.navigate('Horario')}>
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
    left: 20, // Lado esquerdo da tela
    zIndex: 1,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20, // Adiciona espaço entre a imagem e o título
    alignSelf: 'center', // Alinhe a imagem ao centro da tela
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
  // Responsividade com base na largura da tela
  responsiveButton: {
    width: width > 600 ? '40%' : '80%',  // 40% de largura em telas maiores (PC), 80% em telas menores (smartphone)
  },
});
