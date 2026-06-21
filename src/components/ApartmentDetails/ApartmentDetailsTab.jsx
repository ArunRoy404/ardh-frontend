import { IncomeIcon } from "@/components/SvgIcons/IncomeIcon"
import { ExpensesIcon } from "@/components/SvgIcons/ExpensesIcon"
import { MaintenanceIcon } from "@/components/SvgIcons/MaintenanceIcon"
import CommonTab from "@/components/shared/CommonTab/CommonTab"
import IncomeList from "@/components/Income/IncomeList/IncomeList"
import ExpensesList from "@/components/Expenses/ExpensesList/ExpensesList"
import MaintenanceList from "@/components/Maintenance/MaintenanceList/MaintenanceList"
import useIncomeStore from "@/dummyDataStore/useIncomeStore"
import useExpenseStore from "@/dummyDataStore/useExpenseStore"
import useMaintenanceStore from "@/dummyDataStore/useMaintenanceStore"

const ApartmentDetailsTab = () => {
  const { incomeRecords } = useIncomeStore()
  const { expenseRecords } = useExpenseStore()
  const { maintenanceRecords } = useMaintenanceStore()

  const tabs = [
    {
      value: "income",
      label: "Income",
      icon: <IncomeIcon className="w-4 h-4" />,
      count: incomeRecords.length,
      content: <IncomeList />,
    },
    {
      value: "expenses",
      label: "Expenses",
      icon: <ExpensesIcon className="w-4 h-4" />,
      count: expenseRecords.length,
      content: <ExpensesList />,
    },
    {
      value: "maintenance",
      label: "Maintenance",
      icon: <MaintenanceIcon className="w-4 h-4" />,
      count: maintenanceRecords.length,
      content: <MaintenanceList />,
    },
  ]

  return (
    <CommonTab
      tabs={tabs}
      defaultValue="income"
    />
  )
}

export default ApartmentDetailsTab
