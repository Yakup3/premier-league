import React from 'react';
import { StyleSheet } from 'react-native';
import TableScreen from './app/screens/TableScreen';

export default function App() {

  return (
    <TableScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});