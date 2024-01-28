import AddUser from "./pages/adduser";
import EditUser from "./pages/edituser";
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
        path: "/edituser/:id",
        element: <EditUser />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
]);
