function validateProduct(req, res, next) {
  const { name, description, price } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({ message: "Tên sản phẩm không được để trống" });
  }
  if (!description || description.trim() === "") {
    return res.status(400).json({ message: "Mô tả sản phẩm không được để trống" });
  }
  if (price === undefined || price === null || isNaN(price)) {
    return res.status(400).json({ message: "Giá sản phẩm không hợp lệ" });
  }

  next();
  
}

module.exports = validateProduct;
