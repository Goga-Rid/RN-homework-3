import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="ProductList" options={{ title: 'Список товаров' }} />
      <Stack.Screen name="Cart" options={{ title: 'Корзина' }} />
    </Stack>
  );
}
