import CommonDialog from "@/components/shared/CommonDialog/CommonDialog";
import AddNewEquipmentForm from "./AddNewEquipmentForm";
import { PlusCircle } from "lucide-react";

const AddNewEquipment = () => {
  return (
    <CommonDialog
      title="Add New Equipment"
      icon={<PlusCircle className="w-4 h-4" />}
    >
      <AddNewEquipmentForm />
    </CommonDialog>
  );
};

export default AddNewEquipment;
