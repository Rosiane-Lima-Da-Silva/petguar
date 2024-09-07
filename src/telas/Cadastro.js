
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { View, TouchableOpacity,Text, TextInput, StyleSheet, Alert, ScrollView,Image } from 'react-native';
import { auth } from './firebase.config';

export function Cadastro ({navigation}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmarSenha, setConfirmPassword] = useState('');
 
    function Cadastrar  () {
      if (name === '' ||email === ''|| password === ''|| confirmarSenha === '') {
          alert('Erro', 'Por favor, preencha todos os campos.');
          return;

      }
      if(password !== confirmarSenha){
        alert('a senha e a confirmação de senha não são iguais');
        return;
      } else{
        createUserWithEmailAndPassword(auth, email, password)
          .then((UserCredencial) =>{
            const user = UserCredencial.user;
            alert('O usuário ' + email + 'foi criado. faça o login');
            navigation.navigate('Login');;
        })
        .catch((error)=>{
          alert(error.message);
        });
          
      }
       
      
    };
    return(
        <ScrollView contentContainerStyle={styles.container}>    
          <Image style={styles.img} source={require('../imagens/logo.png')} />
           
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Nome'
              style={styles.input}
              keyboardType="default"
              onChangeText={setName}
              value={name}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='E-mail'
              style={styles.input}
              keyboardType="email-address"
              autoComplete='email'
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
          <View style={styles.inputContainer}>
            <TextInput
                    placeholder='confirmar Senha'
                    style={styles.input}
                    secureTextEntry
                    onChangeText={setConfirmPassword}
                    value={confirmarSenha}
                    
                />
          </View>   
          <TouchableOpacity style={styles.button} onPress={Cadastrar}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

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
        width: 140,
        height: 140,
        alignSelf:'center',
        marginBottom: 20,
      },
      inputContainer: {
        width: '90%',
        marginBottom: 15,
        alignItems: 'center',
        
      },
      input: {
        borderBlockColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        fontSize: 20,
        width: '90%',
        padding: 10,
        margin: 10,
        textAlign: 'center',
        backgroundColor: 'lightgrey',
        color: 'black',
      },
      button: {
        backgroundColor: '#3FA5A0',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        margin: 20,
        width: '50%',
      },
      buttonText: {
        color: 'white',
        fontSize: 15,
      }
    });




     


