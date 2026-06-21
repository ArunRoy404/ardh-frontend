import CardSkeleton from "./CardSkeleton"
import TableSkeleton from "./TableSkeleton"

const ListSkeleton = ({ cardRows = 4, hasMiddleContent = false, cardsCount = 3, tableColumns = 7, tableRows = 5 }) => {
  return (
    <>
      {/* Cards for small screens */}
      <div className="block md:hidden space-y-3">
        {Array.from({ length: cardsCount }).map((_, idx) => (
          <CardSkeleton key={idx} rows={cardRows} hasMiddleContent={hasMiddleContent} />
        ))}
      </div>

      {/* Table for medium+ screens */}
      <div className="hidden md:block">
        <TableSkeleton columns={tableColumns} rows={tableRows} />
      </div>
    </>
  )
}

export default ListSkeleton
