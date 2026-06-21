import CommonDetailCard from "@/components/shared/DetailCard/CommonDetailCard"
import CommonDetailLabel from "@/components/shared/DetailCard/CommonDetailLabel"

const VendorDetailsInfo = ({ details }) => {
  return (
    <CommonDetailCard title="Vendor Details" cardClassName="text-sm">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <CommonDetailLabel label="Name" value={details.name} />
            <CommonDetailLabel label="Company" value={details.company} />
            <CommonDetailLabel label="Vendor Type / Service" value={details.vendorType} />
            <CommonDetailLabel label="Address" value={details.address} />
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <CommonDetailLabel label="Phone Number" value={details.phone} />
            <CommonDetailLabel label="Email" value={details.email} />
            <CommonDetailLabel label="GST Number" value={details.gstNumber} />
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

export default VendorDetailsInfo
