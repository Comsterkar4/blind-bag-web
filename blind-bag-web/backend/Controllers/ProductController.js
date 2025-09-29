// backend/controllers/productController.js
const productService = require('../Services/ProductService');

const getProducts = (req, res) => {
    productService.listProducts((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

const addProduct = (req, res) => {
    const product = req.body;
    productService.createProduct(product, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, ...product });
    });
};

module.exports = { getProducts, addProduct };
