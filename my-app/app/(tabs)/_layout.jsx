import React from 'react';
import { Text } from 'react-native';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: '#fffaf9',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fffaf9',
        tabBarStyle: {
        backgroundColor: '#25292e',
        },
       }}>
      <Tabs.Screen name="index" options={{ 
        headerShown: true,
        title: 'Список товаров',
        tabBarIcon: () => (
            <Text style={{ fontSize: 25 }}>🛒</Text> 
        ), 
        }} />
      <Tabs.Screen name="cart" options={{
         title: 'Корзина',
         tabBarIcon: () => (
            <Text style={{ fontSize: 25 }}>🗑️</Text>
         )  
         }} />
    </Tabs>
  );
}