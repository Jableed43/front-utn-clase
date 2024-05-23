import { useState } from "react";

function useCreateUser() {
  const [error, setError] = useState();
  const urlInicial = "http://localhost:3000/api/user/create";

  const createUser = async formData => {
    try {
      const response = await fetch(urlInicial, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        await response.json();
        return true;
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

  return { createUser, error };
}

export default useCreateUser;
