import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState({ text: '', color: '' });

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Kiểm tra số có đúng 10 chữ số không
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
      Alert.alert('Thành công', 'Số điện thoại hợp lệ!');
    } else {
      setMessage({ text: 'Số điện thoại không đúng định dạng. Vui lòng nhập lại.', color: 'red' });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.subtitle}>Nhập số điện thoại</Text>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản OneHousing Pro
      </Text>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
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
  description: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 5,
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;