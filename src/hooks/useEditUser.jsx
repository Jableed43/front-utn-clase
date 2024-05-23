import { useState } from "react";

function useEditUser() {
  const [error, setError] = useState();
  const [done, setDone] = useState(false);
  const urlInicial = "http://localhost:3000/api/user/update";

  const editUser = async (formData, id) => {
    try {
      const response = await fetch(`${urlInicial}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        await response.json();
        setDone(true);
        return true;
      } else {
        console.error(response.statusText);
        setError(response.statusText);
        setDone(false);
        return false;
      }
    } catch (error) {
      console.error(error);
      setError(error);
      setDone(false);
      return false;
    }
  };

  return { editUser, done, error };
}

export default useEditUser;
