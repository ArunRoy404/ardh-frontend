import UserManagementList from "@/components/UserManagement/UserManagementList/UserManagementList";
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const UserManagementPage = () => {
  return (
    <>
      {/* Header Block */}
      <DashboardHeader
        title="User Management"
        showBreadcrumb
      >
        <div className="flex items-center justify-end gap-2">
          <Button>
            <PlusCircle className="w-4 h-4" />
            Add New User
          </Button>
        </div>
      </DashboardHeader>

      <UserManagementList />
    </>
  );
};
export default UserManagementPage;
