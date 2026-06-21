import VendorsList from "@/components/Vendors/VendorsList/VendorsList";
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const VendorsPage = () => {
  return (
    <>
      {/* Header Block */}
      <DashboardHeader
        title="Vendors"
        showBreadcrumb
      >
        <div className="flex items-center justify-end gap-2">
          <Button>
            <PlusCircle className="w-4 h-4" />
            Add New Vendors
          </Button>
        </div>
      </DashboardHeader>

      <VendorsList />
    </>
  );
};
export default VendorsPage;
