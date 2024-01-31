import AddProduct from "./pages/addproduct";
import AddUser from "./pages/adduser";
import EditProduct from "./pages/editproduct";
import EditUser from "./pages/edituser";
import Login from "./pages/login";
import PageDefault from "./layouts/pagedefault";
import Products from "./pages/product";
import Users from "./pages/users";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageDefault />,
    children: [
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/adduser",
        element: <AddUser />,
      },
      {
        path: "/edituser/:id",
        element: <EditUser />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/editproduct/:id",
        element: <EditProduct />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
]);
