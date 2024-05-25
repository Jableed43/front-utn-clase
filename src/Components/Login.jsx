import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={function (e) {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={function (e) {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
