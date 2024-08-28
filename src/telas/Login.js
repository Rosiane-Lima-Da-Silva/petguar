import { View, Text, Button } from "react-native";




export function Login ({navigation}) {
    return(
        <View>
            <Text>Tela de Login</Text>
            <Button title='Cadastre-se aqui' onPress={()=>
                 navigation.navigate('Cadastro')}/>
            <Button title='Voltar' onPress={()=>
                 navigation.goBack()}/>
        </View>
    );
}
