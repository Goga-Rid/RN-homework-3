import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import { initDB, addToCart }  from '../../db/initDB';

export default function Index() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // initDB(); раскомментировать, если нужно инициализировать базу данных!!!!
    
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = async (product) => {
    await addToCart(product);
  };
  

  const renderItem = ({ item }) => (
    <ProductCard product={item} addToCart={handleAddToCart}/>
  );


  return (
    <View>
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 34,
    color: '#fffaf9',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 20,
    color: '#fffaf9',
    textAlign: 'center',
  },
});