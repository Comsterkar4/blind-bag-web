const db = require('../../database');
const getAllProducts = (callback) => {
    db.query("SELECT * FROM products ORDER BY id ASC", callback);
};

const addProduct = (product, callback) => {
    const { name, price, description, image } = product;
    db.query(
        "INSERT INTO products (name, price, description, image) VALUES (?, ?, ?, ?)",
        [name, price, description, image],
        callback
    );
};

module.exports = { getAllProducts, addProduct };
