import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  // Cargar las tareas almacenadas en AsyncStorage al inicio
  useEffect(() => {
    loadTasks();
  }, []);

  // Guardar las tareas en AsyncStorage cuando se actualice la lista de tareas
  useEffect(() => {
    saveTasks();
  }, [tasks]);

  const addTask = () => {
    if (taskName.trim() === '') {
      return;
    }
    const newTask = {
      id: Date.now().toString(),
      name: taskName,
      description: taskDescription,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskName('');
    setTaskDescription('');
    setModalVisible(false);
  };

  const markTaskAsCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks to AsyncStorage:', error);
    }
  };

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks !== null) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error('Error loading tasks from AsyncStorage:', error);
    }
  };

  const renderTask = ({ item }) => (
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
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTask(item.id)}
      >
        <Text style={styles.deleteButtonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
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
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addTask()}
          >
            <Text style={styles.addButtonText}>Agregar Tarea</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Agregar Tarea</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 10,
  },
  taskButton: {
    flex: 1,
  },
  taskName: {
    fontSize: 18,
  },
  completedTaskName: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  deleteButton: {
    marginLeft: 10,
  },
  deleteButtonText: {
    color: 'red',
  },
});

export default App;
