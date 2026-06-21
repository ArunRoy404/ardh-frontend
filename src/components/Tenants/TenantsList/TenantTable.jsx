import { useState, useMemo } from "react"
import { tenantColumns } from "@/components/DataTableColumns/tenantColumns"
import DataTable from "@/components/DataTable/DataTable"
import TablePagination from "@/components/shared/CommonTable/TablePagination"

const TenantTable = ({ data = [] }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * 10
    return data.slice(start, start + 10)
  }, [data, currentPage])

  return (
    <div>
      <DataTable columns={tenantColumns} data={paginatedData} />

      <TablePagination
        currentPage={currentPage}
        totalItems={data.length}
        itemsPerPage={10}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default TenantTable
