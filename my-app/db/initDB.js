import * as SQLite from 'expo-sqlite';

export const initDB = async () => {

    const db = await SQLite.openDatabaseAsync('cart.db');
    try { 
          await db.execAsync(`
            CREATE TABLE IF NOT EXISTS cart (
              id INTEGER PRIMARY KEY NOT NULL,
              title TEXT,
              price REAL,
              quantity INTEGER
            );
          `);
        console.log('Таблица создана');
      } catch (error) {
        console.error('Ошибка при инициализации базы данных:', error);
    }      
};

export const addToCart = async (product) => {
    const db = await SQLite.openDatabaseAsync('cart.db');
    try {
      await db.execAsync(`
        INSERT INTO cart (title, price, quantity) VALUES (?, ?, ?);
      `, [product.title, product.price, 1]);
      console.log('Товар добавлен в корзину');
    } catch (error) {
      console.error('Ошибка при добавлении товара в корзину:', error);
    }
  };
