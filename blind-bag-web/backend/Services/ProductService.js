// backend/services/productService.js
const productRepo = require('../repositories/ProductRepository'); // chữ r thường

const listProducts = (callback) => {
    // Có thể thêm validate, filter, sort ở đây
    productRepo.getAllProducts(callback);
};

const createProduct = (product, callback) => {
    // Có thể thêm validate dữ liệu trước khi insert
    productRepo.addProduct(product, callback);
};

module.exports = { listProducts, createProduct };
