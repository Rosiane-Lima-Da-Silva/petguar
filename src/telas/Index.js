import { useEffect } from 'react';
import { Image, StyleSheet, View, Dimensions, Text } from 'react-native';


const { width, height } = Dimensions.get('window');

export function Index({ navigation }) {
  useEffect(() => {
    // Redireciona para a tela de Login após 3 segundos
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000); // 3000 ms = 3 segundos 

    // Limpa o timer 
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>BEM VINDO</Text>
      <Image
        source={require('../imagens/logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.4,
    height: height * 0.4,
    resizeMode: 'contain',
  },
  texto: {
    fontSize: 36, 
    fontWeight: 'bold', 
    color: '#3FA5A0', 
    textAlign: 'center', 
    marginBottom: 20, 
  }
});
