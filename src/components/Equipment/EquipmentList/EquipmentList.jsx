import CommonSearch from "@/components/shared/CommonSearch/CommonSearch"
import EquipmentTable from "./EquipmentTable"
import EquipmentCardsContainer from "./EquipmentCardsContainer"
import useEquipmentStore from "@/dummyDataStore/useEquipmentStore"
import ListSkeleton from "@/components/skeletons/ListSkeleton"

const EquipmentList = ({ loading = false }) => {
  const { equipmentRecords } = useEquipmentStore()

  if (loading) return <ListSkeleton cardRows={4} hasMiddleContent={true} cardsCount={3} tableColumns={8} tableRows={5} />

  return (
    <>
      <CommonSearch />

      {/* Cards for small screens */}
      <div className="block md:hidden">
        <EquipmentCardsContainer
          data={equipmentRecords}
          actionKey="id"
          itemsPerPage={10}
          emptyMessage="No equipment found."
        />
      </div>

      {/* Table for medium+ screens */}
      <div className="hidden md:block">
        <EquipmentTable data={equipmentRecords} />
      </div>
    </>
  )
}

export default EquipmentList
