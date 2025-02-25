import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState({ text: '', color: '' });

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(0[1-9][0-9]{8})$/; // Chấp nhận số điện thoại Việt Nam hợp lệ
    return phoneRegex.test(phone);
  };

  const handleInputChange = (text) => {
    setPhoneNumber(text);
    if (text.length === 10) {
      if (validatePhoneNumber(text)) {
        setMessage({ text: 'Số điện thoại hợp lệ', color: 'green' });
      } else {
        setMessage({ text: 'Số điện thoại không đúng định dạng. Vui lòng nhập lại.', color: 'red' });
      }
    } else {
      setMessage({ text: '', color: '' });
    }
  };

  const handleContinue = () => {
    if (validatePhoneNumber(phoneNumber)) {
      navigation.replace('Home');
    } else {
      setMessage({ text: 'Số điện thoại không đúng định dạng. Vui lòng nhập lại.', color: 'red' });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.subtitle}>Nhập số điện thoại</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Nhập số điện thoại"
        value={phoneNumber}
        onChangeText={handleInputChange}
        maxLength={10}
      />
      {message.text ? <Text style={[styles.message, { color: message.color }]}>{message.text}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào mừng bạn đến với HomeScreen!</Text>
<TouchableOpacity style={styles.button} onPress={() => navigation.replace('Login')}>
  <Text style={styles.buttonText}>Quay lại Đăng nhập</Text>
</TouchableOpacity>

    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
