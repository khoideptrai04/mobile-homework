import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const categories = [
  { id: '1', name: 'Pizza', image: 'https://cdn-icons-png.flaticon.com/128/1046/1046784.png' },
  { id: '2', name: 'Burgers', image: 'https://cdn-icons-png.flaticon.com/128/3075/3075977.png' },
  { id: '3', name: 'Steak', image: 'https://cdn-icons-png.flaticon.com/128/135/135674.png' },
];

const popularDishes = [
  { id: '1', name: 'Pepperoni Pizza', image: 'https://source.unsplash.com/100x100/?pizza' },
  { id: '2', name: 'Cheese Burger', image: 'https://source.unsplash.com/100x100/?burger' },
  { id: '3', name: 'Grilled Steak', image: 'https://source.unsplash.com/100x100/?steak' },
];

export default function Home({ navigation }) {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      {/* Ô tìm kiếm */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search for meals or area"
        value={search}
        onChangeText={setSearch}
      />

      {/* Danh mục món ăn */}
      <Text style={styles.title}>Top Categories</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.category}>
            <Image source={{ uri: item.image }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Món ăn nổi bật */}
      <Text style={styles.title}>Popular Dishes</Text>
      <FlatList
        data={popularDishes}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.dishItem}>
            <Image source={{ uri: item.image }} style={styles.dishImage} />
            <Text style={styles.dishText}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  category: {
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  categoryImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  dishItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
    elevation: 2,
  },
  dishImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  dishText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
