import OwnersList from "@/components/Owners/OwnersList/OwnersList";
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import { Button } from "@/components/ui/button";
import { PlusCircle, Upload } from "lucide-react";

const OwnersPage = () => {
  return (
    <>
      {/* Header Block */}
      <DashboardHeader
        title="Owners"
        showBreadcrumb
      >
        <div className="flex items-center justify-end gap-2">
          <Button variant="outline">
            <Upload />
            Bulk Upload
          </Button>
          <Button>
            <PlusCircle className="w-4 h-4" />
            Add New Owner
          </Button>
        </div>
      </DashboardHeader>

      <OwnersList />
    </>
  );
};
export default OwnersPage;
