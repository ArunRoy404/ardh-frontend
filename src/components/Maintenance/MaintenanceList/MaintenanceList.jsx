import MaintenanceTable, { actionItems } from "./MaintenanceTable"
import MaintenanceCardsContainer from "./MaintenanceCardsContainer"

const MaintenanceList = ({ data, loading = false }) => {
  return (
    <>
      {/* Cards for small screens */}
      <div className="block md:hidden">
        <MaintenanceCardsContainer
          data={data}
          loading={loading}
          actions={actionItems}
          actionKey="id"
          itemsPerPage={10}
          searchable={true}
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
