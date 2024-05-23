import { createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import CreateProduct from "./Components/products/CreateProduct";
import ProductList from "./Components/products/productList";
import CreateUser from "./Components/createUser";

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
  {
    path: "/create-products",
    element: <CreateProduct />,
  },
  {
    path: "/products",
    element: <ProductList />,
  },
]);
