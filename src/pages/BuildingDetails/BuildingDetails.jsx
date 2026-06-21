import { useMemo } from "react"
import { Pencil } from "lucide-react"
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import DashboardStat from "@/components/DashboardPage/DashboardStat/DashboardStat"
import BuldingDetailsInfo from "@/components/BuildingDetails/BuldingDetailsInfo"
import BuildingDetailsTab from "@/components/BuildingDetails/BuildingDetailsTab"
import ApartmentsList from "@/components/Apartments/ApartmentsList/ApartmentsList"
import MaintenanceList from "@/components/Maintenance/MaintenanceList/MaintenanceList"
import AddApartment from "@/components/Apartments/AddApartment/AddApartment"

const BuildingDetails = () => {
  const buildingStats = useMemo(() => [
    {
      title: "Total Apartments",
      value: "19",
      iconType: "apartments",
      iconColor: "text-dark-gray",
      iconBg: "bg-muted",
    },
    {
      title: "Occupied",
      value: "2",
      iconType: "tenants",
      iconColor: "text-open-tag-text",
      iconBg: "bg-open-tag-bg",
    },
    {
      title: "Vacant",
      value: "1",
      iconType: "vacant",
      iconColor: "text-progress-tag-text",
      iconBg: "bg-progress-tag-bg",
    },
    {
      title: "Open Maintenance",
      value: "2",
      iconType: "maintenance",
      iconColor: "text-dark-gray",
      iconBg: "bg-muted",
    },
  ], [])

  const buildingInfoDetails = useMemo(() => [
    { label: "Floors", value: "19" },
    {
      label: "Status",
      value: "Active",
      render: (val) => (
        <span className="bg-success-tag-bg text-success-tag-text border border-success-tag-border px-3 py-0.5 rounded-[6px] text-xs font-semibold">
          {val}
        </span>
      ),
    },
    { label: "Parking", value: "Underground parking for 30 cars" },
    { label: "Country", value: "India" },
    {
      label: "Description",
      value: "Premium residential tower with modern amenities",
      className: "flex items-start gap-2 md:col-span-2",
      valueClassName: "text-dark-gray font-normal",
    },
  ], [])


  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      {/* Header Block with Breadcrumbs */}
      <DashboardHeader
        title="Sunrise Tower"
        description="Plot 45, Sector 12, Whitefield, Bangalore"
        showBreadcrumb
      >
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => toast.info("Opening Edit Sunrise Tower details modal...")}
          >
            <Pencil className="w-4 h-4" />
            Edit
          </Button>
          <AddApartment />
        </div>
      </DashboardHeader>

      {/* Grid Stats Block */}
      <DashboardStat stats={buildingStats} />

      {/* Information Block Card */}
      <BuldingDetailsInfo details={buildingInfoDetails} />

      {/* Tabs with Apartments & Maintenance Tables */}
      <BuildingDetailsTab
        defaultTab="apartments"
        apartmentsContent={
          <ApartmentsList />
        }
        maintenanceContent={
          <MaintenanceList />
        }
      />
    </div>
  )
}

export default BuildingDetails
