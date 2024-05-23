import useCreateProduct from "../../hooks/products/useCreateProduct";
import ProductForm from "./productForm";

function CreateProduct() {
  const { createProduct, error } = useCreateProduct();

  const handleCreateProduct = async formData => {
    const product = await createProduct(formData);
    if (product) {
      alert("Product created successfully");
    } else {
      alert("Failed to create product");
    }
  };

  return (
    <div>
      <h2>Create Product</h2>
      <ProductForm onSubmit={handleCreateProduct} />
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default CreateProduct;
