import "react-toastify/dist/ReactToastify.css";

import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { router } from "./routers";

function App() {
  return (
    <>
      <RouterProvider router={router} />;
      <ToastContainer />
    </>
  );
}
export default App;
