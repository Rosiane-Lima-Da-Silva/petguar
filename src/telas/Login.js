
import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
//import { auth } from "./firebase.config";
import { app } from "./firebase.config";
import { signInWithEmailAndPassword, onAuthStateChanged, getAuth } from "firebase/auth";

const auth = getAuth(app);

export  function Login ({  navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

     // Verifica se o usuário já está autenticado
    useEffect(() => {
    const subscrever = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Se o usuário já estiver autenticado, redireciona para a tela "Itens"
        navigation.navigate("Itens");
      }
    });

    // Limpa o listener(onAuthStateChanged) quando o componente for desmontado
    return () =>subscrever();
    }, []);


    async function Logar () {
         signInWithEmailAndPassword(auth, email, password)
            .then((userCredencial) => {
                const user =userCredencial;
                alert('Login efetuado com sucesso!');
                console.log(user);
                navigation.navigate('Itens');
        })
        .catch((error) =>{
            alert('Senha ou E-mail incorretos.');
        });
    }
        

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Image style={styles.img} source={require('../imagens/logo.png')} />
                <View style={styles.caixalogi}>
                    <Text style={styles.nomelogi}>Login</Text>
                </View>       
                <TextInput 
                    placeholder='E-mail'
                    style={styles.input}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)} 
                />
                <TextInput
                    placeholder='Senha'
                    style={styles.input}
                    secureTextEntry
                    value={password}
                    onChangeText={(password) => setPassword(password)}                                
                />
                <TouchableOpacity style={styles.button} onPress={Logar}>
                    <Text style={styles.buttonText}>Logar</Text>
                </TouchableOpacity>
                <View>
                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('ResgateSenha')}>
                    <Text style={styles.text2}>
                        Esqueceu a senha?
                    </Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.text2}>
                       Não tem uma conta? Cadastre-se
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: '10%', // Ajuste para responsividade
        paddingVertical: 50,
        backgroundColor: '#f5f5f5',
    },
    img: {
        width: 140,
        height: 140,
        alignSelf: 'center',
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
        alignSelf: 'center',
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
    button2: {
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        width: '46%',
        alignSelf:'center',
        margin: '2%',
    },
 
    button3: {
        borderRadius: 10,
        padding: 1,
        alignItems: 'center',
        width: '50%',
        alignSelf: 'center',
        margin:'2%',
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
    },
    nomelogi: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
        marginTop: 'auto',
    },
    caixalogi: {
        width: '100%',
        height: 50,
        alignSelf: 'center',
    }, 
    text: {
        color: 'white',
        fontSize: 14,
       
    },
    text2: {
        color: 'black',
        textAlign: 'center',
        fontSize: 14,
    },
          
});



