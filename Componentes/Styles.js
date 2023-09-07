import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0c3f6a',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0c3f6a',
  },
  input: {
    height: 40,
    width: '60%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#31a8ae',
  },
  addButton: {
    backgroundColor: '#31a8ae',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#f3f0cd',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 10,
    backgroundColor: '#f3f0cd',
    borderRadius: 10,
  },
  taskButton: {
    flex: 1,
  },
  taskName: {
    fontSize: 22,
    flex: 1,
  },
  completedTaskName: {
    textDecorationLine: 'line-through',
    fontWeight: 'bold',
    color: 'gray',
    borderRadius: 10,
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
  },
});

export default styles;
