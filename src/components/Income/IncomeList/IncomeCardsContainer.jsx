import { useState, useMemo } from "react"
import IncomeAction from "./IncomeAction/IncomeAction"
import { getStatusBadge } from "@/dummyData/incomeRecords"
import TablePagination from "@/components/shared/CommonTable/TablePagination"

const IncomeCardsContainer = ({
  data = [],
  loading = false,
  actionKey = "id",
  itemsPerPage = 10,
  emptyMessage = "No income records found.",
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

  if (loading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="bg-card border border-border rounded-2xl p-4 shadow-sm space-y-3">
            <div className="flex justify-between">
              <div className="h-5 bg-muted rounded animate-pulse w-24" />
              <div className="h-5 bg-muted rounded animate-pulse w-16" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded animate-pulse w-full" />
              <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
              <div className="h-4 bg-muted rounded animate-pulse w-2/3" />
              <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
            </div>
          </div>
        ))}
      </div>
    )
  }

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
                {/* Header row: Type + Status */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-primary font-semibold text-sm">
                    {row.type}
                  </span>
                  {renderStatusBadge(row.status)}
                </div>

                {/* Amount */}
                <p className="text-dark-accent font-semibold text-lg mb-3">
                  {row.amount}
                </p>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Tenant</span>
                    <span className="text-dark-accent">{row.tenant}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Building</span>
                    <span className="text-dark-gray">{row.building}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Date</span>
                    <span className="text-dark-gray">{row.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Method</span>
                    <span className="text-dark-gray">{row.method}</span>
                  </div>
                </div>

                {/* Actions dropdown */}
                <IncomeAction income={row} />
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

export default IncomeCardsContainer
