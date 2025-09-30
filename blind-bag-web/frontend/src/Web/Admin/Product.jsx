import { useState, useEffect } from "react";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products") // gọi API backend
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("❌ Lỗi tải sản phẩm:", err));
  }, []);

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p>💰 {p.price} VND</p>
            {p.image && <img src={`/images/${p.image}`} alt={p.name} width="100" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
