import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('green'); // Màu nền mặc định

  // Hàm thay đổi màu nền
  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'green' }]}
        onPress={() => changeBackgroundColor('green')}
      >
        <Text style={styles.buttonText}>GREEN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'blue' }]}
        onPress={() => changeBackgroundColor('blue')}
      >
        <Text style={styles.buttonText}>BLUE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#8B4513' }]} // Màu nâu
        onPress={() => changeBackgroundColor('#8B4513')}
      >
        <Text style={styles.buttonText}>BROWN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'yellow' }]}
        onPress={() => changeBackgroundColor('yellow')}
      >
        <Text style={[styles.buttonText, { color: 'black' }]}>YELLOW</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={() => changeBackgroundColor('red')}
      >
        <Text style={styles.buttonText}>RED</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'black' }]}
        onPress={() => changeBackgroundColor('black')}
      >
        <Text style={[styles.buttonText, { color: 'white' }]}>BLACK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    padding: 15,
    marginVertical: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
