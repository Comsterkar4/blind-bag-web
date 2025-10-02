import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handlequaylai = (id) => {
    navigate('/admin/Product');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      description,
      price: parseFloat(price), // gửi đúng kiểu number
      image
    };

    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct)
      });

      const data = await res.json();

      if (!res.ok) {
        // Backend trả lỗi validation
        alert(`❌ Lỗi: ${data.message || "Không thể thêm sản phẩm"}`);
        return;
      }

      alert("✅ Thêm sản phẩm thành công!");
      console.log("Sản phẩm mới:", data);

      // reset form
      setName("");
      setDescription("");
      setPrice("");
      setImage("");
    } catch (err) {
      console.error(err);
      alert("❌ Không thể kết nối server");
    }
  };

  return (
    <div>
      <h2>Thêm sản phẩm mới</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên sản phẩm:</label><br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên sản phẩm"
          />
        </div>
        <div>
          <label>Mô tả:</label><br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Nhập mô tả sản phẩm"
          />
        </div>
        <div>
          <label>Giá:</label><br />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Nhập giá sản phẩm"
          />
        </div>
        <div>
          <label>Ảnh (URL):</label><br />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Nhập URL ảnh (tùy chọn)"
          />
        </div>
        <button type="submit">Thêm sản phẩm</button>
      </form>
      <button className="sua-btn" onClick={() => handlequaylai()}>Quay lai</button>
    </div>
  );
}

export default PostProduct;
