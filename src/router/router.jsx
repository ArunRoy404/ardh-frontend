import { createBrowserRouter } from "react-router";
import authRoutes from "@/router/AuthRouter";
import dashboardRoutes from "./DashboardRoute";

const router = createBrowserRouter([
  dashboardRoutes,
  authRoutes,
]);

export default router; 