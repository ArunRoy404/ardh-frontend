import { useState, useMemo } from "react"
import { equipmentColumns } from "@/components/DataTableColumns/equipmentColumns"
import DataTable from "@/components/DataTable/DataTable"
import TablePagination from "@/components/shared/CommonTable/TablePagination"

const EquipmentTable = ({ data = [] }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * 10
    return data.slice(start, start + 10)
  }, [data, currentPage])

  return (
    <div>
      <DataTable columns={equipmentColumns} data={paginatedData} />

      <TablePagination
        currentPage={currentPage}
        totalItems={data.length}
        itemsPerPage={10}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default EquipmentTable
