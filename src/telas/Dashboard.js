import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { getAuth, updateProfile, deleteUser } from 'firebase/auth';


export  function  Dashboard ({navigation}) {
  const [user, setUser] = useState(null);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const auth = getAuth();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);

    return () => unsubscribe();
  }, []);

  const handleUpdateProfile = async () => {
    if (!user) return;

    try {
      await updateProfile(user, {
        displayName: newEmail ? newEmail : user.displayName,
        email: newEmail ? newEmail : user.email,
      });

      if (newPassword) {
        await user.updatePassword(newPassword);
      }

      Alert.alert('Perfil atualizado com sucesso!');
    } catch (error) {
      Alert.alert('Erro ao atualizar perfil:', error.message);

    }
  };

  const handleDeleteAccount = async () => {
    if (!user) return;

    try {
      await deleteUser(user);
      Alert.alert('Conta excluída com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Erro ao excluir conta:', error.message);
    }
  };

  if (!user) return <Text>Carregando...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={newEmail}
        onChangeText={setNewEmail}
        placeholder="Novo e-mail (opcional)"
      />
      <Text style={styles.label}>Nova Senha:</Text>
      <TextInput
        style={styles.input}
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
        placeholder="Nova senha (opcional)"
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
        <Text style={styles.buttonText}>Atualizar Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDeleteAccount}>
        <Text style={styles.buttonText}>Excluir Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3FA5A0',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

