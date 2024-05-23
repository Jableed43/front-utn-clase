import { useEffect, useState } from "react";
import useFetchProducts from "../../hooks/products/useFetchProducts";
import useDeleteProduct from "../../hooks/products/useDeleteProduct";
import ProductCard from "./productCard";
import ProductForm from "./productForm";

function ProductList() {
  const [editingProduct, setEditingProduct] = useState(null);
  const { fetchProducts, products, error, loading } = useFetchProducts();
  const { deleteProduct, error: deleteError } = useDeleteProduct();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleEdit = product => {
    setEditingProduct(product);
  };

  const handleDelete = async productId => {
    await deleteProduct(productId);
    // Refetch products after deletion
    fetchProducts();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No hay productos disponibles</p>
      ) : (
        products.map(product => (
          <ProductCard
            key={product._id}
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))
      )}
      {editingProduct && <ProductForm productToEdit={editingProduct} />}
    </div>
  );
}

export default ProductList;
