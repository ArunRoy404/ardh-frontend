import CommonSearch from "@/components/shared/CommonSearch/CommonSearch"
import OwnerTable from "./OwnerTable"
import OwnerCardsContainer from "./OwnerCardsContainer"
import useOwnerStore from "@/dummyDataStore/useOwnerStore"
import ListSkeleton from "@/components/skeletons/ListSkeleton"

const OwnersList = ({ loading = false }) => {
  const { ownerRecords } = useOwnerStore()

  if (loading) return <ListSkeleton cardRows={4} hasMiddleContent={true} cardsCount={3} tableColumns={8} tableRows={5} />

  return (
    <>
      <CommonSearch />

      {/* Cards for small screens */}
      <div className="block md:hidden">
        <OwnerCardsContainer
          data={ownerRecords}
          actionKey="id"
          itemsPerPage={10}
          emptyMessage="No owners found."
        />
      </div>

      {/* Table for medium+ screens */}
      <div className="hidden md:block">
        <OwnerTable data={ownerRecords} />
      </div>
    </>
  )
}

export default OwnersList
