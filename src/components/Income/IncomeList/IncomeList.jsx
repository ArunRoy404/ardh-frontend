import CommonSearch from "@/components/shared/CommonSearch/CommonSearch"
import IncomeTable from "./IncomeTable"
import IncomeCardsContainer from "./IncomeCardsContainer"
import useIncomeStore from "@/dummyDataStore/useIncomeStore"

const IncomeList = () => {
  const { incomeRecords } = useIncomeStore()

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
