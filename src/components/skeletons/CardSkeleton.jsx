import { Skeleton } from "@/components/ui/skeleton"

const CardSkeleton = ({ rows = 4, showStatus = true }) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-4 shadow-sm space-y-3">
      {/* Header row */}
      <div className="flex justify-between items-center">
        <Skeleton className="h-5 w-24 rounded" />
        {showStatus && <Skeleton className="h-5 w-16 rounded" />}
      </div>

      {/* Detail rows */}
      <div className="space-y-2">
        {Array.from({ length: rows }).map((_, idx) => (
          <Skeleton
            key={idx}
            className="h-4 rounded"
            style={{ width: `${[100, 75, 66, 50][idx % 4]}%` }}
          />
        ))}
      </div>
    </div>
  )
}

export default CardSkeleton
