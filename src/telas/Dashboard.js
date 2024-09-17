import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image} from 'react-native';
import { auth } from './firebase.config';
import { updateProfile, deleteUser } from "firebase/auth";

export function Dashboard({ navigation }) {
  const [nome, setNome] = useState('');
  const [novoNome, setNovoNome] = useState('');
  const [carregando, setCarregando] = useState(true);
  const { width } = Dimensions.get('window');

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setNome(user.displayName || 'Usuário sem nome');
    }
    setCarregando(false);
  }, []);

  function atualizarNome() {
    const user = auth.currentUser;
    if (user) {
      updateProfile(user, { displayName: novoNome })
        .then(() => {
          setNome(novoNome);
          alert('Nome atualizado com sucesso!');
        })
        .catch(error => {
          alert('Erro ao atualizar nome: ' + error.message);
        });
    }
  }

  function deletarConta() {
    const user = auth.currentUser;
    if (user) {
      deleteUser(user)
        .then(() => {
          alert('Conta deletada com sucesso!');
          navigation.navigate('Login');
        })
        .catch(error => {
          alert('Erro ao deletar a conta: ' + error.message);
        });
    }
  }

  if (carregando) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={[styles.container, width > 600 ? styles.containerWide : styles.containerNarrow]}>
      <Image style={styles.img} source={require('../imagens/logo.png')} />
      <Text style={styles.label}>Nome Atual:</Text>
      <Text style={styles.value}>{nome}</Text>

      <TextInput
        placeholder="Novo nome"
        style={styles.input}
        value={novoNome}
        onChangeText={setNovoNome}
      />

      <TouchableOpacity style={styles.button} onPress={atualizarNome}>
        <Text style={styles.buttonText}>Atualizar Nome</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={deletarConta}>
        <Text style={styles.buttonText}>Deletar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '10%',
    paddingVertical: 50,
    backgroundColor: '#f5f5f5',
  },
  containerWide: {
    paddingHorizontal: '25%',  
  },
  containerNarrow: {
    paddingHorizontal: '10%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    fontSize: 20,
    width: '90%',
    padding: 10,
    margin: 10,
    textAlign: 'center',
    backgroundColor: 'lightgrey',
    color: 'black',
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#3FA5A0',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
    margin: '4%',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 80,
    alignSelf: 'center',
  },
});
