import { useState } from "react";
import useCreateUser from "../hooks/useCreateUser";
import "../../public/css/createUser.css";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const { createUser } = useCreateUser();
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await createUser(formData);
    if (response) {
      navigate("/login");
    }
  }

  return (
    <>
      <h2>Bienvenid@s a mi web</h2>
      <br />
      <div className="formContainer">
        <h4>Crear Usuario</h4>
        <form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label htmlFor="nombre">nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="apellido">apellido</label>
            <input
              type="text"
              name="apellido"
              id="apellido"
              value={formData.apellido}
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="carrera">carrera</label>
            <input
              type="text"
              name="carrera"
              id="carrera"
              value={formData.carrera}
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="edad">edad</label>
            <input
              type="number"
              name="edad"
              id="edad"
              value={formData.edad}
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="buttonContainer">
            <button className="sendButton" type="submit">
              Enviar
            </button>
            <button className="resetButton" type="reset">
              Resetear
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateUser;
