import CommonSearch from "@/components/shared/CommonSearch/CommonSearch"
import TenantTable from "./TenantTable"
import TenantCardsContainer from "./TenantCardsContainer"
import useTenantStore from "@/dummyDataStore/useTenantStore"
import ListSkeleton from "@/components/skeletons/ListSkeleton"

const TenantsList = ({ loading = false }) => {
  const { tenantRecords } = useTenantStore()

  if (loading) return <ListSkeleton cardRows={4} hasMiddleContent={true} cardsCount={3} tableColumns={8} tableRows={5} />

  return (
    <>
      <CommonSearch />

      {/* Cards for small screens */}
      <div className="block md:hidden">
        <TenantCardsContainer
          data={tenantRecords}
          actionKey="id"
          itemsPerPage={10}
          emptyMessage="No tenants found."
        />
      </div>

      {/* Table for medium+ screens */}
      <div className="hidden md:block">
        <TenantTable data={tenantRecords} />
      </div>
    </>
  )
}

export default TenantsList
