import { useMemo } from "react"
import ReportsList from "@/components/Reports/ReportsList/ReportsList"
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader"
import ReportFilter from "@/components/Reports/ReportFilter/ReportFilter"
import ReportsStats from "@/components/Reports/ReportsStats/ReportsStats"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import useReportStore from "@/dummyDataStore/useReportStore"
import { toast } from "sonner"

const parseAmount = (amtStr) => {
  if (!amtStr) return 0
  const parsed = parseFloat(amtStr.replace(/[^0-9.-]+/g, ""))
  return isNaN(parsed) ? 0 : parsed
}

const formatCurrency = (amount) => {
  const isNegative = amount < 0
  const absVal = Math.abs(amount)
  const formatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(absVal)
  return (isNegative ? "- " : "") + formatted
}

const ReportsPage = () => {
  const { incomeReportRecords, expenseReportRecords } = useReportStore()

  // Computed Stats based on all records
  const stats = useMemo(() => {
    const totalIncomePaid = incomeReportRecords
      .filter((r) => r.status.toLowerCase() === "paid")
      .reduce((sum, r) => sum + parseAmount(r.amount), 0)

    const totalExpensePaid = expenseReportRecords
      .filter((r) => r.status.toLowerCase() === "paid")
      .reduce((sum, r) => sum + parseAmount(r.amount), 0)

    const net = totalIncomePaid - totalExpensePaid

    return [
      {
        title: "Total Income ( Paid )",
        value: formatCurrency(totalIncomePaid),
        valueColor: "text-emerald-600",
      },
      {
        title: "Total Expense ( Paid )",
        value: formatCurrency(totalExpensePaid),
        valueColor: "text-red-600",
      },
      {
        title: "Net",
        value: formatCurrency(net),
        valueColor: net >= 0 ? "text-emerald-600" : "text-red-600",
      },
    ]
  }, [incomeReportRecords, expenseReportRecords])

  const handleExport = () => {
    toast.warning("Export feature not implemented yet!")
  }

  return (
    <>
      {/* Header Block */}
      <DashboardHeader
        title="Reports"
        showBreadcrumb
      />

      <div className="space-y-6 mt-6">
        {/* Filters */}
        <ReportFilter />

        {/* Stats */}
        <ReportsStats stats={stats} />

        {/* Table & Cards Section */}
        <div className="space-y-4">
          {/* Table Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-primary font-serif">
              Income Records ( {incomeReportRecords.length} )
            </h2>
            <Button variant="outline" onClick={handleExport} className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Export
            </Button>
          </div>

          <ReportsList />
        </div>
      </div>
    </>
  )
}

export default ReportsPage
