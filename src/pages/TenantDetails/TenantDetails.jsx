import { Pencil, LogOut } from "lucide-react"
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import TenantDetailsInfo from "@/components/TenantDetails/TenantDetailsInfo"
import useTenantDetailsStore from "@/dummyDataStore/useTenantDetailsStore"

const TenantDetails = () => {
  const { tenantDetails } = useTenantDetailsStore()

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      {/* Header Block with Breadcrumbs */}
      <DashboardHeader
        title={tenantDetails.name}
        showBreadcrumb
      >
        <div className="flex items-center gap-3">
          <Button variant="outline" isNotImplemented>
            <Pencil className="w-4 h-4" />
            Edit
          </Button>
          <Button variant="destructive" isNotImplemented>
            <LogOut className="w-4 h-4" />
            Move Out
          </Button>
        </div>
      </DashboardHeader>

      {/* Tenant Information block */}
      <TenantDetailsInfo details={tenantDetails} />
    </div>
  )
}

export default TenantDetails