// screens/SignUp.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Button
        title="Back to Sign In"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
