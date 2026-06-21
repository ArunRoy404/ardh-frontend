import { useState, useMemo } from "react"
import MaintenanceAction from "./MaintenanceAction/MaintenanceAction"
import TablePagination from "@/components/shared/CommonTable/TablePagination"
import { getPriorityBadge, getStatusBadge } from "@/dummyData/maintenanceRecords"

const MaintenanceCardsContainer = ({
  data = [],
  actionKey = "title",
  itemsPerPage = 10,
  emptyMessage = "No maintenance requests found.",
}) => {
  const [currentPage, setCurrentPage] = useState(1)

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return data.slice(start, start + itemsPerPage)
  }, [data, currentPage, itemsPerPage])

  const Badge = ({ className, children }) => (
    <span className={`${className} px-2.5 py-0.5 rounded-[6px] text-xs font-semibold inline-block`}>
      {children}
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
                {/* Title + Status */}
                <div className="flex items-start justify-between mb-3">
                  <span className="text-primary font-semibold text-sm flex-1 mr-2">
                    {row.title}
                  </span>
                  <Badge className={getStatusBadge(row.status)}>
                    {row.status}
                  </Badge>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Category</span>
                    <span className="text-dark-gray">{row.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Building</span>
                    <span className="text-dark-gray">{row.building}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Flat</span>
                    <span className="text-dark-gray">{row.flat}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Priority</span>
                    <Badge className={getPriorityBadge(row.priority)}>
                      {row.priority}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Vendor</span>
                    <span className="text-dark-accent">{row.vendor}</span>
                  </div>
                </div>

                {/* Actions dropdown */}
                <div className="mt-3">
                  <MaintenanceAction maintenance={row} />
                </div>
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
