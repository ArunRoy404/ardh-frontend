import CommonSearch from "@/components/shared/CommonSearch/CommonSearch"
import MaintenanceTable from "./MaintenanceTable"
import MaintenanceCardsContainer from "./MaintenanceCardsContainer"

const MaintenanceList = ({ data, loading = false }) => {
  return (
    <>
      <CommonSearch />

      {/* Cards for small screens */}
      <div className="block md:hidden">
        <MaintenanceCardsContainer
          data={data}
          loading={loading}
          actionKey="id"
          itemsPerPage={10}
          emptyMessage="No maintenance requests found."
        />
      </div>

      {/* Table for medium+ screens */}
      <div className="hidden md:block">
        <MaintenanceTable data={data} loading={loading} />
      </div>
    </>
  )
}

export default MaintenanceList
