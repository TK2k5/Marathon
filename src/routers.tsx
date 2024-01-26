import AddUser from "./pages/adduser";
import Login from "./pages/login";
import PageDefault from "./layouts/pagedefault";
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
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
