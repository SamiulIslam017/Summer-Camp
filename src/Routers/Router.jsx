import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/UserInteraction/Login";
import Register from "../pages/UserInteraction/register";
import UserDashboard from "../layouts/UserDashboard";
import InstructorDashboard from "../layouts/InstructorDashboard";
import AdminDashboard from "../layouts/AdminDashboard";
import MySelectedClasses from "../pages/Dashboard/UserDashboard/MySelectedClasses";
import MyEnrolledClasses from "../pages/Dashboard/UserDashboard/MyEnrolledClasses";
import PaymentHistory from "../pages/Dashboard/UserDashboard/PaymentHistory";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/userdashboard',
    element: <UserDashboard></UserDashboard>,
    children: [
      {
        path: '/userdashboard/selectedClasses',
        element: <MySelectedClasses></MySelectedClasses>
      },
      {
        path: '/userdashboard/enrolledClasses',
        element: <MyEnrolledClasses></MyEnrolledClasses>
      },
      {
        path: '/userdashboard/paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      }
    ]
  },
  {
    path: '/instructordashboard',
    element: <InstructorDashboard></InstructorDashboard>
  },
  {
    path: '/admindashboard',
    element: <AdminDashboard></AdminDashboard>
  },

]);

export default router;