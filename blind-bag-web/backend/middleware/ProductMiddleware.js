// Middleware xử lý lỗi validation cho product
const { validationResult } = require('express-validator');

const productValidationHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error(errors.array()[0].msg); // Lấy message đầu tiên
    error.status = 400; // Bad Request
    return next(error); // Ném sang errorHandler toàn cục
  }
  next(); // Nếu hợp lệ, đi tiếp controller
};

module.exports = productValidationHandler;
