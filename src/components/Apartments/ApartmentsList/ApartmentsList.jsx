import CommonSearch from "@/components/shared/CommonSearch/CommonSearch"
import ApartmentsTable from "./ApartmentsTable"
import ApartmentCardsContainer from "./ApartmentCardsContainer"
import useApartmentStore from "@/dummyDataStore/useApartmentStore"
import ListSkeleton from "@/components/skeletons/ListSkeleton"

const ApartmentsList = ({ loading = false }) => {
  const { apartmentRecords } = useApartmentStore()

  if (loading) return <ListSkeleton cardRows={4} cardsCount={3} tableColumns={7} tableRows={5} />


  return (
    <>
      <CommonSearch />

      {/* Cards for small screens */}
      <div className="block md:hidden">
        <ApartmentCardsContainer
          data={apartmentRecords}
          actionKey="id"
          itemsPerPage={10}
          emptyMessage="No apartments found."
        />
      </div>

      {/* Table for medium+ screens */}
      <div className="hidden md:block">
        <ApartmentsTable data={apartmentRecords} />
      </div>
    </>
  )
}

export default ApartmentsList
