import CommonDialog from "@/components/shared/CommonDialog/CommonDialog";
import AddNewUserForm from "./AddNewUserForm";

const AddNewUser = () => {
  return (
    <CommonDialog
      title="Add New User"
    >
      <AddNewUserForm />
    </CommonDialog>
  );
};

export default AddNewUser;
