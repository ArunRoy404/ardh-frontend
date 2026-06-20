import { useState, useMemo } from "react"
import { maintenanceColumns } from "@/components/DataTableColumns/maintenanceColumns"
import DataTable from "@/components/DataTable/DataTable"
import TablePagination from "@/components/shared/CommonTable/TablePagination"

const MaintenanceTable = ({ data = [], loading = false }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * 10
    return data.slice(start, start + 10)
  }, [data, currentPage])

  if (loading) {
    return (
      <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                {["Ticket ID", "Issue", "Flat", "Category", "Tenant", "Status", "Action"].map((col) => (
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
                <tr key={idx} className="border-b border-[#E2E8F0]">
                  {Array.from({ length: 7 }).map((__, colIdx) => (
                    <td key={colIdx} className="px-6 py-4">
                      <div className="h-4 bg-slate-100 rounded animate-pulse w-3/4" />
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
      <DataTable columns={maintenanceColumns} data={paginatedData} />


      <TablePagination
        currentPage={currentPage}
        totalItems={data.length}
        itemsPerPage={10}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default MaintenanceTable
