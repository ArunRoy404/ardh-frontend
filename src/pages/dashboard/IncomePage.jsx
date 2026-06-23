import IncomeList from "@/components/Income/IncomeList/IncomeList";
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import RecordNewIncome from "@/components/Income/RecordNewIncome/RecordNewIncome";

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
          <RecordNewIncome />
        </div>
      </DashboardHeader>

      <IncomeList />
    </>
  );
};
export default IncomePage;
