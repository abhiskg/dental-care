import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Root from "../layout/Root";
import Appointment from "../pages/appointment/Appointment";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ManageUsers from "../pages/dashboard/ManageUsers";
import MyAppointments from "../pages/dashboard/MyAppointments";
import Home from "../pages/home/Home";
import PrivateRoute from "./PrivateRoute";

const rootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <MyAppointments />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage-user",
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default rootRoutes;
