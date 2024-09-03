import { useState } from "react";
import { View, Text, Button, Image, StyleSheet, ScrollView, TextInput } from "react-native";
import { Touchable, TouchableOpacity } from "react-native-web";




export function Login ({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    return(
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
                <View style={styles.button}>
                <Button title= 'Login' onPress={()=>
                 navigation.navigate('Itens')}/>
                 </View>
                <View>
                    <Text>Esqueci minha senha</Text>
                </View>
                <View>
                <Text>Não tem um conta?</Text>
                </View>
                <View>
                <TouchableOpacity style={styles.button} onPress={()=>
                 navigation.navigate('Cadastro')}>
                <Text style={styles.text}>
                    Cadastre-se
                </Text>
                 </TouchableOpacity>
                 </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 100,
      backgroundColor: '#f5f5f5',
    },
    img: {
        width: 140,
        height: 140,
        alignSelf: 'center',
    },
    input:{
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
    button: {
        borderWidth: 4,
        backgroundColor: 'green',
        borderRadius: 20,
    },
    nomelogi: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
        marginTop: 'auto',
    },
    caixalogi: {
        width: 100,
        height: 50,
        alignSelf: 'center',
    }, 
    text: {
        color: 'black',
        
    }    
})
