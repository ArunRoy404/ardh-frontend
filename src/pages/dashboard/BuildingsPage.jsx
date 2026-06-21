import { useState } from "react"
import { Layers, Pencil, Trash2 } from "lucide-react"
import { Link } from "react-router"
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader"
import CommonCard from "@/components/shared/CommonCard/CommonCard"
import { Button } from "@/components/ui/button"
import AddBuilding from "@/components/Buildings/AddBuilding/AddBuilding"
import CommonDeleteDialog from "@/components/shared/CommonDeleteDialog/CommonDeleteDialog"

const BuildingsPage = () => {
  // Initial building data matching the Figma image (2 cards of Sunrise Tower)
  const [buildings] = useState([
    {
      id: 1,
      title: "Sunrise Tower",
      location: "Bangalore",
      image: "/images/building_sunrise.png",
      tags: ["Floors", "Apartments"],
      status: "Active",
    },
    {
      id: 2,
      title: "Sunrise Tower",
      location: "Bangalore",
      image: "/images/building_skyline.png",
      tags: ["Floors", "Apartments"],
      status: "Active",
    },
  ])

  return (
    <>
      {/* Header Block */}
      <DashboardHeader
        title="Buildings"
        showBreadcrumb
      >
        <AddBuilding />
      </DashboardHeader>

      {/* Buildings Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        {buildings.map((building) => (
          <CommonCard
            key={building.id}
          >
            {/* 1. Building Image Container */}
            <div
              className="flex flex-col items-end p-4 rounded-[16px] border border-primary relative overflow-hidden bg-center bg-cover bg-no-repeat bg-lightgray gap-2.5 h-[258px] self-stretch"
              style={{ backgroundImage: `url(${building.image})` }}
            >
              {/* Active/Inactive status badge inside the image */}
              <div
                className={
                  building.status === "Active"
                    ? "bg-success-tag-bg text-success-tag-text border border-success-tag-border px-3 py-1 rounded-[6px] text-xs font-semibold font-['DM_Sans']"
                    : "bg-dark-gray/20 text-dark-gray border border-dark-gray px-3 py-1 rounded-[6px] text-xs font-semibold font-['DM_Sans']"
                }
              >
                {building.status}
              </div>
            </div>

            {/* 2. Text Content (Title & Location) */}
            <div className="flex flex-col gap-1">
              <h3 className="text-primary font-medium truncate text-[36px] font-['Adobe_Aldine'] leading-normal">
                {building.title}
              </h3>
              <p className="text-dark-gray text-[16px] font-['Poppins'] font-normal leading-[110%]">
                {building.location}
              </p>
            </div>

            {/* 3. Tags Container */}
            <div className="flex items-center gap-3 my-3">
              {building?.tags?.map((tag, index) => (
                <div key={index} className="flex items-center justify-center gap-1 px-4 py-2 border border-muted bg-card rounded-[4px] ">
                  <Layers className="w-3.5 h-3.5 text-dark-gray" />
                  <span className="text-dark-gray text-center text-xs font-normal leading-normal font-['DM_Sans']">
                    {tag}
                  </span>
                </div>
              ))}
            </div>

            {/* 4. Action Row */}
            <div className="flex items-center gap-2 w-full">
              <Link to={`/dashboard/buildings/${building.id}`} className="flex-1">
                <Button className="w-full">
                  View Details
                </Button>
              </Link>
              <Button variant="icon" className="border-secondary rounded-full w-11 h-11 bg-secondary/10 text-secondary" >
                <Pencil />
              </Button>
              <CommonDeleteDialog
                itemName={building.title}
                itemType="Building"
                trigger={
                  <Button variant="icon" className="border-destructive rounded-full w-11 h-11 bg-destructive/10 text-destructive" >
                    <Trash2 />
                  </Button>
                }
              />
            </div>
          </CommonCard>
        ))}
      </div>
    </>
  )
}

export default BuildingsPage
