import { ChevronLeft, ChevronRight } from "lucide-react"

const TablePagination = ({
  currentPage,
  totalItems,
  itemsPerPage = 10,
  onPageChange,
}) => {
  if (!totalItems || totalItems === 0) return null

  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const showingStart = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1
  const showingEnd = Math.min(currentPage * itemsPerPage, totalItems)

  if (totalPages <= 1) {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-4 border-t border-[#E2E8F0] bg-white">
        <span className="text-dark-gray font-normal text-xs font-['Poppins']">
          Showing {showingStart} to {showingEnd} of {totalItems} results
        </span>
      </div>
    )
  }

  // Generate visible page numbers
  const getVisiblePages = () => {
    const pages = []
    const maxVisible = 5

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)

      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      if (currentPage <= 2) {
        end = Math.min(4, totalPages - 1)
      }
      if (currentPage >= totalPages - 1) {
        start = Math.max(totalPages - 3, 2)
      }

      if (start > 2) pages.push("...")
      for (let i = start; i <= end; i++) pages.push(i)
      if (end < totalPages - 1) pages.push("...")

      pages.push(totalPages)
    }

    return pages
  }

  const visiblePages = getVisiblePages()

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-4 border-t border-[#E2E8F0] bg-white">
      <span className="text-dark-gray font-normal text-xs font-['Poppins']">
        Showing {showingStart} to {showingEnd} of {totalItems} results
      </span>
      <div className="flex items-center gap-2 self-end sm:self-auto">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 cursor-pointer disabled:opacity-40 disabled:hover:bg-white disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {visiblePages.map((page, idx) =>
          page === "..." ? (
            <span key={`ellipsis-${idx}`} className="text-slate-400 text-xs px-1">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg font-semibold text-xs transition-colors cursor-pointer ${
                currentPage === page
                  ? "bg-[#1E3A5F] text-white"
                  : "border border-slate-200 text-slate-500 hover:bg-slate-50"
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 cursor-pointer disabled:opacity-40 disabled:hover:bg-white disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default TablePagination
