import { useState, useCallback } from "react";

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:3000/api/product/getAll", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  return { fetchProducts, products, error, loading };
}

export default useFetchProducts;
