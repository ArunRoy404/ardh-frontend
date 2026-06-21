import { Pencil } from "lucide-react"
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader"
import { Button } from "@/components/ui/button"
import VendorDetailsInfo from "@/components/VendorDetails/VendorDetailsInfo"
import useVendorDetailsStore from "@/dummyDataStore/useVendorDetailsStore"

const VendorsDetailsPage = () => {
  const { vendorDetails } = useVendorDetailsStore()

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      {/* Header Block with Breadcrumbs */}
      <DashboardHeader
        title="Vendors"
        showBreadcrumb
      >
        <div className="flex items-center gap-3">
          <Button variant="outline" isNotImplemented>
            <Pencil className="w-4 h-4" />
            Edit
          </Button>
        </div>
      </DashboardHeader>

      {/* Vendor Details Block */}
      <VendorDetailsInfo details={vendorDetails} />
    </div>
  )
}

export default VendorsDetailsPage
