import CommonDetailCard from "@/components/shared/DetailCard/CommonDetailCard"
import CommonDetailLabel from "@/components/shared/DetailCard/CommonDetailLabel"

const IncomeDetailsInfo = ({ details }) => {
  return (
    <CommonDetailCard title="Income Detail Information" cardClassName="text-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
        {/* Column 1 */}
        <div className="space-y-4">
          <CommonDetailLabel label="Type" value={details.type} />
          <CommonDetailLabel label="Tenant Name" value={details.tenantName} />
          <CommonDetailLabel label="Apartment" value={details.apartment} />
          <CommonDetailLabel label="Payment Date" value={details.paymentDate} />
          <CommonDetailLabel label="Reference" value={details.reference} />
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <CommonDetailLabel label="Amount" value={details.amount} />
          <CommonDetailLabel label="Building" value={details.building} />
          <CommonDetailLabel label="Period" value={details.period} />
          <CommonDetailLabel label="Method" value={details.method} />
          <CommonDetailLabel
            label="Status"
            value={details.status}
            render={(status) => (
              <span className="bg-success-tag-bg text-success-tag-text border border-success-tag-border px-3 py-0.5 rounded-[6px] text-xs font-semibold inline-block">
                {status}
              </span>
            )}
          />
        </div>
      </div>
    </CommonDetailCard>
  )
}

export default IncomeDetailsInfo
