import CommonSearch from "@/components/shared/CommonSearch/CommonSearch"
import ExpenseTable from "./ExpenseTable"
import ExpenseCardsContainer from "./ExpenseCardsContainer"
import useExpenseStore from "@/dummyDataStore/useExpenseStore"
import ListSkeleton from "@/components/skeletons/ListSkeleton"

const ExpensesList = ({ loading = false }) => {
  const { expenseRecords } = useExpenseStore()

  if (loading) return <ListSkeleton cardRows={4} hasMiddleContent={true} cardsCount={3} tableColumns={8} tableRows={5} />

  return (
    <>
      <CommonSearch />

      {/* Cards for small screens */}
      <div className="block md:hidden">
        <ExpenseCardsContainer
          data={expenseRecords}
          actionKey="id"
          itemsPerPage={10}
          emptyMessage="No expense records found."
        />
      </div>

      {/* Table for medium+ screens */}
      <div className="hidden md:block">
        <ExpenseTable data={expenseRecords} />
      </div>
    </>
  )
}

export default ExpensesList
