import React from 'react';
import { View, Text, Image } from 'react-native';

const CartItem = ({ item }) => {
    return (
        <View>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
            <Text>{item.title}</Text>
            <Text>Количество: {item.quantity}</Text>
            <Text>Цена: {item.price * item.quantity} USD</Text>
        </View>
    );
};

export default CartItem;
