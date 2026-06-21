import { createBrowserRouter } from "react-router";
import authRoutes from "@/router/AuthRouter";
import dashboardRoutes from "./DashboardRoute";
import NotFoundPage from "@/pages/NotFoundPage";

const router = createBrowserRouter([
  dashboardRoutes,
  authRoutes,
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router; 