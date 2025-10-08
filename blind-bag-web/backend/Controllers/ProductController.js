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
  static async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const updatedProduct = await ProductService.updateProduct(id, req.body);
      res.json(updatedProduct);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  } 
  
  // 
  static async deleteProduct(req, res) {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "ID sản phẩm không hợp lệ" });
      }

      const result = await ProductService.removeProduct(id);
      res.json(result); // { message: "Xóa sản phẩm thành công", id: id }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

module.exports = ProductController;
