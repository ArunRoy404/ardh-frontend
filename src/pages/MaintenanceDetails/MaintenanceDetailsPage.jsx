import { Pencil, CheckCircle } from "lucide-react"
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader"
import { Button } from "@/components/ui/button"
import DashboardStat from "@/components/DashboardPage/DashboardStat/DashboardStat"
import MaintenanceDetailsInfo from "@/components/MaintenanceDetails/MaintenanceDetailsInfo"
import useMaintenanceDetailsStore from "@/dummyDataStore/useMaintenanceDetailsStore"

const MaintenanceDetailsPage = () => {
  const { maintenanceDetails } = useMaintenanceDetailsStore()

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      {/* Header Block with Breadcrumbs */}
      <DashboardHeader
        title="Maintenance"
        description={maintenanceDetails.title}
        showBreadcrumb
      >
        <div className="flex items-center gap-3">
          <Button variant="outline" isNotImplemented>
            <Pencil className="w-4 h-4" />
            Edit
          </Button>
          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white" isNotImplemented>
            <CheckCircle className="w-4 h-4" />
            Mark Resolved
          </Button>
        </div>
      </DashboardHeader>

      {/* Grid Stats Block */}
      <DashboardStat stats={maintenanceDetails.stats} />

      {/* Maintenance Details Block */}
      <MaintenanceDetailsInfo details={maintenanceDetails} />
    </div>
  )
}

export default MaintenanceDetailsPage
