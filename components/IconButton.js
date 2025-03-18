import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function IconButton({ title, onPress, bgColor }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: bgColor }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
