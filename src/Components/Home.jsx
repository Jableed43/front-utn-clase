import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchUser from "../hooks/useFetchUser";
import Card from "./Card";

function Home() {
  const navigate = useNavigate();
  const { fetchUsers } = useFetchUser();
  const [users, setUsers] = useState([]);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("token not found");
      navigate("/login");
    } else {
      fetchUsers().then(users => setUsers(users));
    }
  }, [navigate]);

  useEffect(() => {
    if (fetch) {
      fetchUsers().then(users => setUsers(users));
    }
  });

  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Cerrar sesion
      </button>
      {users && users.length > 0 ? (
        users.map((user, index) => (
          <Card key={index} setFetch={setFetch} user={user} />
        ))
      ) : (
        <p>No hay usuarios disponibles</p>
      )}
    </div>
  );
}

export default Home;
