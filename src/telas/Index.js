import {Text, View, Button} from 'react-native';



export default ({navigation})=> {
    return(
        <View>
            <Text>Petguar</Text>
            <Button title='Cadastre-se aqui' onPress={ () => navigation.navigate('Cadastro')}/>
           
        </View>
    );
   
}


