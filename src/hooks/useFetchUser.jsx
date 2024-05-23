import { useState } from "react";

function useFetchUser() {
  const [error, setError] = useState();
  const urlInicial = "http://localhost:3000/api/user/getAll";

  const token = localStorage.getItem("token");

  const fetchUsers = async () => {
    try {
      const response = await fetch(urlInicial, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const users = await response.json();
        return users;
      } else {
        console.error(response.statusText);
        setError(response.statusText);
        return false;
      }
    } catch (error) {
      console.error(error);
      setError(error);
      return false;
    }
  };

  return { fetchUsers, error };
}

export default useFetchUser;
