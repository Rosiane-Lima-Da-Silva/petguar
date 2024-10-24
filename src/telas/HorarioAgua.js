import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Switch, TextInput, Dimensions, Alert, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

export function HorarioAgua({ navigation }) {
  const [alarms, setAlarms] = useState([]);
  const [newAlarmTime, setNewAlarmTime] = useState('');

  // Carregar alarmes da água
  useEffect(() => {
    const loadAlarms = async () => {
      try {
        const savedAlarms = await AsyncStorage.getItem('waterAlarms');
        if (savedAlarms) {
          setAlarms(JSON.parse(savedAlarms));
        }
      } catch (error) {
        console.log('Erro ao carregar os alarmes de água:', error);
      }
    };

    loadAlarms();
  }, []);

  // Função para salvar os alarmes no AsyncStorage
  const saveAlarms = async (updatedAlarms) => {
    try {
      await AsyncStorage.setItem('waterAlarms', JSON.stringify(updatedAlarms));
      setAlarms(updatedAlarms);
    } catch (error) {
      console.log('Erro ao salvar os alarmes de água:', error);
    }
  };

  // Função para validar o formato de hora (HH:MM)
  const validarHora = (hora) => {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return regex.test(hora);
  };

  // Adicionar um novo alarme de água
  const addAlarm = () => {
    if (validarHora(newAlarmTime)) {
      const newAlarm = { time: newAlarmTime, enabled: false };
      const updatedAlarms = [...alarms, newAlarm];
      saveAlarms(updatedAlarms);
      setNewAlarmTime('');
      Alert.alert('Alarme Adicionado', 'O novo alarme foi adicionado com sucesso!');
    } else {
      Alert.alert('Erro', 'Por favor, insira um horário válido no formato HH:MM.');
    }
  };

  // Atualizar estado de alarme (ligado/desligado)
  const toggleAlarm = (index) => {
    const updatedAlarms = alarms.map((alarm, i) =>
      i === index ? { ...alarm, enabled: !alarm.enabled } : alarm
    );
    saveAlarms(updatedAlarms);
  };

  // Deletar um alarme
  const deleteAlarm = (index) => {
    const updatedAlarms = alarms.filter((_, i) => i !== index);
    saveAlarms(updatedAlarms);
  };

  // Formatar entrada de tempo
  const handleTimeInput = (value) => {
    const cleaned = value.replace(/[^0-9]/g, '');

    if (cleaned.length <= 4) {
      const formatted = cleaned.replace(/(\d{2})(\d{0,2})/, '$1:$2');
      setNewAlarmTime(formatted);
    }
  };

  return (
    <View style={styles.container}>
      {/* Menu */}
      <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.navigate('Menu')}>
        <Ionicons name="menu" size={32} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Programar Horário da Água</Text>

      {/* Adicionar novo alarme */}
      <View style={styles.newAlarmContainer}>
        <TextInput
          style={styles.input}
          placeholder="HH:MM"
          keyboardType="numeric"
          value={newAlarmTime}
          onChangeText={handleTimeInput}
          maxLength={5}
        />
        <TouchableOpacity style={styles.addButton} onPress={addAlarm}>
          <Text style={styles.addButtonText}>Adicionar hidratação</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de alarmes */}
      <FlatList
        data={alarms}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.alarmContainer}>
            <Text style={styles.alarmTime}>{item.time}</Text>
            <Switch value={item.enabled} onValueChange={() => toggleAlarm(index)} />
            <TouchableOpacity onPress={() => deleteAlarm(index)}>
              <Ionicons name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text>Nenhum alarme adicionado.</Text>}
      />

      <TouchableOpacity style={styles.readyButton} onPress={() => alert('Horários de água configurados!')}>
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
  newAlarmContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width > 600 ? '50%' : '80%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: 100,
    height: 40,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#3FA5A0',
    padding: 10,
    borderRadius: 45,
    marginLeft: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
  alarmTime: {
    fontSize: 18,
    color: '#333',
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
