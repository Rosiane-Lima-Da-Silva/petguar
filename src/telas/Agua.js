



import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Para o ícone do menu
import * as Progress from 'react-native-progress'; // Para o gráfico de progresso
import mqtt from 'mqtt'; // Biblioteca MQTT

// Obter as dimensões da tela
const { width } = Dimensions.get('window');

export function Agua({ navigation }) {
  const [progress, setProgress] = useState(0); // Estado para armazenar a porcentagem

  useEffect(() => {
    // Conectar ao broker MQTT
    const client = mqtt.connect('mqtt://broker.hivemq.com:1883'); // Exemplo de broker público

    // Assinar o tópico que envia os dados de porcentagem
    client.on('connect', () => {
      client.subscribe('alimentador/porcentagem', (err) => {
        if (!err) {
          console.log('Conectado ao broker MQTT e inscrito no tópico');
        }
      });
    });

    // Atualizar o estado de progresso com os valores recebidos de MQTT
    client.on('message', (topic, message) => {
      if (topic === 'alimentador/porcentagem') {
        const receivedValue = parseFloat(message.toString());
        if (!isNaN(receivedValue)) {
          setProgress(receivedValue / 100); // Atualizar o progresso com o valor entre 0 e 1
        }
      }
    });

    // Limpeza na desmontagem do componente
    return () => {
      client.end(); // Desconectar o cliente MQTT ao desmontar o componente
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* Menu Icon */}
      <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.navigate('Menu')}>
        <Ionicons name="menu" size={32} color="black" />
      </TouchableOpacity>

      {/* Imagem Centralizada */}
      <Image style={styles.image} source={require('../imagens/logo.png')} />

      {/* Título */}
      <Text style={styles.title}>Nivel da água</Text>

      {/* Gráfico de Progresso */}
      <Progress.Circle
        size={120}
        progress={progress} // Recebe o valor de progresso (entre 0 e 1)
        showsText={true}
        formatText={() => `${Math.round(progress * 100)}%`} // Mostra a porcentagem
        color="#3FA5A0"
        borderWidth={2}
        thickness={8}
        textStyle={{ fontWeight: 'bold', fontSize: 20 }}
      />

      {/* Botões */}
      <TouchableOpacity style={[styles.button, styles.responsiveButton]} onPress={() => navigation.navigate('HorarioAgua')}>
        <Text style={styles.buttonText}>Programar Horário</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.responsiveButton]} onPress={() => alert('Liberação Manual')}>
        <Text style={styles.buttonText}>Pôr água</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  menuIcon: {
    position: 'absolute',
    top: 20,
    left: 20, // Lado esquerdo da tela
    zIndex: 1,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20, // Adiciona espaço entre a imagem e o título
    alignSelf: 'center', // Alinhe a imagem ao centro da tela
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Espaço antes do gráfico de progresso
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#3FA5A0',
    padding: 15,
    borderRadius: 45,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  // Responsividade com base na largura da tela
  responsiveButton: {
    width: width > 600 ? '40%' : '80%',  // 40% de largura em telas maiores (PC), 80% em telas menores (smartphone)
  },
});
