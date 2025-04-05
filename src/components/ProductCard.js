import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {product.image ? (
        <Image source={product.image} style={styles.image} resizeMode="contain" />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}
      <Text style={styles.productName}>{product.name}</Text>
      
      {/* Giá + nút thêm */}
      <View style={styles.priceRow}>
        <Text style={styles.productPrice}>${product.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>＋</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    margin: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  imagePlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  placeholderText: {
    color: '#666',
    fontSize: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    width: 30,
    height: 30,
    backgroundColor: '#4CAF50',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 20,
  },
});

export default ProductCard;
