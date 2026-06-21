import CommonDialog from "@/components/shared/CommonDialog/CommonDialog";
import AddBuildingForm from "./AddBuildongForm";

const AddBuilding = () => {
  return (
    <CommonDialog
      title="Add New Buildings"
    >
      <AddBuildingForm />
    </CommonDialog>
  );
};

export default AddBuilding;
