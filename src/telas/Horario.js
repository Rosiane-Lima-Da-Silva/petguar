import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Switch, TextInput, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Para o ícone de menu

const { width } = Dimensions.get('window');

export function Horario({ navigation }) {
  const [isAlarm1Enabled, setIsAlarm1Enabled] = useState(false);
  const [isAlarm2Enabled, setIsAlarm2Enabled] = useState(false);
  const [isAlarm3Enabled, setIsAlarm3Enabled] = useState(false);

  const [alarm1Time, setAlarm1Time] = useState('');
  const [alarm2Time, setAlarm2Time] = useState('');
  const [alarm3Time, setAlarm3Time] = useState('');

  // Função para formatar o valor da entrada de tempo no formato HH:MM
  const handleTimeInput = (value, setAlarmTime) => {
    // Remove caracteres não numéricos
    const cleaned = value.replace(/[^0-9]/g, '');

    // Limitar a 4 dígitos
    if (cleaned.length <= 4) {
      // Adicionar ":" após o segundo dígito
      const formatted = cleaned.replace(/(\d{2})(\d{0,2})/, '$1:$2');
      setAlarmTime(formatted);
    }
  };

  return (
    <View style={styles.container}>
      {/* Icon do menu */}
      <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={32} color="black" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Programar Horário</Text>

      {/* Primeira opção de alarme */}
      <View style={styles.alarmContainer}>
        <Text style={styles.alarmTitle}>Refeição  1</Text>
        <Switch
          value={isAlarm1Enabled}
          onValueChange={value => setIsAlarm1Enabled(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="HH:MM"
          keyboardType="numeric"
          value={alarm1Time}
          onChangeText={(value) => handleTimeInput(value, setAlarm1Time)}
          editable={isAlarm1Enabled}
          maxLength={5} // Limitar a entrada a 5 caracteres (incluindo ":")
        />
      </View>

      {/* Segunda opção de alarme */}
      <View style={styles.alarmContainer}>
        <Text style={styles.alarmTitle}>Refeição 2</Text>
        <Switch
          value={isAlarm2Enabled}
          onValueChange={value => setIsAlarm2Enabled(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="HH:MM"
          keyboardType="numeric"
          value={alarm2Time}
          onChangeText={(value) => handleTimeInput(value, setAlarm2Time)}
          editable={isAlarm2Enabled}
          maxLength={5} 
        />
      </View>

      {/* Terceira opção de alarme */}
      <View style={styles.alarmContainer}>
        <Text style={styles.alarmTitle}>Refeição 3</Text>
        <Switch
          value={isAlarm3Enabled}
          onValueChange={value => setIsAlarm3Enabled(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="HH:MM"
          keyboardType="numeric"
          value={alarm3Time}
          onChangeText={(value) => handleTimeInput(value, setAlarm3Time)}
          editable={isAlarm3Enabled}
          maxLength={5} 
        />
      </View>
      

      {/* Botão Pronto */}
      <TouchableOpacity style={styles.readyButton} onPress={() => alert('Despertadores configurados!')}>
        <Text style={styles.readyButtonText}>Pronto</Text>
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
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
  },
  alarmContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width > 600 ? '50%' : '80%',
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
  },
  alarmTitle: {
    fontSize: 18,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: 80,
    height: 40,
    textAlign: 'center',
    marginLeft: 10,
  },
  readyButton: {
    backgroundColor: '#3FA5A0',
    padding: 15,
    borderRadius: 45,
    alignItems: 'center',
    marginTop: 40,
    width: width > 600 ? '50%' : '80%',
  },
  readyButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
