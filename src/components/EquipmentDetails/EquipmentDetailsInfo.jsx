import CommonDetailCard from "@/components/shared/DetailCard/CommonDetailCard"
import CommonDetailLabel from "@/components/shared/DetailCard/CommonDetailLabel"

const EquipmentDetailsInfo = ({ details }) => {
  return (
    <CommonDetailCard title="Equipment Details" cardClassName="text-sm">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <CommonDetailLabel label="Name" value={details.name} />
            <CommonDetailLabel label="Brand" value={details.brand} />
            <CommonDetailLabel label="Install Date" value={details.installDate} />
            <CommonDetailLabel label="AMC Expiry" value={details.amcExpiry} />
            <CommonDetailLabel label="Status" value={details.status} />
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <CommonDetailLabel label="Type" value={details.type} />
            <CommonDetailLabel label="Model" value={details.model} />
            <CommonDetailLabel label="Warranty Expiry" value={details.warrantyExpiry} />
            <CommonDetailLabel label="Last Service" value={details.lastService} />
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <CommonDetailLabel label="Building" value={details.building} />
            <CommonDetailLabel label="Serial" value={details.serial} />
            <CommonDetailLabel label="AMC Vendor" value={details.amcVendor} />
            <CommonDetailLabel label="Next Service" value={details.nextService} />
          </div>
        </div>

        {/* Note section */}
        <div className="border-t border-border pt-4 space-y-2">
          <span className="text-dark-gray font-normal text-xs uppercase tracking-wider block">Note :</span>
          <p className="text-dark-accent font-semibold text-sm">
            {details.note}
          </p>
        </div>
      </div>
    </CommonDetailCard>
  )
}

export default EquipmentDetailsInfo
