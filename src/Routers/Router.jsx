import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
]);

export default router;