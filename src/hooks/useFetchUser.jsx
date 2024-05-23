import { useState } from "react";

function useFetchUser() {
  const [error, setError] = useState();
  const [done, setDone] = useState(false);
  const urlInicial = "http://localhost:3000/api/user/getAll";

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Fetching users from API...");
      const response = await fetch(urlInicial, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const users = await response.json();
        console.log("Users fetched successfully:", users);
        setDone(true);
        return users;
      } else {
        console.error("Fetch error:", response.statusText);
        setError(response.statusText);
        setDone(false);
        return [];
      }
    } catch (error) {
      console.error("Fetch exception:", error);
      setError(error);
      setDone(false);
      return [];
    }
  };

  return { fetchUsers, error, done };
}

export default useFetchUser;
