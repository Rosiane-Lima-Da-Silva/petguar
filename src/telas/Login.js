import { useState } from "react";
import { View, Text, Button, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput, Dimensions } from "react-native";

export function Login ({ route, navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const { registrarEmail, registrarPassword } = route.params || {};

    const Logar = () => {
        if (email !== registrarEmail || password !== registrarPassword) {
            Alert.alert('Erro', 'Nome de usuário ou senha incorretos!');
        } else {
            Alert.alert('Sucesso', 'Login realizado com sucesso!');
            navigation.navigate('Itens')
        }
    };

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
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View>
                    <Text>Esqueci minha senha</Text>
                </View>
                <View>
                    <Text>Não tem uma conta? Cadastre-se</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.text}>
                        Cadastre-se
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
        borderRadius: 10,
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
        backgroundColor: 'green',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
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
        color: 'black',
        textAlign: 'center',
    }
});
// Detectar a largura da tela e ajustar dinamicamente
const { width } = Dimensions.get('window');

if (width > 600) {
    styles.container.paddingHorizontal = '20%';
} else {
    styles.container.paddingHorizontal = '5%';
}
