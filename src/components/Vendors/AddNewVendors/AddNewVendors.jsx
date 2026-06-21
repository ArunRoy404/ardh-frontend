import CommonDialog from "@/components/shared/CommonDialog/CommonDialog";
import AddNewVendorsForm from "./AddNewVendorsForm";
import { PlusCircle } from "lucide-react";

const AddNewVendors = () => {
  return (
    <CommonDialog
      title="Add New Vendors"
      icon={<PlusCircle className="w-4 h-4" />}
    >
      <AddNewVendorsForm />
    </CommonDialog>
  );
};

export default AddNewVendors;
