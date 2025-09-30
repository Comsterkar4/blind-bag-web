// backend/repositories/ProductRepository.js
const db = require('../../database');

class ProductRepository {

  // Lấy tất cả sản phẩm
  static getAllProducts() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM products ORDER BY id ASC", (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }

  // Thêm sản phẩm mới
  static addProduct(product) {
    return new Promise((resolve, reject) => {
      const { name, description, price, image } = product;
      const query = "INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)";
      db.query(query, [name, description, price, image], (err, result) => {
        if (err) reject(err);
        else resolve({ id: result.insertId, ...product });
      });
    });
  }
}

// Export class luôn, hoặc export methods nếu muốn
module.exports = ProductRepository;
