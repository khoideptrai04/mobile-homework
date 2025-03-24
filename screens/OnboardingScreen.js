import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Hình ảnh nền full màn hình */}
        <Image
          source={require('../assets/onboarding-image.png')} // Đường dẫn đến hình minh họa
          style={styles.image}
        />
        {/* Nội dung chồng lên hình ảnh */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Welcome to our store</Text>
          <Text style={styles.subtitle}>
            Get your groceries in as fast as one hour
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    position: 'relative', // Để các thành phần con có thể sử dụng position: absolute
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute', // Đặt hình ảnh làm nền
    resizeMode: 'cover', // Phủ kín màn hình, có thể cắt bớt nếu không khớp tỷ lệ
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Đẩy nội dung xuống dưới
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40, // Khoảng cách từ dưới lên
  },
  title: {
    fontSize: 36, // Tăng kích thước chữ để giống hình
    fontWeight: 'bold',
    color: '#fff', // Đổi màu chữ thành trắng để nổi trên hình ảnh
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff', // Đổi màu chữ thành trắng
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '80%', // Đặt chiều rộng nút để giống hình
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;