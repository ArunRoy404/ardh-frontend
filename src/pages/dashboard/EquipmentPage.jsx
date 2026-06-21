import EquipmentList from "@/components/Equipment/EquipmentList/EquipmentList";
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import { Button } from "@/components/ui/button";
import { PlusCircle, Upload } from "lucide-react";

const EquipmentPage = () => {
  return (
    <>
      {/* Header Block */}
      <DashboardHeader
        title="Equipment"
        showBreadcrumb
      >
        <div className="flex items-center justify-end gap-2">
          <Button variant="outline">
            <Upload />
            Bulk Upload
          </Button>
          <Button>
            <PlusCircle className="w-4 h-4" />
            Add New Equipment
          </Button>
        </div>
      </DashboardHeader>

      <EquipmentList />
    </>
  );
};
export default EquipmentPage;
