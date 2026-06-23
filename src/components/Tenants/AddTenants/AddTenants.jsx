import CommonDialog from "@/components/shared/CommonDialog/CommonDialog";
import AddTenantsForm from "./AddTenantsForm";
import { PlusCircle } from "lucide-react";

const AddTenants = () => {
  return (
    <CommonDialog
      title="Add Tenants"
      icon={<PlusCircle className="w-4 h-4" />}
    >
      <AddTenantsForm />
    </CommonDialog>
  );
};

export default AddTenants;
