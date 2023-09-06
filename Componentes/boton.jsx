import * as React from 'react';
import { Button } from 'react-native-paper';

const Boton = () => (
  <Button mode="outlined"  icon={"send"} flexDirection= 'row-reverse' onPress={() => console.log('Pressed')}>
    Agregar
  </Button>
);

export default Boton;