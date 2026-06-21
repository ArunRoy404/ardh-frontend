import ReportCardsContainer from "./ReportCardsContainer"
import ReportTable from "./ReportTable"
import { reportIncomeColumns } from "@/components/DataTableColumns/reportColumns"
import useReportStore from "@/dummyDataStore/useReportStore"

const ReportsList = () => {
  const { incomeReportRecords } = useReportStore()

  return (
    <>
      {/* Responsive Mobile Cards */}
      <div className="block md:hidden">
        <ReportCardsContainer
          data={incomeReportRecords}
          actionKey="id"
          itemsPerPage={10}
          emptyMessage="No income records found."
        />
      </div>

      {/* Responsive Desktop Table */}
      <div className="hidden md:block">
        <ReportTable data={incomeReportRecords} columns={reportIncomeColumns} />
      </div>
    </>
  )
}

export default ReportsList
