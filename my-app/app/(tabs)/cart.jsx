import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { getCartItems } from '../../db/database';
import CartItem from '../../components/CartItem';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = () => {
        const cartItemsFromDB = getCartItems();
        setCartItems(cartItemsFromDB);
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
