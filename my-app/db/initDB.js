import * as SQLite from 'expo-sqlite';

const initDB = async () => {

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
export default initDB;
