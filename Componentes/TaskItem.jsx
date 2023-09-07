import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Item = ({ item, markTaskAsCompleted, deleteTask }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => markTaskAsCompleted(item.id)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
      <Text>{item.description}</Text>
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
