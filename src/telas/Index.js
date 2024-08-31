import  { useEffect } from 'react';
import { Image, StyleSheet, View, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

export function Index ({ navigation }) {
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
      <Image
        source={require('../imagens/Telas1.png')} 
        style={styles.logo1}
      />
      <Image
        source={require('../imagens/logo.png')} 
        style={styles.logo2}
      />
      <Image
        source={require('../imagens/Telas3.png')} 
        style={styles.logo3}
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
  logo1: {
    width: width * 0.3,
    height: height * 0.3,
    resizeMode: 'contain',
  },
  logo2: {
    width: width * 0.4,
    height: height * 0.4,
    resizeMode: 'contain',
  },
  logo3: {
    width: width * 0.3,
    height: height * 0.3,
    resizeMode: 'contain',
  },
});




       
     
