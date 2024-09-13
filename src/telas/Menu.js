import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Para o ícone de saída

// Obter as dimensões da tela
const { width } = Dimensions.get('window');

export function Menu({ navigation }) {
  // Função para lidar com a saída
  const handleExit = () => {
    // Exibe uma mensagem de confirmação
    Alert.alert(
      "Quer sair?", // Título
      "Tem certeza de que deseja sair?", // Mensagem
      [
        {
          text: "Sim", // Opção para sair
          onPress: () => navigation.navigate('Login'), // Redireciona para a página de login

        },
        {
          text: "Não", // Opção para permanecer na página
          onPress: () => console.log("Cancelado"), // Ação quando o usuário pressiona "Não"
          style: "cancel", // Cancelamento
        },
      ],
      { cancelable: false } // Impede que o diálogo seja fechado tocando fora dele
    );
  };

  return (
    <View style={styles.container}>
      {/* Perfil com imagem, nome e email */}
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={require('../imagens/Perfil.jpg')} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Nome</Text>
          <Text style={styles.email}>Email@teste.com</Text>
        </View>
      </View>

      {/* Título */}
      <Text style={styles.title}>Configurações</Text>

      {/* Opções */}
      <TouchableOpacity style={[styles.option, styles.responsiveOption]} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.optionText}>Atualizar dados</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.option, styles.responsiveOption]} onPress={() => alert('Opção 2')}>
        <Text style={styles.optionText}>Opção 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, styles.responsiveOption]} onPress={() => alert('Opção 3')}>
        <Text style={styles.optionText}>Opção 3</Text>
      </TouchableOpacity>

      {/* Ícone de saída */}
      <TouchableOpacity style={styles.exitIcon} onPress={handleExit}>
        <Ionicons name="exit-outline" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileContainer: {
    flexDirection: 'row', // Imagem, nome e e-mail em uma linha
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20, // Espaço entre a imagem e o texto
  },
  infoContainer: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: '#333',
  },
  option: {
    backgroundColor: '#3FA5A0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  optionText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  // Responsividade com base na largura da tela
  responsiveOption: {
    width: width > 600 ? '40%' : '100%',  // 40% de largura em telas maiores (PC), 100% em telas menores (smartphone)
    alignSelf: 'center',
  },
  exitIcon: {
    position: 'absolute',
    bottom: 35,
    alignSelf: 'left',
    marginLeft: 15,
  },
});
