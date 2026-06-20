import CommonSearch from "@/components/shared/CommonSearch/CommonSearch"
import ApartmentsTable from "./ApartmentsTable"
import ApartmentCardsContainer from "./ApartmentCardsContainer"

const ApartmentsList = ({ data, loading = false }) => {
  return (
    <>
      <CommonSearch />

      {/* Cards for small screens */}
      <div className="block md:hidden">
        <ApartmentCardsContainer
          data={data}
          loading={loading}
          actionKey="id"
          itemsPerPage={10}
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
