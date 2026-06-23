import TenantsList from "@/components/Tenants/TenantsList/TenantsList";
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import AddTenants from "@/components/Tenants/AddTenants/AddTenants";

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
          <AddTenants />
        </div>
      </DashboardHeader>

      <TenantsList />
    </>
  );
};
export default TenantsPage;
