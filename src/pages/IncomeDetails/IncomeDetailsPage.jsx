import { Pencil, Download } from "lucide-react"
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader"
import { Button } from "@/components/ui/button"
import IncomeDetailsInfo from "@/components/IncomeDetails/IncomeDetailsInfo"
import useIncomeDetailsStore from "@/dummyDataStore/useIncomeDetailsStore"

const IncomeDetailsPage = () => {
  const { incomeDetails } = useIncomeDetailsStore()

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      {/* Header Block with Breadcrumbs */}
      <DashboardHeader
        title="Income"
        showBreadcrumb
      >
        <div className="flex items-center gap-3">
          <Button variant="outline" isNotImplemented>
            <Pencil className="w-4 h-4" />
            Edit
          </Button>
          <Button className="flex items-center gap-2" isNotImplemented>
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </DashboardHeader>

      {/* Income Details Block */}
      <IncomeDetailsInfo details={incomeDetails} />
    </div>
  )
}

export default IncomeDetailsPage
