import { Skeleton } from "@/components/ui/skeleton"

const CardSkeleton = ({ rows = 4, hasMiddleContent = false }) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-4 shadow-sm">
      {/* Header row: title + status */}
      <div className="flex items-center justify-between mb-3">
        <Skeleton className="h-5 w-24 rounded" />
        <Skeleton className="h-5 w-16 rounded-[6px]" />
      </div>

      {/* Optional middle content (issue/amount paragraph) */}
      {hasMiddleContent && (
        <Skeleton className="h-5 w-3/4 rounded mb-3" />
      )}

      {/* Detail rows: label + value */}
      <div className="space-y-2 text-sm">
        {Array.from({ length: rows }).map((_, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <Skeleton className="h-4 w-16 rounded" />
            <Skeleton className="h-4 w-24 rounded" />
          </div>
        ))}
      </div>

      {/* Actions area */}
      <Skeleton className="h-8 w-8 rounded-md mt-3" />
    </div>
  )
}

export default CardSkeleton
