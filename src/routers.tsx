import { createBrowserRouter } from "react-router-dom";
import PageDefault from "./layouts/pagedefault";
import Users from "./pages/users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageDefault />,
    children: [
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);
