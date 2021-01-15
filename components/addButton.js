import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function addButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AntDesign name="plus" size={24} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'rgb(80,80,225)',
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
