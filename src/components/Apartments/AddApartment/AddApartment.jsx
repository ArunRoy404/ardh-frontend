import CommonDialog from "@/components/shared/CommonDialog/CommonDialog";
import AddApartmentForm from "./AddApartmentForm";
import { Plus } from "lucide-react";

const AddApartment = () => {
  return (
    <CommonDialog
      title="Add New Apartment"
      icon={<Plus className="w-4 h-4" />}
    >
      <AddApartmentForm />
    </CommonDialog>
  );
};

export default AddApartment;