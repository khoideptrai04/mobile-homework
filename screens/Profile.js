import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://placekitten.com/200/200' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Hung Nguyen</Text>
      <Text style={styles.position}>Mobile Developer</Text>
      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  position: {
    marginVertical: 5,
    color: '#666',
  },
  signOutButton: {
    marginTop: 20,
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 5,
  },
  signOutText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
