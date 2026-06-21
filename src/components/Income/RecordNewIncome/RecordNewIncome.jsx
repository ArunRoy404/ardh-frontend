import CommonDialog from "@/components/shared/CommonDialog/CommonDialog";
import RecordNewIncomeForm from "./RecordNewIncomeForm";
import { PlusCircle } from "lucide-react";

const RecordNewIncome = () => {
  return (
    <CommonDialog
      title="Record New Income"
      icon={<PlusCircle className="w-4 h-4" />}
    >
      <RecordNewIncomeForm />
    </CommonDialog>
  );
};

export default RecordNewIncome;
