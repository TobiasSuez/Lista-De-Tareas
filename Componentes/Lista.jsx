import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';
import styles from './styles'; // Importa los estilos desde un archivo compartido

const TaskList = ({ tasks, markTaskAsCompleted, deleteTask }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem
          item={item}
          markTaskAsCompleted={markTaskAsCompleted}
          deleteTask={deleteTask}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TaskList;
