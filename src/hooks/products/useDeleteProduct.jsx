import { useState } from "react";

function useDeleteProduct() {
  const [error, setError] = useState(null);

  const deleteProduct = async id => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `http://localhost:3000/api/product/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        return true;
      } else {
        setError(response.statusText);
        return false;
      }
    } catch (error) {
      setError(error.message);
      return false;
    }
  };

  return { deleteProduct, error };
}

export default useDeleteProduct;
