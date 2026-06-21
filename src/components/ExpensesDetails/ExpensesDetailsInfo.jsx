import CommonDetailCard from "@/components/shared/DetailCard/CommonDetailCard"
import CommonDetailLabel from "@/components/shared/DetailCard/CommonDetailLabel"

const ExpensesDetailsInfo = ({ details }) => {
  return (
    <CommonDetailCard title="Expense Detail Information" cardClassName="text-sm">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <CommonDetailLabel label="Category" value={details.category} />
            <CommonDetailLabel label="Building" value={details.building} />
            <CommonDetailLabel label="Apartment" value={details.apartment} />
            <CommonDetailLabel label="Expense Date" value={details.expenseDate} />
            <CommonDetailLabel label="Reference" value={details.reference} />
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <CommonDetailLabel label="Amount" value={details.amount} />
            <CommonDetailLabel label="Apartment" value={details.apartment} />
            <CommonDetailLabel label="Vendor" value={details.vendor} />
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

        {/* Full-width description */}
        <div className="border-t border-border pt-4 space-y-2">
          <span className="text-dark-gray font-normal text-xs uppercase tracking-wider block">Description :</span>
          <p className="text-dark-accent font-semibold text-sm">
            {details.description}
          </p>
        </div>
      </div>
    </CommonDetailCard>
  )
}

export default ExpensesDetailsInfo
