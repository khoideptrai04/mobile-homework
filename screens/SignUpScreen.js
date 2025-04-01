import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hàm kiểm tra email hợp lệ
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Xử lý đăng ký
  const handleSignUp = async () => {
    if (!name.trim()) {
      setError("Name is required!");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email format!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    setError(""); // Xóa lỗi nếu hợp lệ

    // Lưu thông tin tài khoản vào AsyncStorage
    await AsyncStorage.setItem("userToken", "dummy-token");
    await AsyncStorage.setItem("userEmail", email);

    // Điều hướng sang màn hình Home
    navigation.replace("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Enter your name here!" 
        value={name}
        onChangeText={setName}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Enter your email here!" 
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Enter your password here!" 
        secureTextEntry 
        value={password}
        onChangeText={setPassword}
      />

      {/* Hiển thị lỗi nếu có */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      {/* Social Login Buttons */}
      <View style={styles.socialButtons}>
        <TouchableOpacity style={[styles.socialButton, styles.google]}>
          <Icon name="google" size={20} color="white" />
          <Text style={styles.socialText}> Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.facebook]}>
          <Icon name="facebook" size={20} color="white" />
          <Text style={styles.socialText}> Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signInContainer}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.signInText}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { width: "100%", padding: 15, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, marginBottom: 10 },
  signUpButton: { width: "100%", padding: 15, backgroundColor: "orange", borderRadius: 8, alignItems: "center" },
  signUpText: { color: "white", fontWeight: "bold" },
  orText: { marginVertical: 20, color: "gray" },
  socialButtons: { flexDirection: "row", justifyContent: "space-between", width: "100%" },
  socialButton: { 
    flex: 1, flexDirection: "row", alignItems: "center", 
    justifyContent: "center", padding: 15, borderRadius: 8, 
    marginHorizontal: 5 
  },
  google: { backgroundColor: "#DB4437" },
  facebook: { backgroundColor: "#4267B2" },
  socialText: { color: "white", fontWeight: "bold", marginLeft: 10 },
  signInContainer: { flexDirection: "row", marginTop: 20 },
  signInText: { color: "blue", fontWeight: "bold" },
  errorText: { color: "red", marginBottom: 10, alignSelf: "flex-start" },
});
