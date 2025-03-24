import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Lấy kích thước màn hình để tối ưu hiển thị
const { width, height } = Dimensions.get('window');

const SignInScreen = () => {
  const navigation = useNavigation();

  const handleGoogleLogin = () => {
    // Giả lập đăng nhập bằng Google
    alert('Continue with Google');
  };

  return (
    <View style={styles.container}>
      {/* Làm trong suốt thanh trạng thái */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content" // Chữ trên thanh trạng thái màu đen để nổi trên hình ảnh
      />
      {/* Hình ảnh từ đầu màn hình đến giữa màn hình */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/grocery-bag.png')} // Đường dẫn đến hình túi hàng
          style={styles.image}
        />
      </View>
      {/* Nội dung từ giữa màn hình trở xuống */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Get your groceries with nectar</Text>
        {/* Phần số điện thoại */}
        <TouchableOpacity
          style={styles.countryContainer}
          onPress={() => navigation.navigate('Number')}
        >
          <Image
            source={{ uri: 'https://flagcdn.com/w40/vn.png' }} // Cờ Việt Nam
            style={styles.flag}
          />
          <Text style={styles.countryCode}>+84</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>Or connect with social media</Text>
        {/* Nút Continue with Google */}
        <TouchableOpacity
          style={[styles.button, styles.googleButton]}
          onPress={handleGoogleLogin}
        >
          <Image
            source={{ uri: 'https://developers.google.com/identity/images/g-logo.png' }} // Logo Google
            style={[styles.icon, styles.googleIcon]}
          />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
        {/* Nút Continue with Facebook */}
        <TouchableOpacity
          style={[styles.button, styles.facebookButton]}
          onPress={() => navigation.navigate('Number')}
        >
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' }} // Logo Facebook trắng
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: width,
    height: height / 2, // Hình ảnh chiếm nửa trên màn hình
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Phủ kín khu vực nửa trên màn hình
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'flex-start', // Đẩy nội dung lên trên cùng của nửa dưới
    paddingTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginVertical: 20,
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
    width: '100%',
    justifyContent: 'flex-start',
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 18,
    color: '#000',
  },
  orText: {
    fontSize: 16,
    color: '#888',
    marginVertical: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
  },
  googleButton: {
    backgroundColor: '#4285F4',
  },
  facebookButton: {
    backgroundColor: '#3B5998',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleIcon: {
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'normal',
  },
});

export default SignInScreen;