const ApartmentDetailsStat = ({ details }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Occupancy Card */}
      <div className="bg-stat-bg p-6 rounded-md flex items-center justify-between border border-border">
        <div className="flex flex-col gap-2">
          <span
            className="text-base text-dark-gray font-normal"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Occupancy
          </span>
          <span className="bg-success-tag-bg text-success-tag-text border border-success-tag-border px-3 py-0.5 rounded-[6px] text-xs font-semibold inline-block">
            {details.occupancyStatus}
          </span>
        </div>
      </div>

      {/* Monthly Rent Card */}
      <div className="bg-stat-bg p-6 rounded-md flex flex-col justify-center border border-border gap-2">
        <span
          className="text-base text-dark-gray font-normal"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Monthly Rent
        </span>
        <span className="text-2xl font-semibold text-dark-accent">
          {details.monthlyRent}
        </span>
      </div>

      {/* Maintenance Card */}
      <div className="bg-stat-bg p-6 rounded-md flex flex-col justify-center border border-border gap-2">
        <span
          className="text-base text-dark-gray font-normal"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Maintenance
        </span>
        <span className="text-2xl font-semibold text-dark-accent">
          {details.maintenance}
        </span>
      </div> 

      {/* Tenant Card */}
      <div className="bg-stat-bg p-6 rounded-md flex flex-col justify-center border border-border gap-2">
        <span
          className="text-base text-dark-gray font-normal"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Tenant
        </span>
        <span className="text-2xl font-semibold text-dark-accent">
          {details.tenant}
        </span>
      </div>
    </div>
  )
}

export default ApartmentDetailsStat
