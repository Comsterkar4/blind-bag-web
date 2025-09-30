const ProductService = require('../Services/ProductService'); // viết hoa P

class ProductController {
  static async getProducts(req, res) {
    try {
      const products = await ProductService.listProducts(); // ✅ giờ đúng
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async addProduct(req, res) {
    try {
      const newProduct = await ProductService.createProduct(req.body);
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = ProductController;
