import { Pencil } from "lucide-react"
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader"
import { Button } from "@/components/ui/button"
import EquipmentDetailsInfo from "@/components/EquipmentDetails/EquipmentDetailsInfo"
import useEquipmentDetailsStore from "@/dummyDataStore/useEquipmentDetailsStore"

const EquipmentDetailsPage = () => {
  const { equipmentDetails } = useEquipmentDetailsStore()

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      {/* Header Block with Breadcrumbs */}
      <DashboardHeader
        title="Equipment"
        showBreadcrumb
      >
        <div className="flex items-center gap-3">
          <Button variant="outline" isNotImplemented>
            <Pencil className="w-4 h-4" />
            Edit
          </Button>
        </div>
      </DashboardHeader>

      {/* Equipment Details Block */}
      <EquipmentDetailsInfo details={equipmentDetails} />
    </div>
  )
}

export default EquipmentDetailsPage
