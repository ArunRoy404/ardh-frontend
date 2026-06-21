import VendorsList from "@/components/Vendors/VendorsList/VendorsList";
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import AddNewVendors from "@/components/Vendors/AddNewVendors/AddNewVendors";

const VendorsPage = () => {
  return (
    <>
      {/* Header Block */}
      <DashboardHeader
        title="Vendors"
        showBreadcrumb
      >
        <div className="flex items-center justify-end gap-2">
          <Button variant="outline">
            <Upload />
            Bulk Upload
          </Button>
          <AddNewVendors />
        </div>
      </DashboardHeader>

      <VendorsList />
    </>
  );
};
export default VendorsPage;
