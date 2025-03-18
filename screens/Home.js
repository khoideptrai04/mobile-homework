import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';

const categories = ['Pizza', 'Burgers', 'Steak'];

export default function Home() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search for meals or area" />
      <Text style={styles.title}>Top Categories</Text>
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item }) => <Text style={styles.category}>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  category: {
    marginRight: 15,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
});
