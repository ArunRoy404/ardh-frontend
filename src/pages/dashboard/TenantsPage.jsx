import TenantsList from "@/components/Tenants/TenantsList/TenantsList";
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import { Button } from "@/components/ui/button";
import { PlusCircle, Upload } from "lucide-react";

const TenantsPage = () => {
  return (
    <>
      {/* Header Block */}
      <DashboardHeader
        title="Tenants"
        showBreadcrumb
      >
        <div className="flex items-center justify-end gap-2">
          <Button variant="outline">
            <Upload />
            Bulk Upload
          </Button>
          <Button>
            <PlusCircle className="w-4 h-4" />
            Add New Tenant
          </Button>
        </div>
      </DashboardHeader>

      <TenantsList />
    </>
  );
};
export default TenantsPage;
