import CommonDialog from "@/components/shared/CommonDialog/CommonDialog";
import AddNewExpensesRecordForm from "./AddNewExpensesRecordForm";
import { PlusCircle } from "lucide-react";

const AddNewExpensesRecord = () => {
  return (
    <CommonDialog
      title="Add New Expenses Record"
      icon={<PlusCircle className="w-4 h-4" />}
    >
      <AddNewExpensesRecordForm />
    </CommonDialog>
  );
};

export default AddNewExpensesRecord;
