import * as React from 'react';
import { TextInput,Button } from 'react-native-paper';

const Input = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="Tarea por hacer"
      value={text}
      onChangeText={text => setText(text)}
    />
    
    
  );
};

export default Input;