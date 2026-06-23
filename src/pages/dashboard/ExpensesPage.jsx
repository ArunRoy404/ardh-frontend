import ExpensesList from "@/components/Expenses/ExpensesList/ExpensesList";
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import AddNewExpensesRecord from "@/components/Expenses/AddNewExpensesRecord/AddNewExpensesRecord";

const ExpensesPage = () => {
  return (
    <>
      {/* Header Block */}
      <DashboardHeader
        title="Expenses"
        showBreadcrumb
      >
        <div className="flex items-center justify-end gap-2">
          <Button variant="outline">
            <Upload />
            Bulk Upload
          </Button>
          <AddNewExpensesRecord />
        </div>
      </DashboardHeader>

      <ExpensesList />
    </>
  );
};
export default ExpensesPage;
