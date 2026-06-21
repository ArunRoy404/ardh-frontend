import OwnersList from "@/components/Owners/OwnersList/OwnersList";
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import AddOwner from "@/components/Owners/AddOwner/AddOwner";

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
          <AddOwner />
        </div>
      </DashboardHeader>

      <OwnersList />
    </>
  );
};
export default OwnersPage;
