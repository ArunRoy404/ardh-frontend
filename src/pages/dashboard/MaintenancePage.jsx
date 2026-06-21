import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import MaintenanceList from "@/components/Maintenance/MaintenanceList/MaintenanceList";
import { Button } from "@/components/ui/button";
import { PlusCircle, Upload } from "lucide-react";

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
          <Button>
            <PlusCircle className="w-4 h-4" />
            Add New Maintenance
          </Button>
        </div>
      </DashboardHeader>

      <MaintenanceList />
    </>
  );
};
export default MaintenancePage;
