import React from "react"
import DetailCard from "@/components/shared/DetailCard/DetailCard"

const ApartmentIncomeExpected = ({ details }) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-bold text-primary font-serif">
        Expected vs Actual Income
      </h3>
      <DetailCard className="flex flex-wrap items-center gap-x-12 gap-y-3 text-sm py-4">
        <div>
          <span className="text-dark-gray font-normal">Expected Rent : </span>
          <span className="text-dark-accent font-semibold">{details.expectedRent}</span>
        </div>
        <div>
          <span className="text-dark-gray font-normal">Expected Maintenance : </span>
          <span className="text-dark-accent font-semibold">{details.expectedMaintenance}</span>
        </div>
        <div>
          <span className="text-dark-gray font-normal">Expected Water : </span>
          <span className="text-dark-accent font-semibold">{details.expectedWater}</span>
        </div>
        <div>
          <span className="text-dark-gray font-normal">Difference : </span>
          <span className="text-red-600 font-semibold">{details.difference}</span>
        </div>
      </DetailCard>
    </div>
  )
}

export default ApartmentIncomeExpected
