const ProductRepository = require('../Repositories/ProductRepository');

class ProductService {
  static async listProducts() {
    return await ProductRepository.getAllProducts();
  }

  static async createProduct(productData) {
    return await ProductRepository.addProduct(productData); // <- gọi repo
  }

  static async removeProduct(id){
    return await ProductRepository.deleteProduct(id);
  }

   static async updateProduct(id, productData) {
    return await ProductRepository.updateProduct(id, productData);
  }
}

module.exports = ProductService;
