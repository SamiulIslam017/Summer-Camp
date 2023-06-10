import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/UserInteraction/Login";
import Register from "../pages/UserInteraction/register";
import UserDashboard from "../layouts/UserDashboard";
import MySelectedClasses from "../pages/Dashboard/UserDashboard/MySelectedClasses";
import MyEnrolledClasses from "../pages/Dashboard/UserDashboard/MyEnrolledClasses";
import PaymentHistory from "../pages/Dashboard/UserDashboard/PaymentHistory";
import PrivateRoute from './PrivateRoute'
import AllUsers from "../pages/Dashboard/AdminDashboard/AllUsers";
import AddCourse from "../pages/Dashboard/InstructorDashboard/AddCourse";
import MyCourses from "../pages/Dashboard/InstructorDashboard/MyCourses";
import AdminRoute from "./AdminRoute";
import AllCourses from "../pages/Dashboard/AdminDashboard/AllCourses";
import UpdateCourse from "../pages/Dashboard/InstructorDashboard/UpdateCourse";



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
    path: '/dashboard',
    element: <PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>,
    children: [
      {
        path: '/dashboard/selectedClasses',
        element: <MySelectedClasses></MySelectedClasses>
      },
      {
        path: '/dashboard/enrolledClasses',
        element: <MyEnrolledClasses></MyEnrolledClasses>
      },
      {
        path: '/dashboard/paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      }, {
        path: '/dashboard/allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: '/dashboard/allCourses',
        element: <AdminRoute><AllCourses></AllCourses></AdminRoute>
      },
      {
        path: '/dashboard/addCourse',
        element: <AddCourse></AddCourse>
      },
      {
        path: '/dashboard/updateCourse/:id',
        element: <UpdateCourse></UpdateCourse>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_DOMAIN}/courses/${params.id}`)
      },
      {
        path: '/dashboard/myCourse',
        element: <MyCourses></MyCourses>
      }
    ]
  },
]);

export default router;