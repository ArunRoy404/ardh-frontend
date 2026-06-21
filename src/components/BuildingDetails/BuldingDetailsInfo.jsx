import CommonDetailCard from "@/components/shared/DetailCard/CommonDetailCard"
import CommonDetailLabel from "@/components/shared/DetailCard/CommonDetailLabel"

const BuldingDetailsInfo = ({ details = [] }) => {
  if (!details || details.length === 0) return null

  return (
    <CommonDetailCard>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {details.map((item, idx) => (
          <CommonDetailLabel
            key={idx}
            label={item.label}
            value={item.value}
            render={item.render}
            valueClassName={item.valueClassName}
            className={item.className}
          />
        ))}
      </div>
    </CommonDetailCard>
  )
}

export default BuldingDetailsInfo
