import { useState } from "react";
import "../App.css";
import PropTypes from "prop-types";
import EditUser from "./EditUser";
import useDeleteUser from "../hooks/useDeleteUser";

Card.propTypes = {
  user: PropTypes.object.isRequired,
  setFetch: PropTypes.any,
};

function Card({ user, setFetch }) {
  const [userState, setUserState] = useState(null);
  const [edit, setEdit] = useState(false);

  const { deleteUser } = useDeleteUser();

  function handleEditUser(userData) {
    if (userData) {
      setUserState(userData);
      setEdit(true);
    }
  }

  function handleDeleteUser(id) {
    if (id) {
      deleteUser(id);
      setFetch(true);
    }
  }

  return (
    <>
      <div className="cuadrado-padre">
        <div className="cuadrado">
          <p>Nombre: {user.nombre}</p>
          <p>Apellido: {user.apellido}</p>
          <p>Email: {user.email}</p>
          <p>Carrera: {user.carrera}</p>
          <button onClick={() => handleEditUser(user)}>Editar</button>
          <button onClick={() => handleDeleteUser(user._id)}>Borrar</button>
        </div>
        {edit && (
          <EditUser user={userState} setEdit={setEdit} setFetch={setFetch} />
        )}
      </div>
    </>
  );
}

export default Card;
