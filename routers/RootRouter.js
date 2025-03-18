import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AuthContext from '../hooks/AuthContext';

// Import các màn hình cần thiết
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import FoodDetailScreen from '../screens/FoodDetail';
import EditProfileScreen from '../screens/EditProfile';

// Tạo AuthStackNavigator chứa SignIn, SignUp, ForgotPassword
const AuthStack = createStackNavigator();
const authStack = () => (
  <AuthStack.Navigator initialRouteName="SignIn">
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </AuthStack.Navigator>
);

// Tạo MainTabNavigator chứa HomeScreen và ProfileScreen
const MainTab = createBottomTabNavigator();
const mainTab = () => (
  <MainTab.Navigator>
    <MainTab.Screen name="Home" component={HomeScreen} />
    <MainTab.Screen name="Profile" component={ProfileScreen} />
  </MainTab.Navigator>
);

// Tạo MainStackNavigator chứa MainTabNavigator và các màn hình khác
const MainStack = createStackNavigator();
const mainStack = () => (
  <MainStack.Navigator initialRouteName="MainTab">
    <MainStack.Screen name="MainTab" component={mainTab} />
    <MainStack.Screen name="EditProfile" component={EditProfileScreen} />
    <MainStack.Screen name="FoodDetail" component={FoodDetailScreen} />
  </MainStack.Navigator>
);

// Kết nối các thành phần trên trong RootRouter
export default function RootRouter() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? mainStack() : authStack()}
    </NavigationContainer>
  );
}
