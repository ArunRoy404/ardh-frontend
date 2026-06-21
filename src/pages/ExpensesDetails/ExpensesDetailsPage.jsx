import { Pencil } from "lucide-react"
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader"
import { Button } from "@/components/ui/button"
import ExpensesDetailsInfo from "@/components/ExpensesDetails/ExpensesDetailsInfo"
import useExpenseDetailsStore from "@/dummyDataStore/useExpenseDetailsStore"

const ExpensesDetailsPage = () => {
  const { expenseDetails } = useExpenseDetailsStore()

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      {/* Header Block with Breadcrumbs */}
      <DashboardHeader
        title="Expenses"
        showBreadcrumb
      >
        <div className="flex items-center gap-3">
          <Button variant="outline" isNotImplemented>
            <Pencil className="w-4 h-4" />
            Edit
          </Button>
        </div>
      </DashboardHeader>

      {/* Expenses Details Block */}
      <ExpensesDetailsInfo details={expenseDetails} />
    </div>
  )
}

export default ExpensesDetailsPage
