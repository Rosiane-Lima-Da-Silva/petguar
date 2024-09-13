import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ícone de saída
import { getAuth, signOut } from "firebase/auth"; // Importar o método signOut do Firebase

// pegar as dimensões da tela
const { width } = Dimensions.get('window');

// Função para realizar o logout
const logout = (navigation) => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Passou no logout, vai para a tela de login
      navigation.navigate('Login');
    })
    .catch((error) => {
      // Tratar erros de logout, se necessário
      console.log('Erro ao sair:', error);
    });
};

export function Menu({ navigation }) {
  // Função para lidar com a saída
  const handleExit = () => {
    if (width > 600) {
      // Para telas maiores (navegador ou tablet)
      const userConfirmed = window.confirm("Tem certeza de que deseja sair?");
      
      if (userConfirmed) {
        logout(navigation); // Chama a função logout
      } else {
        console.log("Cancelado");
      }
    } else {
      // Para telas menores (dispositivos móveis)
      Alert.alert(
        "Quer sair?", // Título
        "Tem certeza de que deseja sair?", // Mensagem
        [
          {
            text: "Sim", // Opção para sair
            onPress: () => logout(navigation), // Chama a função logout
          },
          {
            text: "Não", // Opção para permanecer
            onPress: () => console.log("Cancelado"),
            style: "cancel", // Cancelamento
          },
        ],
        { cancelable: false } // Impede que o diálogo seja fechado tocando fora dele
      );
    }
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
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
  responsiveOption: {
    width: width > 600 ? '40%' : '100%',
    alignSelf: 'center',
  },
  exitIcon: {
    position: 'absolute',
    bottom: 35,
    alignSelf: 'left',
    marginLeft: 15,
  },
});
