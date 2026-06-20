import { useState, useMemo, useEffect } from "react"
import { Search } from "lucide-react"
import { FormProvider, useForm } from "react-hook-form"
import { maintenanceColumns } from "@/components/DataTableColumns/maintenanceColumns"
import DataTable from "@/components/DataTable/DataTable"
import CommonInput from "@/components/shared/Form/FormInput/CommonInput"
import TablePagination from "@/components/shared/CommonTable/TablePagination"

// Re-export for use by MaintenanceCardsContainer
export { actionItems } from "@/components/DataTableColumns/maintenanceColumns"

const MaintenanceTable = ({ data = [], loading = false }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const searchForm = useForm({ defaultValues: { search: "" } })
  const searchValue = searchForm.watch("search")

  const filteredData = useMemo(() => {
    if (!searchValue) return data

    const query = searchValue.toLowerCase()
    return data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(query)
      )
    )
  }, [data, searchValue])

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * 10
    return filteredData.slice(start, start + 10)
  }, [filteredData, currentPage])

  // Reset to page 1 when filter changes
  useEffect(() => {
    if (currentPage !== 1) setCurrentPage(1)
  }, [searchValue, currentPage])

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
      {/* Search */}
      <div className="w-full max-w-xs mb-4">
        <FormProvider {...searchForm}>
          <CommonInput name="search" icon={Search} placeholder="Search ....." />
        </FormProvider>
      </div>

      {/* Table */}
      <DataTable columns={maintenanceColumns} data={paginatedData} />

      {/* Pagination */}
      <TablePagination
        currentPage={currentPage}
        totalItems={filteredData.length}
        itemsPerPage={10}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default MaintenanceTable
