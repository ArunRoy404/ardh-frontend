import CommonDetailCard from "@/components/shared/DetailCard/CommonDetailCard"
import CommonDetailLabel from "@/components/shared/DetailCard/CommonDetailLabel"

const ApartmentIncomeExpected = ({ details }) => {
  return (
    <CommonDetailCard title="Expected vs Actual Income">
      <div className="flex flex-wrap items-center gap-x-12 gap-y-3 text-sm py-4">
        <CommonDetailLabel label="Expected Rent" value={details.expectedRent} />
        <CommonDetailLabel label="Expected Maintenance" value={details.expectedMaintenance} />
        <CommonDetailLabel label="Expected Water" value={details.expectedWater} />
        <CommonDetailLabel
          label="Difference"
          value={details.difference}
          valueClassName="text-red-600 font-semibold"
        />
      </div>
    </CommonDetailCard>
  )
}

export default ApartmentIncomeExpected
