import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import DashboardPage from "@/pages/dashboard/DashboardPage";



const dashboardRoutes = {
  element: <DashboardLayout />,
  children: [
    {
      path: "/",
      element: <DashboardPage />,
    },
  ],
};


export default dashboardRoutes;
