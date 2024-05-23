import { useEffect, useState, useCallback } from "react";
import useFetchUser from "../hooks/useFetchUser";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  const { fetchUsers } = useFetchUser();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const fetchUsersCallback = useCallback(() => {
    fetchUsers().then(data => setUsers(data));
  }, [fetchUsers]);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      fetchUsersCallback();
    }
  }, [token, navigate, fetchUsersCallback]);

  return (
    <>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Cerrar sesion
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
