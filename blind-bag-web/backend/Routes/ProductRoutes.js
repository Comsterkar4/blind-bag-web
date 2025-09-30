const express = require('express');
const router = express.Router();
const productController = require('../Controllers/ProductController');
//lấy all dnah sách 
router.get('/', productController.getProducts);
// post là để thêm 
router.post('products', productController.addProduct);

module.exports = router;
