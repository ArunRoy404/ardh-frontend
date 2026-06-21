import React from "react"
import DetailCard from "@/components/shared/DetailCard/DetailCard"

const ApartmentDetailsInfo = ({ details }) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-bold text-primary font-serif">
        Apartment Details
      </h3>
      <DetailCard className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8 text-sm">
        {/* Column 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-dark-gray font-normal min-w-[100px]">Type :</span>
            <span className="text-dark-accent font-semibold">{details.type}</span>
          </div>  
          <div className="flex items-center gap-2">
            <span className="text-dark-gray font-normal min-w-[100px]">Bedrooms :</span>
            <span className="text-dark-accent font-semibold">{details.bedrooms}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-dark-gray font-normal min-w-[100px]">Parking :</span>
            <span className="text-dark-accent font-semibold">{details.parking}</span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-dark-gray font-normal min-w-[100px]">Floor :</span>
            <span className="text-dark-accent font-semibold">{details.floor}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-dark-gray font-normal min-w-[100px]">Bathrooms :</span>
            <span className="text-dark-accent font-semibold">{details.bathrooms}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-dark-gray font-normal min-w-[100px]">Owner :</span>
            <span className="text-dark-accent font-semibold">{details.owner}</span>
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-dark-gray font-normal min-w-[100px]">Area :</span>
            <span className="text-dark-accent font-semibold">{details.area}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-dark-gray font-normal min-w-[100px]">Balcony :</span>
            <span className="text-dark-accent font-semibold">{details.balcony}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-dark-gray font-normal min-w-[100px]">Nestaway ID :</span>
            <span className="text-dark-accent font-semibold">{details.nestawayId}</span>
          </div>
        </div>
      </DetailCard>
    </div>
  )
}

export default ApartmentDetailsInfo
