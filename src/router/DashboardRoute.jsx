import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import NotificationsPage from "@/pages/dashboard/NotificationsPage";
import BuildingsPage from "@/pages/dashboard/BuildingsPage";
import BuildingDetails from "@/pages/BuildingDetails/BuildingDetails";
import ApartmentsPage from "@/pages/dashboard/ApartmentsPage";
import TenantsPage from "@/pages/dashboard/TenantsPage";
import OwnersPage from "@/pages/dashboard/OwnersPage";
import IncomePage from "@/pages/dashboard/IncomePage";
import ExpensesPage from "@/pages/dashboard/ExpensesPage";
import MaintenancePage from "@/pages/dashboard/MaintenancePage";
import EquipmentPage from "@/pages/dashboard/EquipmentPage";
import VendorsPage from "@/pages/dashboard/VendorsPage";
import ReportsPage from "@/pages/dashboard/ReportsPage";
import UserManagementPage from "@/pages/dashboard/UserManagementPage";
import SettingsPage from "@/pages/dashboard/SettingsPage";

const dashboardRoutes = {
  element: <DashboardLayout />,
  children: [
    {
      path: "/",
      element: <DashboardPage />,
    },
    {
      path: "/notifications",
      element: <NotificationsPage />,
    },
    {
      path: "/buildings",
      element: <BuildingsPage />,
    },
    {
      path: "/dashboard/buildings/:buildingid",
      element: <BuildingDetails />,
    },
    {
      path: "/apartments",
      element: <ApartmentsPage />,
    },
    {
      path: "/tenants",
      element: <TenantsPage />,
    },
    {
      path: "/owners",
      element: <OwnersPage />,
    },
    {
      path: "/income",
      element: <IncomePage />,
    },
    {
      path: "/expenses",
      element: <ExpensesPage />,
    },
    {
      path: "/maintenance",
      element: <MaintenancePage />,
    },
    {
      path: "/equipment",
      element: <EquipmentPage />,
    },
    {
      path: "/vendors",
      element: <VendorsPage />,
    },
    {
      path: "/reports",
      element: <ReportsPage />,
    },
    {
      path: "/user-management",
      element: <UserManagementPage />,
    },
    {
      path: "/settings",
      element: <SettingsPage />,
    },
  ],
};

export default dashboardRoutes;
