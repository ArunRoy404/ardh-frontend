import CommonSearch from "@/components/shared/CommonSearch/CommonSearch"
import VendorTable from "./VendorTable"
import VendorCardsContainer from "./VendorCardsContainer"
import useVendorStore from "@/dummyDataStore/useVendorStore"
import ListSkeleton from "@/components/skeletons/ListSkeleton"

const VendorsList = ({ loading = false }) => {
  const { vendorRecords } = useVendorStore()

  if (loading) return <ListSkeleton cardRows={4} hasMiddleContent={true} cardsCount={3} tableColumns={8} tableRows={5} />

  return (
    <>
      <CommonSearch />

      {/* Cards for small screens */}
      <div className="block md:hidden">
        <VendorCardsContainer
          data={vendorRecords}
          actionKey="id"
          itemsPerPage={10}
          emptyMessage="No vendors found."
        />
      </div>

      {/* Table for medium+ screens */}
      <div className="hidden md:block">
        <VendorTable data={vendorRecords} />
      </div>
    </>
  )
}

export default VendorsList
