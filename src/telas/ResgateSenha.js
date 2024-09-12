
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
//import { auth } from './firebase.config'; 
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
const auth = getAuth();

export function ResgateSenha ({ navigation }) {
    const [email, setEmail] = useState('');

    const Resgatar = async () => {
        try {
            //Quando usa o wait, ele pausa a execução da funçaõ assíncrona, 
            //até que a operação que está sendo aguardada seja concluída, retornando o
            //resultado. Só pode ser usado dentro de uma função marcada como 
            // async.
          await sendPasswordResetEmail(auth, email);
          alert("E-mail de redefinição de senha enviado!");
          navigation.navigate("Login"); 
        } catch (error) {
          alert("Erro ao enviar o e-mail. Verifique se o e-mail está correto.");
        }
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
            <TouchableOpacity style={styles.button} onPress={Resgatar}>
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
        flexDirection: 'column',
        
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
        marginBottom: 'auto',
        fontSize: 16,
        textAlign: "center",
    },
    button: {
        backgroundColor: '#3FA5A0',
        borderRadius: 20,
        padding: 'auto',
        alignItems: 'center',
        width: '100%',
        height: 50,
        alignSelf: 'center',
        marginBottom: 'auto',
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        margin: 'auto'
    },
    img: {
        width: 140,
        height: 140,
        alignSelf: 'center',
    },
});


