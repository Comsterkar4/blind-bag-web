const ProductRepository = require('../repositories/ProductRepository');

class ProductService {
    // Lấy danh sách sản phẩm
    static async listProducts() {
        return await ProductRepository.getAllProducts();
    }

    // Tạo sản phẩm mới
    static async createProduct(data) {
        // TODO: validate dữ liệu tại đây (ví dụ: check price > 0, name không rỗng)
        return await ProductRepository.addProduct(data);
    }
}

module.exports = ProductService;
