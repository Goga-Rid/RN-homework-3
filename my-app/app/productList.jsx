import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Список товаров</Text>
      <Text style={styles.paragraph}>
        Здеся будут карточки товаров!!!
      </Text>
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