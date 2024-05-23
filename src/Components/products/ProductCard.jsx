import PropTypes from "prop-types";

function ProductCard({ product, onEdit, onDelete }) {
  const handleEdit = () => {
    onEdit(product);
  };

  const handleDelete = () => {
    onDelete(product._id);
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Description: {product.description}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Status: {product.status}</p>
      <p>Category: {product.category.name || product.category}</p>
      <p>Destacado: {product.destacado ? "Yes" : "No"}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    quantity: PropTypes.number,
    status: PropTypes.string,
    category: PropTypes.oneOfType([
      PropTypes.shape({
        name: PropTypes.string,
      }),
      PropTypes.string,
    ]),
    destacado: PropTypes.bool,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductCard;
