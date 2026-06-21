import CommonSearch from "@/components/shared/CommonSearch/CommonSearch"
import MaintenanceTable from "./MaintenanceTable"
import MaintenanceCardsContainer from "./MaintenanceCardsContainer"
import useMaintenanceStore from "@/dummyDataStore/useMaintenanceStore"

const MaintenanceList = () => {
  const { maintenanceRecords } = useMaintenanceStore()

  return (
    <>
      <CommonSearch />

      {/* Cards for small screens */}
      <div className="block md:hidden">
        <MaintenanceCardsContainer
          data={maintenanceRecords}
          actionKey="id"
          itemsPerPage={10}
          emptyMessage="No maintenance requests found."
        />
      </div>

      {/* Table for medium+ screens */}
      <div className="hidden md:block">
        <MaintenanceTable data={maintenanceRecords} />
      </div>
    </>
  )
}

export default MaintenanceList
