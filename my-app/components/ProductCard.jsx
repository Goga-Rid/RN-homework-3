import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const ProductCard = ({ product, addToCart }) => {
    return (
        <View>
            <Image source={{ uri: product.image }} style={{ width: 100, height: 100 }} />
            <Text>{product.title}</Text>
            <Text>{product.price} USD</Text>
            <Text>{product.description}</Text>
            <Button title="Добавить в корзину" onPress={() => addToCart(product)} />
        </View>
    );
};

export default ProductCard;
