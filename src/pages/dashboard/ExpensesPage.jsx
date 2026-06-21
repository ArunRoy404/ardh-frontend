import ExpensesList from "@/components/Expenses/ExpensesList/ExpensesList";
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import { Button } from "@/components/ui/button";
import { PlusCircle, Upload } from "lucide-react";

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
          <Button>
            <PlusCircle className="w-4 h-4" />
            Add New Expenses Record
          </Button>
        </div>
      </DashboardHeader>

      <ExpensesList />
    </>
  );
};
export default ExpensesPage;
