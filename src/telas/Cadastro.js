import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';


export function Cadastro ({navigation}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const Submit = () => {
        if (!name || !email || !password) {
          Alert.alert('Erro', 'Por favor, preencha todos os campos.');
          return;
        }
        // Aqui você pode enviar os dados para um servidor ou armazená-los localmente
        Alert.alert('Cadastro realizado com sucesso!', `Nome: ${name}\nEmail: ${email}`);
      };
    return(
        <ScrollView contentContainerStyle={styles.container}>    
            <View style={styles.form}>
                <Text style={styles.label} >Nome</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    value={email}
                />


                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                />
                 <Button title="Cadastrar" onPress={Submit} />


                <Button title='Voltar' onPress={()=> navigation.goBack()}/>
            </View>


        </ScrollView>    
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5',
    },


    form: {
        width: '100%',
      },
      label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
      },
      input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
      },
    });



