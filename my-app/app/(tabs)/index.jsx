import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ProductCard from '../../components/ProductCard';
import { initDB, addToCart, dropDB } from '../../db/database';

export default function Index() {
    const [products, setProducts] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        initDB();
        // dropDB(); // Для сброса базы данных (раскомментируйте, если необходимо)
        
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setRefreshing(true); 
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data); 
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        } finally {
            setRefreshing(false); 
        }
    };

    const handleAddToCart = async (product) => {
        await addToCart(product);
        fetchProducts();
    };

    const renderItem = ({ item }) => (
        <ProductCard product={item} addToCart={handleAddToCart} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                refreshing={refreshing}
                onRefresh={fetchProducts}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffaf9',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 34,
        color: '#f3faf9',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 20,
        color: '#fffaf9',
        textAlign: 'center',
    },
});
