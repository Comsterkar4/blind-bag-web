import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  // Load dữ liệu sản phẩm theo id
  useEffect(() => {
    fetch(`http://localhost:5000/api/products`)
      .then(res => res.json())
      .then(data => {
        const p = data.find(item => item.id === parseInt(id));
        if (p) {
          setName(p.name);
          setDescription(p.description);
          setPrice(p.price);
          setImage(p.image);
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = { name, description, price: parseFloat(price), image };

    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct)
      });

      const data = await res.json();
      if (!res.ok) {
        alert(`❌ Lỗi: ${data.message || "Không thể cập nhật sản phẩm"}`);
        return;
      }

      alert("✅ Cập nhật sản phẩm thành công!");
      navigate("/admin/product"); // quay về trang danh sách
    } catch (err) {
      console.error(err);
      alert("❌ Không thể kết nối server");
    }
  };

  return (
    <div>
      <h2>Chỉnh sửa sản phẩm</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên sản phẩm:</label><br />
          <input value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Mô tả:</label><br />
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Giá:</label><br />
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
        </div>
        <div>
          <label>Ảnh (URL):</label><br />
          <input value={image} onChange={e => setImage(e.target.value)} />
        </div>
        <button type="submit">Cập nhật</button>
        <button type="button" onClick={() => navigate("/admin/product")}>Quay lại</button>
      </form>
    </div>
  );
}

export default EditProduct;
