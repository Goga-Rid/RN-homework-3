import * as SQLite from 'expo-sqlite';

export const initDB = () => {
    try {
        const db = SQLite.openDatabaseSync('cart.db');

        db.execSync(`
            CREATE TABLE IF NOT EXISTS cart (
                id INTEGER PRIMARY KEY NOT NULL,
                image TEXT,
                title TEXT,
                price REAL,
                quantity INTEGER NOT NULL
            );
        `);

        console.log('Таблица cart создана', db);
    } catch (error) {
        console.error('Ошибка при создании таблицы cart:', error);
    }
};

export const dropDB = () => {
    const db = SQLite.openDatabaseSync('cart.db');

    db.execSync('DROP TABLE IF EXISTS cart;');
    db.closeSync();

    console.log('Таблица cart удалена');
};

export const addToCart = (product) => {
    try {
        const db = SQLite.openDatabaseSync('cart.db');

        db.runSync(`
            INSERT INTO cart (id, image, title, price, quantity) 
            VALUES (?, ?, ?, ?, ?) 
            ON CONFLICT(id) DO UPDATE SET quantity = quantity + 1;`, 
            [product.id, product.image, product.title, product.price, 1]
        );

        console.log('Товар добавлен в корзину', product);
    } catch (error) {
        console.error('Ошибка при добавлении товара в корзину:', error);
    }
};

export const getCartItems = () => {
    try {
        const db = SQLite.openDatabaseSync('cart.db');

        const cartItems = db.getAllSync('SELECT * FROM cart;', []);
        db.closeSync();

        return cartItems;
    } catch (error) {
        console.error('Ошибка при получении товаров из корзины:', error);
    }
};
