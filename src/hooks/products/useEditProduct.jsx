import { useState } from "react";

function useEditProduct() {
  const [error, setError] = useState(null);

  const editProduct = async formData => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `http://localhost:3000/api/product/update/${formData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        const updatedProduct = await response.json();
        return updatedProduct;
      } else {
        setError(response.statusText);
        return null;
      }
    } catch (error) {
      setError(error.message);
      return null;
    }
  };

  return { editProduct, error };
}

export default useEditProduct;
