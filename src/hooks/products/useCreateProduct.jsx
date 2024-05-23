import { useState } from "react";

function useCreateProduct() {
  const [error, setError] = useState(null);

  const createProduct = async formData => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:3000/api/product/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const product = await response.json();
        return product;
      } else {
        setError(response.statusText);
        return null;
      }
    } catch (error) {
      setError(error.message);
      return null;
    }
  };

  return { createProduct, error };
}

export default useCreateProduct;
