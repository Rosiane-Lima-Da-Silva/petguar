import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Alert, ScrollView,Image } from 'react-native';


export function Cadastro ({navigation}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const Submit = () => {
      if (name === '' ||email === ''|| password === '') {
        Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      }else{
        navigation.navigate('Login',{ registrarEmail: email, registrarPassword: password });
      }
      
    };
    return(
        <ScrollView contentContainerStyle={styles.container}>    
          <Image style={styles.img} source={require('../imagens/logo.png')} />
           
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Nome'
              style={styles.input}
              keyboardType="name"
              onChangeText={setName}
              value={name}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='E-mail'
              style={styles.input}
              keyboardType="email"
              onChangeText={setEmail}
              value={email}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
                    placeholder='Senha'
                    style={styles.input}
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                    
                />
          </View>   

          <Button title="Cadastrar" onPress={Submit} color="green"/>

        </ScrollView> 

    );
}
    const styles = StyleSheet.create({
      container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
      },
      img: {
        width: 200,
        height: 150,
        alignSelf:'center',
        marginBottom: 20,
      },
      inputContainer: {
        width: '50%',
        marginBottom: 15,
        
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
        color: 'black',
      },
    });




     


