import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

const Input = ({ taskName, taskDescription, setTaskName, setTaskDescription, addTask }) => {
  return (
    <View>
      <TextInput
        placeholder="Nombre de la tarea"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />
      <TextInput
        placeholder="Descripción de la tarea"
        value={taskDescription}
        onChangeText={(text) => setTaskDescription(text)}
      />
      <TouchableOpacity onPress={addTask}>
        <Text>Agregar Tarea</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
