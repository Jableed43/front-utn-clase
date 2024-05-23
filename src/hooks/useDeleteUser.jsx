import { useState } from "react";

function useDeleteUser() {
  const [error, setError] = useState();
  const urlInicial = "http://localhost:3000/api/user/deleteUser";

  const deleteUser = async id => {
    try {
      const response = await fetch(`${urlInicial}/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
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

  return { deleteUser, error };
}

export default useDeleteUser;
