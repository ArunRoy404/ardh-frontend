import CommonSearch from "@/components/shared/CommonSearch/CommonSearch"
import IncomeTable from "./IncomeTable"
import IncomeCardsContainer from "./IncomeCardsContainer"
import useIncomeStore from "@/dummyDataStore/useIncomeStore"
import ListSkeleton from "@/components/skeletons/ListSkeleton"

const IncomeList = ({ loading = false }) => {
  const { incomeRecords } = useIncomeStore()

  if (loading) return        <ListSkeleton cardRows={4} hasMiddleContent={true} cardsCount={3} tableColumns={8} tableRows={5} />


  return (
    <>
      <CommonSearch />

      {/* Cards for small screens */}
      <div className="block md:hidden">
        <IncomeCardsContainer
          data={incomeRecords}
          actionKey="id"
          itemsPerPage={10}
          emptyMessage="No income records found."
        />
      </div>

      {/* Table for medium+ screens */}
      <div className="hidden md:block">
        <IncomeTable data={incomeRecords} />
      </div>
    </>
  )
}

export default IncomeList
