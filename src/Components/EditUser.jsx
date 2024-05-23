import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useEditUser from "../hooks/useEditUser";

EditUser.propTypes = {
  user: PropTypes.object.isRequired,
  setEdit: PropTypes.func.isRequired,
};

function EditUser({ user, setEdit }) {
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const { editUser, done } = useEditUser();

  useEffect(() => {
    if (done) {
      setEdit(false); // Cierra el formulario al completar la edición
    }
  }, [done, setEdit]);

  async function handleSubmit(e) {
    e.preventDefault();
    await editUser(formData, user._id);
  }

  return (
    <>
      <h2>Editar usuario</h2>
      <form className="editForm" onSubmit={handleSubmit}>
        <label htmlFor="nombre">nombre</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={formData.nombre || ""}
          onChange={handleChange}
        />

        <label htmlFor="apellido">apellido</label>
        <input
          type="text"
          name="apellido"
          id="apellido"
          value={formData.apellido || ""}
          onChange={handleChange}
        />

        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email || ""}
          onChange={handleChange}
        />

        <label htmlFor="carrera">carrera</label>
        <input
          type="text"
          name="carrera"
          id="carrera"
          value={formData.carrera || ""}
          onChange={handleChange}
        />

        <label htmlFor="edad">edad</label>
        <input
          type="number"
          name="edad"
          id="edad"
          value={formData.edad || ""}
          onChange={handleChange}
        />

        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password || ""}
          onChange={handleChange}
        />

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default EditUser;
