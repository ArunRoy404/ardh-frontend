import { useState, useMemo } from "react"
import MaintenanceAction from "./MaintenanceAction/MaintenanceAction"
import TablePagination from "@/components/shared/CommonTable/TablePagination"

const MaintenanceCardsContainer = ({
  data = [],
  actionKey = "id",
  itemsPerPage = 10,
  emptyMessage = "No maintenance requests found.",
}) => {
  const [currentPage, setCurrentPage] = useState(1)

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return data.slice(start, start + itemsPerPage)
  }, [data, currentPage, itemsPerPage])

  const getStatusBadge = (status) => (
    <span className="bg-open-tag-bg text-open-tag-text border border-open-tag-border px-2.5 py-0.5 rounded-[6px] text-xs font-semibold inline-block">
      {status}
    </span>
  )

  return (
    <div>
      {/* Cards */}
      <div className="space-y-3">
        {paginatedData.length > 0 ? (
          paginatedData.map((row, rowIdx) => {
            const rowId = row[actionKey] ?? rowIdx
            return (
              <div
                key={rowId}
                className="bg-card border border-border rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header row: Ticket ID + Status */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-primary font-semibold text-sm">
                    {row.ticketId}
                  </span>
                  {getStatusBadge(row.status)}
                </div>

                {/* Issue */}
                <p className="text-dark-accent font-medium text-sm mb-3 line-clamp-2">
                  {row.issue}
                </p>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Category</span>
                    <span className="text-dark-gray">{row.type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Flat</span>
                    <span className="text-dark-gray">{row.flat}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Tenant</span>
                    <span className="text-dark-accent">{row.tenant}</span>
                  </div>
                </div>

                {/* Actions dropdown */}
                <MaintenanceAction maintenance={row} />
              </div>
            )
          })
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-6">
            <p className="text-sm text-dark-gray font-medium">{emptyMessage}</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <TablePagination
        currentPage={currentPage}
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default MaintenanceCardsContainer
