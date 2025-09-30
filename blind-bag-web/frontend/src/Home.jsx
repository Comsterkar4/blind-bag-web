import { Routes, Route, Link } from "react-router-dom";
import AdminManagement from "./Web/Admin/AdminManagement";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Trang chủ</h1>
              <Link to="/admin">
                <button>Đi đến Admin Management</button>
              </Link>
            </>
          }
        />
        <Route path="/admin/*" element={<AdminManagement />} />
        <Route path="*" element={<h1>404 - Trang không tìm thấy</h1>} />
      </Routes>
    </div>
  );
}

export default Home;