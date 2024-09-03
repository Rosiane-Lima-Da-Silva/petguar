import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert, ScrollView,Image } from 'react-native';


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
            <Image style={styles.img} source={require('../imagens/logo.png')} />
            <View style={styles.caixacad}>
              <Text style={styles.nomecad}>Cadastro</Text>
            </View>
                <TextInput
                    placeholder='Nome'
                    style={styles.input}
                    keyboardType="Nome"
                    onChangeText={setName}
                    value={name}
                />
                <TextInput
                    placeholder='E-mail'
                    style={styles.input}
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    placeholder='Senha'
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
      borderBlockColor: 'black',
      borderWidth: 2,
      borderRadius: 10,
      fontSize: 20,
      width: '90%',
      padding: 10,
      margin: 10,
      textAlign: 'center',
      backgroundColor: 'lightgrey',
      },
      img: {
        width: 150,
        height: 150,
        alignSelf: 'center',
      }, 
      nomecad: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'black',
      },
      caixacad: {
        width: 120,
        height: 50,
        alignSelf:'center',
      }
    });



