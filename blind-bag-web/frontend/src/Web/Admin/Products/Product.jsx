import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css"; // CSS riêng

function Product() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = () => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("❌ Lỗi tải sản phẩm:", err));
  };

  // Sửa sản phẩm
  const handleEdit = (id) => {
    navigate(`/admin/product/edit/${id}`);
  };

  // Xóa sản phẩm
  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa sản phẩm này?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE"
      });
      const data = await res.json();
      alert(data.message);
      fetchProducts(); // reload danh sách
    } catch (err) {
      console.error(err);
      alert("❌ Xóa thất bại");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-container">
      <h2>Danh sách sản phẩm</h2>
      <button className="add-btn" onClick={() => navigate("/admin/product/post")}>
        ➕ Thêm sản phẩm
      </button>

      <ul className="product-list">
        {products.map(p => (
          <li key={p.id} className="product-item">
            <div className="product-info">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <p>💰 {p.price} VND</p>
            </div>
            {p.image && (
              <img src={`/images/${p.image}`} alt={p.name} width="100" className="product-img" />
            )}
            <button className="sua-btn" onClick={() => handleEdit(p.id)}>Sửa</button>
            <button className="delete-btn" onClick={() => handleDelete(p.id)}>🗑️ Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
