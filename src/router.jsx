import { createBrowserRouter } from "react-router-dom";
import CreateUser from "./Components/createUser";
import Login from "./Components/Login";
import Home from "./Components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateUser />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
