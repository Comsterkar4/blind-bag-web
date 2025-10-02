const ProductRepository = require('../Repositories/ProductRepository');

class ProductService {
  static async listProducts() {
    return await ProductRepository.getAllProducts();
  }

  static async createProduct(productData) {
    return await ProductRepository.addProduct(productData); // <- gọi repo
  }
}

module.exports = ProductService;
