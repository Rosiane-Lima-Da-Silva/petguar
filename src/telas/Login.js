import { useState } from "react";
import { View, Text, Button,Image, StyleSheet, ScrollView, TextInput } from "react-native";




export function Login ({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    return(
        <ScrollView contentContainerStyle={styles.container}>
        <View>
            <Text>Tela de Login</Text>
            <Image style={styles.img} source={require('../imagens/logo.png')} />
            
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
                <Button title='Cadastre-se aqui' onPress={()=>
                 navigation.navigate('Cadastro')}/>
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
    img: {
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
})
