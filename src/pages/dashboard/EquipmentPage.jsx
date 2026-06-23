import EquipmentList from "@/components/Equipment/EquipmentList/EquipmentList";
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import AddNewEquipment from "@/components/Equipment/AddNewEquipment/AddNewEquipment";

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
          <AddNewEquipment />
        </div>
      </DashboardHeader>

      <EquipmentList />
    </>
  );
};
export default EquipmentPage;
