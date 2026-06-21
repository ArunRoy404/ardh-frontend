import CommonDialog from "@/components/shared/CommonDialog/CommonDialog";
import AddNewMaintenanceForm from "./AddNewMaintenanceForm";
import { PlusCircle } from "lucide-react";

const AddNewMaintenance = () => {
  return (
    <CommonDialog
      title="Add New Maintenance"
      icon={<PlusCircle className="w-4 h-4" />}
    >
      <AddNewMaintenanceForm />
    </CommonDialog>
  );
};

export default AddNewMaintenance;
