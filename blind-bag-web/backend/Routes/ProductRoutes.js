const express = require('express');
const router = express.Router();
const productController = require('../Controllers/ProductController');

// GET danh sách sản phẩm
const validateProduct = require('../Validators/ProductValidator');

router.post('/', validateProduct, productController.addProduct);

router.get('/', productController.getProducts);

// POST thêm sản phẩm
router.post('/', productController.addProduct);  // <--- phải là '/' chứ không phải 'products'

module.exports = router;
