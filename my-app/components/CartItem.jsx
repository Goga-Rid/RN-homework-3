import React from 'react';
import { View, Text } from 'react-native';

const CartItem = ({ item }) => {
    return (
        <View>
            <Text>{item.title}</Text>
            <Text>Количество: {item.quantity}</Text>
            <Text>Цена: {item.price * item.quantity} RUB</Text>
        </View>
    );
};

export default CartItem;
