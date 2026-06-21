import { Skeleton } from "@/components/ui/skeleton"

const TableSkeleton = ({ columns = 7, rows = 5 }) => {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-muted border-b border-border">
              {Array.from({ length: columns }).map((_, idx) => (
                <th
                  key={idx}
                  className="px-6 py-4 text-xs font-semibold text-dark-gray uppercase tracking-wider"
                >
                  <Skeleton className="h-3 w-16 rounded" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, idx) => (
              <tr key={idx} className="border-b border-border">
                {Array.from({ length: columns }).map((__, colIdx) => (
                  <td key={colIdx} className="px-6 py-4">
                    <Skeleton className="h-4 w-3/4 rounded" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableSkeleton
