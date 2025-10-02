const ProductService = require('../Services/ProductService');

class ProductController {
  // Lấy danh sách sản phẩm
  static async getProducts(req, res) {
    try {
      const products = await ProductService.listProducts();
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Thêm sản phẩm
  static async addProduct(req, res) {
    try {
      console.log("POST body:", req.body); // debug xem dữ liệu nhận đúng chưa

      const newProduct = await ProductService.createProduct(req.body); // gọi xuống service -> repo -> DB
      res.status(201).json(newProduct); // trả về sản phẩm vừa thêm
    } catch (err) {
      console.error("❌ Lỗi khi thêm sản phẩm:", err);
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = ProductController;
