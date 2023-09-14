import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Item = ({ item, markTaskAsCompleted, deleteTask }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => markTaskAsCompleted(item.id)}>
        <Text style={item.completed ? styles.completedTaskName : styles.taskName}>
          {item.name}
        </Text>
      </TouchableOpacity>
      <Text style={styles.taskDescription}>{item.description}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(item.id)}>
        <Text style={styles.deleteButtonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    backgroundColor: '#f3f0cd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  taskName: {
    fontSize: 22,
    flex: 1,
  },
  completedTaskName: {
    textDecorationLine: 'line-through',
    fontWeight: 'bold',
    color: 'gray',
  },
  deleteButton: {
    marginLeft: 10,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  taskDescription: {
    fontSize: 18,
    color: 'gray',
    marginTop: 5,
  },
});

export default Item;
