import { useState, useRef, useEffect, useMemo } from "react"
import { MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import TablePagination from "@/components/shared/CommonTable/TablePagination"

const ApartmentCardsContainer = ({
  data = [],
  loading = false,
  actions = [],
  actionKey = "id",
  itemsPerPage = 10,
  emptyMessage = "No apartments found.",
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeDropdownId, setActiveDropdownId] = useState(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdownId(null)
      }
    }
    window.addEventListener("click", handleOutsideClick)
    return () => window.removeEventListener("click", handleOutsideClick)
  }, [])

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return data.slice(start, start + itemsPerPage)
  }, [data, currentPage, itemsPerPage])

  const getStatusBadge = (status) => {
    const isOccupied = status === "Occupied"
    return (
      <span
        className={`px-2.5 py-0.5 rounded-[6px] text-xs font-semibold inline-block border ${
          isOccupied
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
                {actions.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-[#E2E8F0] flex justify-end">
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setActiveDropdownId(activeDropdownId === rowId ? null : rowId)
                        }}
                        className="p-1.5 hover:bg-slate-100 rounded-full transition-colors text-slate-500 cursor-pointer"
                      >
                        <MoreHorizontal className="w-5 h-5" />
                      </button>

                      {activeDropdownId === rowId && (
                        <div
                          ref={dropdownRef}
                          className="absolute right-0 top-10 z-50 w-36 bg-white border border-[#E2E8F0] rounded-xl shadow-lg p-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {actions.map((action, actIdx) => (
                            <button
                              key={actIdx}
                              onClick={(e) => {
                                e.stopPropagation()
                                action.onClick?.(row)
                                setActiveDropdownId(null)
                              }}
                              className={cn(
                                "w-full text-left px-3 py-2 text-xs rounded-lg flex items-center gap-2 transition-colors",
                                action.className || "text-dark-accent hover:bg-slate-50"
                              )}
                            >
                              {action.icon}
                              {action.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
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
