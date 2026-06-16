import DetailCard from "@/components/shared/DetailCard/DetailCard"

const BuldingDetailsInfo = ({ details = [] }) => {
  if (!details || details.length === 0) return null

  return (
    <DetailCard className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4'>
      {details.map((item, idx) => (
        <div key={idx} className={item.className || "flex items-center gap-2"}>
          <span className="text-dark-gray font-normal min-w-[100px]">{item.label} :</span>
          {item.render ? (
            item.render(item.value)
          ) : (
            <span className={item.valueClassName || "text-dark-accent font-semibold"}>
              {item.value}
            </span>
          )}
        </div>
      ))}
    </DetailCard>
  )
}

export default BuldingDetailsInfo
