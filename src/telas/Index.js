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
        source={require('../imagens/cachorro.webp')} 
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
    width: width * 1.2,
    height: height * 0.8,
    resizeMode: 'contain',
  },
});




       
     
