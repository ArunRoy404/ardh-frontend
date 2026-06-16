import ApartmentsTable, { actionItems } from "./ApartmentsTable"
import ApartmentCardsContainer from "./ApartmentCardsContainer"

const ApartmentsList = ({ data, loading = false }) => {
  return (
    <>
      {/* Cards for small screens */}
      <div className="block md:hidden">
        <ApartmentCardsContainer
          data={data}
          loading={loading}
          actions={actionItems}
          actionKey="id"
          itemsPerPage={10}
          searchable={true}
          emptyMessage="No apartments found."
        />
      </div>

      {/* Table for medium+ screens */}
      <div className="hidden md:block">
        <ApartmentsTable data={data} loading={loading} />
      </div>
    </>
  )
}

export default ApartmentsList
