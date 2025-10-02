import { Routes, Route, Link } from "react-router-dom";
import Product from "./Products/Product";
import User from "./User";
import PostProduct from "./Products/PostProduct";

function AdminManagement() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Admin Management</h1>
              <nav>
                <Link to="/admin">
                  <button>Trang chính</button>
                </Link>
                <Link to="/admin/user">
                  <button>Xem người dùng</button>
                </Link>
                <Link to="/admin/product">
                  <button>Xem sản phẩm</button>
                </Link>
              </nav>
              <h1>Hello World</h1>
            </div>
          }
        />
        <Route path="user" element={<User />} />
        <Route path="product" element={<Product/>} />
        <Route path ="product/post"element={<PostProduct />} />
        <Route path="*" element={<h1>404 - Route không tồn tại</h1>} />
      </Routes>
    </div>
  );
}

export default AdminManagement;