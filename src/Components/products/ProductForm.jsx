import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const statusOptions = ["AVAILABLE", "NOT AVAILABLE", "DISCONTINUED"];
// Lista de categorías con sus ObjectId válidos
const categoryOptions = [
  { id: "662aaa3fa20d90ca19063434", name: "zapatos" },
  { id: "662aaa48a20d90ca19063436", name: "pantalon de vestir" },
  { id: "662aaa4fa20d90ca19063438", name: "short de baño" },
  { id: "662aaa55a20d90ca1906343a", name: "sudadera" },
  { id: "662aaf30aa3f6febd3efdae8", name: "auto" },
  { id: "66314dd9cbaa985229523022", name: "casaca deportiva" },
];

function ProductForm({ onSubmit, productToEdit }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    quantity: "",
    status: "",
    category: "",
    destacado: false,
  });

  useEffect(() => {
    if (productToEdit) {
      setFormData({
        ...productToEdit,
        price: productToEdit.price / 1.21, // Ajusta el precio para editar
      });
    }
  }, [productToEdit]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      ...formData,
      price: formData.price * 1.21, // Ajusta el precio antes de enviar
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Select status</option>
          {statusOptions.map(status => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select category</option>
          {categoryOptions.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="destacado">Destacado</label>
        <input
          type="checkbox"
          name="destacado"
          id="destacado"
          checked={formData.destacado}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

ProductForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  productToEdit: PropTypes.object,
};

export default ProductForm;
