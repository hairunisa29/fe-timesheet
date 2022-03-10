import { Navigate, useRoutes } from "react-router-dom";
import DashboardKaryawan from "./pages/karyawan/DashboardKaryawan";
import DeliveryPerformance from "./pages/karyawan/DeliveryPerformance";
import PageAddFile from "./pages/karyawan/PageAddFile";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import Employee from "./pages/admin/Employee";
import Timesheet from "./pages/admin/Timesheet";
import Login from "./pages/login/Login";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/dashboard/admin",
      element: <DashboardAdmin />,
      // children: [
      //   { element: <Navigate to="/dashboard/app" replace /> },
      //   { path: 'app', element: <DashboardApp /> },
      //   { path: 'user', element: <User /> },
      //   { path: 'products', element: <Products /> },
      //   { path: 'blog', element: <Blog /> }
      // ]
    },
    {
      path: "/login",
      element: <Login />,
      // children: [
      //   { element: <Navigate to="/dashboard/app" replace /> },
      //   { path: 'app', element: <DashboardApp /> },
      //   { path: 'user', element: <User /> },
      //   { path: 'products', element: <Products /> },
      //   { path: 'blog', element: <Blog /> }
      // ]
    },
    {
      path: "/",
      element: <Login />,
      // children: [
      //   { element: <Navigate to="/dashboard/app" replace /> },
      //   { path: 'app', element: <DashboardApp /> },
      //   { path: 'user', element: <User /> },
      //   { path: 'products', element: <Products /> },
      //   { path: 'blog', element: <Blog /> }
      // ]
    },

    {
      path: "/dashboard/Employee",
      element: <Employee />,
      // children: [
      //   { element: <Navigate to="/dashboard/app" replace /> },
      //   { path: 'app', element: <DashboardApp /> },
      //   { path: 'user', element: <User /> },
      //   { path: 'products', element: <Products /> },
      //   { path: 'blog', element: <Blog /> }
      // ]
    },
    {
      path: "/dashboard/timesheet",
      element: <Timesheet />,
      // children: [
      //   { element: <Navigate to="/dashboard/app" replace /> },
      //   { path: 'app', element: <DashboardApp /> },
      //   { path: 'user', element: <User /> },
      //   { path: 'products', element: <Products /> },
      //   { path: 'blog', element: <Blog /> }
      // ]
    },
    {
      path: "/dashboard/karyawan",
      element: <DashboardKaryawan />,
      // children: [
      //   { element: <Navigate to="/dashboard/app" replace /> },
      //   { path: 'app', element: <DashboardApp /> },
      //   { path: 'user', element: <User /> },
      //   { path: 'products', element: <Products /> },
      //   { path: 'blog', element: <Blog /> }
      // ]
    },
    {
      path: "/dashboard/deliveryperformance",
      element: <DeliveryPerformance />,
      // children: [
      //   { element: <Navigate to="/dashboard/app" replace /> },
      //   { path: 'app', element: <DashboardApp /> },
      //   { path: 'user', element: <User /> },
      //   { path: 'products', element: <Products /> },
      //   { path: 'blog', element: <Blog /> }
      // ]
    },
    {
      path: "/dashboard/uploadfile",
      element: <PageAddFile />,
      // children: [
      //   { element: <Navigate to="/dashboard/app" replace /> },
      //   { path: 'app', element: <DashboardApp /> },
      //   { path: 'user', element: <User /> },
      //   { path: 'products', element: <Products /> },
      //   { path: 'blog', element: <Blog /> }
      // ]
    },
    // { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
