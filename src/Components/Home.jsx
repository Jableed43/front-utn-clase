import { useEffect, useState, useCallback } from "react";
import useFetchUser from "../hooks/useFetchUser";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  const { fetchUsers } = useFetchUser();
  const navigate = useNavigate();

  const fetchUsersCallback = useCallback(async () => {
    console.log("Fetching users...");
    const data = await fetchUsers();
    console.log("Users fetched:", data);
    setUsers(data);
  }, [fetchUsers]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("useEffect triggered, token:", token);
    if (!token) {
      console.log("No token found, redirecting to login");
      navigate("/login");
    } else {
      fetchUsersCallback();
    }
  }, [navigate, fetchUsersCallback]);

  return (
    <>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Cerrar sesión
      </button>
      {users.length > 0 ? (
        users.map((user, indice) => <Card key={indice} user={user} />)
      ) : (
        <p>No hay usuarios disponibles</p>
      )}
    </>
  );
}

export default Home;
