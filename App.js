import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider, useTheme } from 'react-native-paper';
import Input from './Componentes/input';
import Boton from './Componentes/boton';
import Lista from './Componentes/lista'
import Aplicacion from './Componentes/Aplicacion';
export default function App() {
  return (
    <Aplicacion/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

