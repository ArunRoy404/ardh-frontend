import { useState, useMemo, useEffect, useRef } from "react"
import { Search, ChevronDown, MoreHorizontal } from "lucide-react"
import { FormProvider, useForm } from "react-hook-form"
import { cn } from "@/lib/utils"
import { PanelRightIcon } from "@/components/SvgIcons/PanelRightIcon"
import CommonInput from "@/components/shared/Form/FormInput/CommonInput"
import TablePagination from "./TablePagination"

/**
 * CommonTable - A reusable table component with pagination, search, and action dropdowns.
 *
 * @param {Array} columns - Column definitions [{key, label, render, className, sortable}]
 * @param {Array} data - Row data array
 * @param {number} itemsPerPage - Number of rows per page (default: 10)
 * @param {boolean} searchable - Show search input (default: false)
 * @param {string} searchPlaceholder - Search placeholder text
 * @param {string} emptyMessage - Message when no data
 * @param {string} emptyIcon - Custom icon component for empty state
 * @param {Function} onRowClick - Row click handler
 * @param {string} className - Additional wrapper class
 * @param {boolean} loading - Loading state
 * @param {Array} actions - Action menu items [{label, icon, onClick, className, variant}]
 * @param {string} actionKey - Key from row data to use as action identifier
 */
const CommonTable = ({
  columns = [],
  data = [],
  itemsPerPage = 10,
  searchable = false,
  searchPlaceholder = "Search .....",
  emptyMessage = "No data found.",
  emptyIcon: EmptyIcon = PanelRightIcon,
  onRowClick,
  className,
  loading = false,
  actions = [],
  actionKey = "id",
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeDropdownId, setActiveDropdownId] = useState(null)
  const dropdownRef = useRef(null)
  const searchForm = useForm({ defaultValues: { search: "" } })

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdownId(null)
      }
    }
    window.addEventListener("click", handleOutsideClick)
    return () => window.removeEventListener("click", handleOutsideClick)
  }, [])

  // Paginate data
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return data.slice(start, start + itemsPerPage)
  }, [data, currentPage, itemsPerPage])

  const handleDropdownToggle = (e, id) => {
    e.stopPropagation()
    setActiveDropdownId(activeDropdownId === id ? null : id)
  }

  const getCellValue = (row, col) => {
    if (col.render) return col.render(row)
    return row[col.key]
  }

  // Loading skeleton
  if (loading) {
    return (
      <div className={cn("bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm", className)}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="px-6 py-4 text-xs font-semibold text-dark-gray uppercase tracking-wider"
                  >
                    {col.label}
                  </th>
                ))}
                {actions.length > 0 && (
                  <th className="px-6 py-4 text-xs font-semibold text-dark-gray uppercase tracking-wider w-16">
                    Action
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, idx) => (
                <tr key={idx} className="border-b border-[#E2E8F0]">
                  {columns.map((col) => (
                    <td key={col.key} className="px-6 py-4">
                      <div className="h-4 bg-slate-100 rounded animate-pulse w-3/4" />
                    </td>
                  ))}
                  {actions.length > 0 && (
                    <td className="px-6 py-4">
                      <div className="h-4 w-5 bg-slate-100 rounded animate-pulse" />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("", className)}>
      {/* Search Bar */}
      {searchable && (
        <div className="w-full max-w-xs my-4">
          <FormProvider {...searchForm}>
            <CommonInput
              name="search"
              icon={Search}
              placeholder={searchPlaceholder}
            />
          </FormProvider>
        </div>
      )}

      {/* Table */}
      <div className="">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    "px-6 py-4 text-xs font-semibold text-dark-gray uppercase tracking-wider",
                    col.className
                  )}
                >
                  <div className="flex items-center gap-1.5">
                    {col.label}
                    {col.sortable && <ChevronDown className="w-3 h-3 text-dark-gray" />}
                  </div>
                </th>
              ))}
              {actions.length > 0 && (
                <th className="px-6 py-4 text-xs font-semibold text-dark-gray uppercase tracking-wider w-16">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, rowIdx) => {
                const rowId = row[actionKey] ?? rowIdx
                return (
                  <tr
                    key={rowId}
                    className={cn(
                      "border-b border-[#E2E8F0] transition-colors",
                      onRowClick ? "hover:bg-slate-50/50 cursor-pointer" : "hover:bg-slate-50/50"
                    )}
                    onClick={() => onRowClick?.(row)}
                  >
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className={cn("px-6 py-4 text-sm", col.className)}
                      >
                        {getCellValue(row, col)}
                      </td>
                    ))}
                    {actions.length > 0 && (
                      <td className="px-6 py-4 text-sm relative" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={(e) => handleDropdownToggle(e, rowId)}
                          className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-500 cursor-pointer"
                        >
                          <MoreHorizontal className="w-5 h-5" />
                        </button>

                        {/* Dropdown Menu */}
                        {activeDropdownId === rowId && (
                          <div
                            ref={dropdownRef}
                            className="absolute right-6 top-12 z-50 w-36 bg-white border border-[#E2E8F0] rounded-xl shadow-lg p-1 animate-in fade-in-50 slide-in-from-top-1"
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
                      </td>
                    )}
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan={columns.length + (actions.length > 0 ? 1 : 0)}>
                  {/* Empty State */}
                  <div className="flex flex-col items-center justify-center py-16 px-6">
                    <EmptyIcon className="w-16 h-16 text-slate-200 mb-4" />
                    <p className="text-sm text-dark-gray font-medium">{emptyMessage}</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
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

export default CommonTable
