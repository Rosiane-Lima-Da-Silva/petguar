import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Se estiver usando Expo para ícones

export function Itens({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuIcon}>
          <Ionicons name="menu" size={32} color="black" />
        </TouchableOpacity>
        <Image style={styles.img} source={require('../imagens/logo.png')} />
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Comida')}>
          <Text style={styles.menuText}>Comida</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Agua')}>
          <Text style={styles.menuText}>Agua</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Monitoramento')}>
          <Text style={styles.menuText}>Monitoramento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Porta')}>
          <Text style={styles.menuText}>Porta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  img: {
    width: 140,
    height: 140,
  },
  menu: {
    alignItems: 'center',
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: '#cccccc',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    marginVertical: 5,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 18,
    color: 'black',
  },
  form: {
    width: '100%',
    alignItems: 'center',
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
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
