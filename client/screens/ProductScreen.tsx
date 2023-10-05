import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const ProductScreen = ({ route }: any) => {
  const { product } = route.params;

  const handleOpenURL = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    } catch (error) {
      console.error('Error opening the URL:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.userName}>Seller: {product.user.name}</Text>
      <TouchableOpacity onPress={() => handleOpenURL(product.url)}>
        <Text style={styles.productLink}>View Product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    marginBottom: 10,
  },
  productLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default ProductScreen;
