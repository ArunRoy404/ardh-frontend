import { Pencil } from "lucide-react"
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader"
import { Button } from "@/components/ui/button"
import OwnerDetailsInfo from "@/components/OwnerDetails/OwnerDetailsInfo"
import OwnerPropertiesList from "@/components/OwnerDetails/OwnerPropertiesList"
import useOwnerDetailsStore from "@/dummyDataStore/useOwnerDetailsStore"

const OwnerDetailsPage = () => {
  const { ownerDetails } = useOwnerDetailsStore()

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      {/* Header Block with Breadcrumbs */}
      <DashboardHeader
        title={ownerDetails.name}
        showBreadcrumb
      >
        <div className="flex items-center gap-3">
          <Button variant="outline" isNotImplemented>
            <Pencil className="w-4 h-4" />
            Edit
          </Button>
        </div>
      </DashboardHeader>

      {/* Owner Information Card */}
      <OwnerDetailsInfo details={ownerDetails} />

      {/* Properties List Block */}
      <OwnerPropertiesList data={ownerDetails.properties} />
    </div>
  )
}

export default OwnerDetailsPage
