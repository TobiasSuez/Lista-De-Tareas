import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'; // Importa los estilos desde un archivo compartido

const TaskItem = ({ item, markTaskAsCompleted, deleteTask }) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity
        style={styles.taskButton}
        onPress={() => markTaskAsCompleted(item.id)}
      >
        <Text
          style={[
            styles.taskName,
            item.completed && styles.completedTaskName,
          ]}
        >
          {item.name}
        </Text>
        <Text style={styles.taskDescription}>{item.description}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTask(item.id)}
      >
        <Text style={styles.deleteButtonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
