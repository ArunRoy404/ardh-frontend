import CommonDialog from "@/components/shared/CommonDialog/CommonDialog";
import AddOwnerForm from "./AddOwnerForm";
import { PlusCircle } from "lucide-react";

const AddOwner = () => {
  return (
    <CommonDialog
      title="Add Owner"
      icon={<PlusCircle className="w-4 h-4" />}
    >
      <AddOwnerForm />
    </CommonDialog>
  );
};

export default AddOwner;
