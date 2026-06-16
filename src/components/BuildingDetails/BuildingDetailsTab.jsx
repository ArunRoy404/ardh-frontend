import { ApartmentsIcon } from "@/components/SvgIcons/ApartmentsIcon"
import { MaintenanceIcon } from "@/components/SvgIcons/MaintenanceIcon"
import CommonTab from "@/components/shared/CommonTab/CommonTab"

const BuildingDetailsTab = ({
  apartmentsCount = 0,
  maintenanceCount = 0,
  defaultTab = "apartments",
  onTabChange,
  apartmentsContent,
  maintenanceContent,
}) => {
  const tabs = [
    {
      value: "apartments",
      label: "Apartments",
      icon: <ApartmentsIcon className="w-4 h-4" />,
      count: apartmentsCount,
      content: apartmentsContent,
    },
    {
      value: "maintenance",
      label: "Maintenance",
      icon: <MaintenanceIcon className="w-4 h-4" />,
      count: maintenanceCount,
      content: maintenanceContent,
    },
  ]

  return (
    <CommonTab
      tabs={tabs}
      defaultValue={defaultTab}
      onTabChange={onTabChange}
    />
  )
}

export default BuildingDetailsTab
