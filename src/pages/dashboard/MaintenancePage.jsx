import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import MaintenanceList from "@/components/Maintenance/MaintenanceList/MaintenanceList";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import AddNewMaintenance from "@/components/Maintenance/AddNewMaintenance/AddNewMaintenance";

const MaintenancePage = () => {
  return (
    <>
      {/* Header Block */}
      <DashboardHeader
        title="Maintenance"
        showBreadcrumb
      >
        <div className="flex items-center justify-end gap-2">
          <Button variant="outline">
            <Upload />
            Bulk Upload
          </Button>
          <AddNewMaintenance />
        </div>
      </DashboardHeader>

      <MaintenanceList />
    </>
  );
};
export default MaintenancePage;
