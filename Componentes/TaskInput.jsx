import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Input = ({ taskName, taskDescription, setTaskName, setTaskDescription, addTask }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre de la tarea"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción de la tarea"
        value={taskDescription}
        onChangeText={(text) => setTaskDescription(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Agregar Tarea</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#31a8ae',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#f3f0cd',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Input;
