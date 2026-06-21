import { useState, useMemo } from "react"
import TenantAction from "./TenantAction/TenantAction"
import { getStatusBadge } from "@/dummyData/tenantRecords"
import TablePagination from "@/components/shared/CommonTable/TablePagination"

const TenantCardsContainer = ({
  data = [],
  actionKey = "id",
  itemsPerPage = 10,
  emptyMessage = "No tenants found.",
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

                {/* Rent Amount */}
                <p className="text-dark-accent font-semibold text-lg mb-3">
                  {row.rent}
                </p>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Phone</span>
                    <span className="text-dark-accent">{row.phone}</span>
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
                    <span className="text-dark-gray text-xs font-semibold uppercase tracking-wider">Move In</span>
                    <span className="text-dark-gray">{row.moveIn}</span>
                  </div>
                </div>

                {/* Actions dropdown */}
                <TenantAction tenant={row} />
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

export default TenantCardsContainer
