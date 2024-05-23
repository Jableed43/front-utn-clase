import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreateUser from "./Components/CreateUser";
import Login from "./Components/Login";
import Home from "./Components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateUser />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
