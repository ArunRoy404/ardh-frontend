import CommonDetailCard from "@/components/shared/DetailCard/CommonDetailCard"
import CommonDetailLabel from "@/components/shared/DetailCard/CommonDetailLabel"

const ApartmentDetailsInfo = ({ details }) => {
  return (
    <CommonDetailCard title="Apartment Details" cardClassName="text-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8">
        {/* Column 1 */}
        <div className="space-y-4">
          <CommonDetailLabel label="Type" value={details.type} />
          <CommonDetailLabel label="Bedrooms" value={details.bedrooms} />
          <CommonDetailLabel label="Parking" value={details.parking} />
        </div>
        {/* Column 2 */}
        <div className="space-y-4">
          <CommonDetailLabel label="Floor" value={details.floor} />
          <CommonDetailLabel label="Bathrooms" value={details.bathrooms} />
          <CommonDetailLabel label="Owner" value={details.owner} />
        </div>
        {/* Column 3 */}
        <div className="space-y-4">
          <CommonDetailLabel label="Area" value={details.area} />
          <CommonDetailLabel label="Balcony" value={details.balcony} />
          <CommonDetailLabel label="Nestaway ID" value={details.nestawayId} />
        </div>
      </div>
    </CommonDetailCard>
  )
}

export default ApartmentDetailsInfo
