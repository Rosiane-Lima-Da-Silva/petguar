
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import { auth } from './firebase.config'; 
import { sendPasswordResetEmail } from 'firebase/auth';

export function ResgateSenha ({ navigation }) {
    const [email, setEmail] = useState('');

    // Função para enviar o email de redefinição de senha
    const handlePasswordReset = () => {
        if (email === '') {
            Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
            return;
        }

        // Função do Firebase para enviar o e-mail de recuperação de senha
        sendPasswordResetEmail(auth, email)
            .then(() => {
                Alert.alert('E-mail de redefinição enviado!', 'Verifique sua caixa de entrada.');
                navigation.navigate('Login'); 
            })
            .catch((error) => {
                console.error(error);
                Alert.alert('Erro', 'Não foi possível enviar o e-mail de redefinição.');
            });
    };

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../imagens/logo.png')} />
            <Text style={styles.title}>Redefinir Senha</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
                <Text style={styles.buttonText}>Enviar E-mail de Redefinição</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: '10%', 
        paddingVertical: 50,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
        marginTop: 'auto'
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 20,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#3FA5A0',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        width: '30%',
        alignSelf: 'center',
        margin: '4%'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    img: {
        width: 140,
        height: 140,
        alignSelf: 'center',
    },
});


