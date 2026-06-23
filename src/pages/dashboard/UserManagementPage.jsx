import UserManagementList from "@/components/UserManagement/UserManagementList/UserManagementList";
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import AddNewUser from "@/components/UserManagement/AddNewUser/AddNewUser";

const UserManagementPage = () => {
  return (
    <>
      {/* Header Block */}
      <DashboardHeader
        title="User Management"
        showBreadcrumb
      >
        <AddNewUser />
      </DashboardHeader>

      <UserManagementList />
    </>
  );
};
export default UserManagementPage;
