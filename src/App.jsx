import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import useFetchUser from "./hooks/useFetchUser";

function App() {
  const [users, setUsers] = useState([]);

  const { fetchUsers } = useFetchUser();

  useEffect(() => {
    fetchUsers().then(data => setUsers(data));
  }, [fetchUsers]);

  return (
    <>
      {users ? (
        users.map((user, indice) => <Card key={indice} user={user} />)
      ) : (
        <p> No hay usuarios disponibles</p>
      )}
    </>
  );
}

export default App;
