const express = require('express');
const router = express.Router();
const productController = require('../Controllers/ProductController');

// GET danh sách sản phẩm
const validateProduct = require('../Validators/ProductValidator');
// thong qua validata trc ms guiwr ddeens controller
router.post('/', validateProduct, productController.addProduct);

router.get('/', productController.getProducts);

router .put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);



module.exports = router;
