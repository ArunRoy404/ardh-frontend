import { useState, useMemo } from "react"
import ApartmentAction from "@/components/Apartments/AppartmentAction/AppartmentAction"
import TablePagination from "@/components/shared/CommonTable/TablePagination"

const ApartmentCardsContainer = ({
  data = [],
  loading = false,
  actionKey = "id",
  itemsPerPage = 10,
  emptyMessage = "No apartments found.",
}) => {
  const [currentPage, setCurrentPage] = useState(1)

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return data.slice(start, start + itemsPerPage)
  }, [data, currentPage, itemsPerPage])

  const getStatusBadge = (status) => {
    const isOccupied = status === "Occupied"
    return (
      <span
        className={`px-2.5 py-0.5 rounded-[6px] text-xs font-semibold inline-block border ${isOccupied
            ? "bg-success-tag-bg text-success-tag-text border-success-tag-border"
            : "bg-progress-tag-bg text-progress-tag-text border-progress-tag-border"
          }`}
      >
        {status}
      </span>
    )
  }

  if (loading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="bg-white border border-[#E2E8F0] rounded-2xl p-4 shadow-sm space-y-3">
            <div className="flex justify-between">
              <div className="h-5 bg-slate-100 rounded animate-pulse w-24" />
              <div className="h-5 bg-slate-100 rounded animate-pulse w-16" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-slate-100 rounded animate-pulse w-full" />
              <div className="h-4 bg-slate-100 rounded animate-pulse w-3/4" />
              <div className="h-4 bg-slate-100 rounded animate-pulse w-1/2" />
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
                className="bg-white border border-[#E2E8F0] rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header row: Flat + Status */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-dark-accent font-medium text-sm">
                    Flat {row.flat}
                  </span>
                  {getStatusBadge(row.status)}
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Type</span>
                    <span className="text-dark-accent">{row.type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Floor</span>
                    <span className="text-dark-gray">{row.floor}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Tenant</span>
                    <span className="text-dark-accent">{row.tenant}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Rent</span>
                    <span className="text-dark-accent font-medium">{row.rent}</span>
                  </div>
                </div>

                {/* Actions dropdown */}
                <ApartmentAction apartment={row} />
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

export default ApartmentCardsContainer
