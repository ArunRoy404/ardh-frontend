import { useState, useMemo } from "react"
import UserAction from "./UserAction/UserAction"
import { getStatusBadge } from "@/dummyData/userRecords"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import TablePagination from "@/components/shared/CommonTable/TablePagination"

const UserCardsContainer = ({
  data = [],
  actionKey = "id",
  itemsPerPage = 10,
  emptyMessage = "No users found.",
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
                {/* Header row: Avatar + Name + Status */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Avatar className="size-8">
                      <AvatarImage src={row.avatar} alt={row.name} />
                      <AvatarFallback>{row.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-primary font-semibold text-sm">
                      {row.name}
                    </span>
                  </div>
                  {renderStatusBadge(row.status)}
                </div>

                {/* Role */}
                <p className="text-dark-accent font-semibold text-lg mb-3">
                  {row.role}
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
                <UserAction user={row} />
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

export default UserCardsContainer
