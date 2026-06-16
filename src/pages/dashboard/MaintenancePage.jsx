import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import MaintenanceList from "@/components/Maintenance/MaintenanceList/MaintenanceList";
import { Button } from "@/components/ui/button";
import { PlusCircle, Upload } from "lucide-react";
import { useMemo } from "react";

const MaintenancePage = () => {
  // Maintenance Mock Data
  const maintenanceData = useMemo(() => [
    { id: 101, ticketId: "MNT-701", issue: "Leaking water pipe in kitchen", type: "Plumbing", floor: 1, tenant: "Ankit Varma", status: "Open", flat: "101" },
    { id: 102, ticketId: "MNT-702", issue: "AC not cooling", type: "HVAC", floor: 3, tenant: "Preeti Singh", status: "Open", flat: "303" },
  ], [])


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

      <MaintenanceList
        data={maintenanceData}
      />
    </>
  );
};
export default MaintenancePage;
