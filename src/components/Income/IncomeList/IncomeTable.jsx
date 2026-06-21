import { useState, useMemo } from "react"
import { incomeColumns } from "@/components/DataTableColumns/incomeColumns"
import DataTable from "@/components/DataTable/DataTable"
import TablePagination from "@/components/shared/CommonTable/TablePagination"

const IncomeTable = ({ data = [], loading = false }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * 10
    return data.slice(start, start + 10)
  }, [data, currentPage])

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-muted border-b border-border">
                {["Type", "Amount", "Tenant", "Building", "Date", "Method", "Status", "Action"].map((col) => (
                  <th
                    key={col}
                    className="px-6 py-4 text-xs font-semibold text-dark-gray uppercase tracking-wider"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, idx) => (
                <tr key={idx} className="border-b border-border">
                  {Array.from({ length: 8 }).map((__, colIdx) => (
                    <td key={colIdx} className="px-6 py-4">
                      <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return (
    <div>
      <DataTable columns={incomeColumns} data={paginatedData} />


      <TablePagination
        currentPage={currentPage}
        totalItems={data.length}
        itemsPerPage={10}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default IncomeTable
