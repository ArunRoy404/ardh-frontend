import IncomeList from "@/components/Income/IncomeList/IncomeList";
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import { Button } from "@/components/ui/button";
import { PlusCircle, Upload } from "lucide-react";

const IncomePage = () => {
  return (
    <>
      {/* Header Block */}
      <DashboardHeader
        title="Income"
        showBreadcrumb
      >
        <div className="flex items-center justify-end gap-2">
          <Button variant="outline">
            <Upload />
            Bulk Upload
          </Button>
          <Button>
            <PlusCircle className="w-4 h-4" />
            Add New Income Record
          </Button>
        </div>
      </DashboardHeader>

      <IncomeList />
    </>
  );
};
export default IncomePage;
