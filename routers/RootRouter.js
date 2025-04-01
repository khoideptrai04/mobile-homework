import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import các màn hình
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import FoodDetailScreen from '../screens/FoodDetail';
import EditProfileScreen from '../screens/EditProfile';

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

// Auth Stack (SignIn, SignUp, ForgotPassword)
const AuthStackScreen = () => (
  <AuthStack.Navigator initialRouteName="SignIn">
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </AuthStack.Navigator>
);

// Main Tab (Home, Profile)
const MainTabScreen = () => (
  <MainTab.Navigator>
    <MainTab.Screen name="Home" component={HomeScreen} />
    <MainTab.Screen name="Profile" component={ProfileScreen} />
  </MainTab.Navigator>
);

// Main Stack (MainTab, EditProfile, FoodDetail)
const MainStackScreen = () => (
  <MainStack.Navigator initialRouteName="MainTab">
    <MainStack.Screen name="MainTab" component={MainTabScreen} />
    <MainStack.Screen name="EditProfile" component={EditProfileScreen} />
    <MainStack.Screen name="FoodDetail" component={FoodDetailScreen} />
  </MainStack.Navigator>
);

// Root Router sử dụng prop `isLoggedIn`
export default function RootRouter({ isLoggedIn }) {
  return isLoggedIn ? <MainStackScreen /> : <AuthStackScreen />;
}
