import CommonDetailCard from "@/components/shared/DetailCard/CommonDetailCard"
import CommonDetailLabel from "@/components/shared/DetailCard/CommonDetailLabel"

const MaintenanceDetailsInfo = ({ details }) => {
  return (
    <CommonDetailCard title="Maintenance Detail Information" cardClassName="text-sm">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <CommonDetailLabel label="Categories" value={details.category} />
            <CommonDetailLabel label="Building" value={details.building} />
            <CommonDetailLabel label="Vendor" value={details.vendor} />
            <CommonDetailLabel label="Equipment" value={details.equipment || "-"} />
            <CommonDetailLabel label="Scheduled" value={details.scheduled} />
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <CommonDetailLabel
              label="Priority"
              value={details.priority}
              render={(priority) => (
                <span className="bg-red-50 text-red-600 border border-red-200 px-3 py-0.5 rounded-[6px] text-xs font-semibold inline-block">
                  {priority}
                </span>
              )}
            />
            <CommonDetailLabel label="Apartment" value={details.apartment} />
            <CommonDetailLabel label="Estimated Cost" value={details.estimatedCost} />
            <CommonDetailLabel
              label="Complete"
              value={details.complete}
              render={(complete) => (
                <span className="bg-success-tag-bg text-success-tag-text border border-success-tag-border px-3 py-0.5 rounded-[6px] text-xs font-semibold inline-block">
                  {complete}
                </span>
              )}
            />
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <CommonDetailLabel
              label="Status"
              value={details.status}
              render={(status) => (
                <span className="bg-amber-50 text-amber-600 border border-amber-200 px-3 py-0.5 rounded-[6px] text-xs font-semibold inline-block">
                  {status}
                </span>
              )}
            />
            <CommonDetailLabel label="Tenant" value={details.tenant} />
            <CommonDetailLabel label="Actual Cost" value={details.actualCost} />
            <CommonDetailLabel
              label="Created"
              value={details.created}
              render={(created) => (
                <span className="bg-success-tag-bg text-success-tag-text border border-success-tag-border px-3 py-0.5 rounded-[6px] text-xs font-semibold inline-block">
                  {created}
                </span>
              )}
            />
          </div>
        </div>

        {/* Note/Description section */}
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

export default MaintenanceDetailsInfo
