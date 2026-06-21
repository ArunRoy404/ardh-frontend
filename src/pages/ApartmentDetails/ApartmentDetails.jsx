import { PlusCircle, Pencil, Trash2 } from "lucide-react"
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import ApartmentDetailsStat from "@/components/ApartmentDetails/ApartmentDetailsStat"
import ApartmentIncomeExpected from "@/components/ApartmentDetails/ApartmentIncomeExpected"
import ApartmentDetailsInfo from "@/components/ApartmentDetails/ApartmentDetailsInfo"
import ApartmentDetailsTab from "@/components/ApartmentDetails/ApartmentDetailsTab"
import useApartmentDetailsStore from "@/dummyDataStore/useApartmentDetailsStore"

const ApartmentDetails = () => {
  const { apartmentDetails } = useApartmentDetailsStore()

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      {/* Header Block with Breadcrumbs */}
      <DashboardHeader
        title={apartmentDetails.flat}
        description={`${apartmentDetails.building} • ${apartmentDetails.type}`}
        showBreadcrumb
      >
        <div className="flex items-center gap-3">
          <Button onClick={() => toast.info("Opening Add New Record modal...")} className="flex items-center gap-2">
            <PlusCircle className="w-4 h-4" />
            Add New Record
          </Button>
          <Button variant="outline" onClick={() => toast.info("Opening Edit Flat details modal...")} className="flex items-center gap-2">
            <Pencil className="w-4 h-4" />
            Edit
          </Button>
          <Button variant="outline" size="icon" onClick={() => toast.info("Opening Delete Flat dialog...")} className="bg-red-50 text-red-600 border-red-200 hover:bg-red-100 hover:text-red-700">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </DashboardHeader>

      {/* Grid Stats Block */}
      <ApartmentDetailsStat details={apartmentDetails} />

      {/* Expected vs Actual Income */}
      <ApartmentIncomeExpected details={apartmentDetails} />

      {/* Apartment Details Info */}
      <ApartmentDetailsInfo details={apartmentDetails} />

      {/* Tabs with Income, Expenses & Maintenance Tables */}
      <ApartmentDetailsTab />
    </div>
  )
}

export default ApartmentDetails