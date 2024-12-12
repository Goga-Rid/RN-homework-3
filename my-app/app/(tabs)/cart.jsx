import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { getCartItems } from '../../db/database';
import CartItem from '../../components/CartItem';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        setRefreshing(true);
        try {
            const cartItemsFromDB = getCartItems(); 
            setCartItems(cartItemsFromDB); 
        } catch (error) {
            console.error('Ошибка при получении товаров из корзины:', error);
        } finally {
            setRefreshing(false); 
        }
    };


    const renderItem = ({ item }) => {
        return (
            <CartItem item={item} />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                refreshing={refreshing}
                onRefresh={fetchCartItems}
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
