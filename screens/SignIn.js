import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTextInput from '../components/CustomTextInput';
import IconButton from '../components/IconButton';

export default function SignIn({ navigation }) {
  const handleSignIn = async () => {
    // Giả sử đăng nhập thành công -> Lưu token vào AsyncStorage
    await AsyncStorage.setItem('userToken', 'dummy-token');
    navigation.navigate('Home'); // Điều hướng đến Home
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <CustomTextInput placeholder="Enter your email!" />
      <CustomTextInput placeholder="Enter your password!" secureTextEntry={true} />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Forgot password?</Text>
      </TouchableOpacity>

      <IconButton title="Sign In" bgColor="#FFA500" onPress={handleSignIn} />

      <Text style={styles.orText}>Or sign in with</Text>
      <IconButton title="Google" bgColor="#DB4437" onPress={() => alert('Google pressed')} />
      <IconButton title="Facebook" bgColor="#4267B2" onPress={() => alert('Facebook pressed')} />

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Not yet a member? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    marginTop: 10,
    textAlign: 'right',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
  },
});
