import { useState, useMemo } from "react"
import OwnerAction from "./OwnerAction/OwnerAction"
import { getStatusBadge } from "@/dummyData/ownerRecords"
import TablePagination from "@/components/shared/CommonTable/TablePagination"

const OwnerCardsContainer = ({
  data = [],
  actionKey = "id",
  itemsPerPage = 10,
  emptyMessage = "No owners found.",
}) => {
  const [currentPage, setCurrentPage] = useState(1)

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return data.slice(start, start + itemsPerPage)
  }, [data, currentPage, itemsPerPage])

  const renderStatusBadge = (status) => (
    <span className={`px-2.5 py-0.5 rounded-[6px] text-xs font-semibold inline-block border ${getStatusBadge(status)}`}>
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
                {/* Header row: Name + Status */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-primary font-semibold text-sm">
                    {row.name}
                  </span>
                  {renderStatusBadge(row.status)}
                </div>

                {/* Properties count */}
                <p className="text-dark-accent font-semibold text-lg mb-3">
                  {row.properties} {row.properties === 1 ? 'Property' : 'Properties'}
                </p>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Phone</span>
                    <span className="text-dark-accent">{row.phone}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Email</span>
                    <span className="text-dark-gray break-all">{row.email}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">City</span>
                    <span className="text-dark-gray">{row.city}</span>
                  </div>
                </div>

                {/* Actions dropdown */}
                <OwnerAction owner={row} />
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

export default OwnerCardsContainer
