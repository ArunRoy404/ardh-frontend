import React, { useState, useMemo } from "react"
import { useParams } from "react-router"
import { Pencil, Plus } from "lucide-react"
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import DashboardStat from "@/components/DashboardPage/DashboardStat/DashboardStat"
import BuldingDetailsInfo from "@/components/BuildingDetails/BuldingDetailsInfo"
import BuildingDetailsTab from "@/components/BuildingDetails/BuildingDetailsTab"
import ApartmentsList from "@/components/Apartments/ApartmentsList/ApartmentsList"
import MaintenanceList from "@/components/Maintenance/MaintenanceList/MaintenanceList"

const BuildingDetails = () => {
  const [activeTab, setActiveTab] = useState("apartments")

  const buildingStats = useMemo(() => [
    {
      title: "Total Apartments",
      value: "19",
      iconType: "apartments",
      iconColor: "text-dark-gray",
      iconBg: "bg-slate-100",
    },
    {
      title: "Occupied",
      value: "2",
      iconType: "tenants",
      iconColor: "text-sky-500",
      iconBg: "bg-sky-50",
    },
    {
      title: "Vacant",
      value: "1",
      iconType: "vacant",
      iconColor: "text-amber-500",
      iconBg: "bg-amber-50",
    },
    {
      title: "Open Maintenance",
      value: "2",
      iconType: "maintenance",
      iconColor: "text-slate-500",
      iconBg: "bg-slate-100",
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

  // Apartments Mock Data (12 items for pagination demo)
  const apartmentsData = useMemo(() => [
    { id: 1, flat: "101", type: "2BHK", floor: 1, tenant: "Ankit Varma", rent: "₹30,000", status: "Occupied" },
    { id: 2, flat: "102", type: "3BHK", floor: 2, tenant: "Neha Singh", rent: "₹30,000", status: "Occupied" },
    { id: 3, flat: "103", type: "2BHK", floor: 1, tenant: "-", rent: "₹20,000", status: "Vacant" },
    { id: 4, flat: "104", type: "1BHK", floor: 1, tenant: "Amit Sharma", rent: "₹15,000", status: "Occupied" },
    { id: 5, flat: "201", type: "3BHK", floor: 2, tenant: "-", rent: "₹28,000", status: "Vacant" },
    { id: 6, flat: "202", type: "2BHK", floor: 2, tenant: "Rahul Gupta", rent: "₹22,000", status: "Occupied" },
    { id: 7, flat: "203", type: "2BHK", floor: 2, tenant: "Pooja Patel", rent: "₹23,000", status: "Occupied" },
    { id: 8, flat: "301", type: "4BHK", floor: 3, tenant: "-", rent: "₹45,000", status: "Vacant" },
    { id: 9, flat: "302", type: "3BHK", floor: 3, tenant: "Suresh Kumar", rent: "₹35,000", status: "Occupied" },
    { id: 10, flat: "303", type: "2BHK", floor: 3, tenant: "Preeti Singh", rent: "₹24,000", status: "Occupied" },
    { id: 11, flat: "401", type: "1BHK", floor: 4, tenant: "-", rent: "₹16,000", status: "Vacant" },
    { id: 12, flat: "402", type: "2BHK", floor: 4, tenant: "Vikram Malhotra", rent: "₹25,000", status: "Occupied" },
  ], [])

  // Maintenance Mock Data
  const maintenanceData = useMemo(() => [
    { id: 101, ticketId: "MNT-701", issue: "Leaking water pipe in kitchen", type: "Plumbing", floor: 1, tenant: "Ankit Varma", status: "Open", flat: "101" },
    { id: 102, ticketId: "MNT-702", issue: "AC not cooling", type: "HVAC", floor: 3, tenant: "Preeti Singh", status: "Open", flat: "303" },
  ], [])

  const handleTabChange = (value) => {
    setActiveTab(value)
  }

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
          <Button
            onClick={() => toast.info("Opening Add New Apartment modal...")}
          >
            <Plus className="w-4 h-4" />
            Add New Apartment
          </Button>
        </div>
      </DashboardHeader>

      {/* Grid Stats Block */}
      <DashboardStat stats={buildingStats} />

      {/* Information Block Card */}
      <BuldingDetailsInfo details={buildingInfoDetails} />

      {/* Tabs with Apartments & Maintenance Tables */}
      <BuildingDetailsTab
        apartmentsCount={apartmentsData.length}
        maintenanceCount={maintenanceData.length}
        defaultTab="apartments"
        onTabChange={handleTabChange}
        apartmentsContent={
          <ApartmentsList
            data={apartmentsData}
          />
        }
        maintenanceContent={
          <MaintenanceList
            data={maintenanceData}
          />
        }
      />
    </div>
  )
}

export default BuildingDetails
