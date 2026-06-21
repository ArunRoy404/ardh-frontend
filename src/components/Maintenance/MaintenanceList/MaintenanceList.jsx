import CommonSearch from "@/components/shared/CommonSearch/CommonSearch"
import MaintenanceTable from "./MaintenanceTable"
import MaintenanceCardsContainer from "./MaintenanceCardsContainer"
import useMaintenanceStore from "@/dummyDataStore/useMaintenanceStore"
import ListSkeleton from "@/components/skeletons/ListSkeleton"

const MaintenanceList = ({ loading = false }) => {
  const { maintenanceRecords } = useMaintenanceStore()

  if (loading) return <ListSkeleton cardRows={3} hasMiddleContent={true} cardsCount={3} tableColumns={8} tableRows={5} />


  return (
    <>
      <CommonSearch />

      {/* Cards for small screens */}
      <div className="block md:hidden">
        <MaintenanceCardsContainer
          data={maintenanceRecords}
          actionKey="title"
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
