import * as React from 'react';
import { List } from 'react-native-paper';

const Lista = () => (
  <List.Item
    title="First Item"
    description="Item description"
    left={props => <List.Icon {...props} icon="alert-outline" />}
  />
);

export default Lista;