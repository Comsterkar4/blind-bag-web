const express = require('express');
const router = express.Router();
const productController = require('../Controllers/ProductController');

router.get('/', productController.getProducts);
router.post('/', productController.addProduct);

module.exports = router;
