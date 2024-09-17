import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from './firebase.config';
import { updateProfile, deleteUser } from "firebase/auth";

export function Dashboard({ navigation }) {
  const [nome, setNome] = useState('');
  const [novoNome, setNovoNome] = useState('');
  const [carregando, setCarregando] = useState(true);

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
    <View style={styles.container}>
      <Text style={styles.label}>Nome Atual:</Text>
      <Text style={styles.value}>{nome}</Text>

      <TextInput
        placeholder="Novo nome"
        style={styles.input}
        value={novoNome}
        onChangeText={setNovoNome}
      />
      <Button title="Atualizar Nome" onPress={atualizarNome} />

      <Button title="Deletar Conta" color="red" onPress={deletarConta} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
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
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
});