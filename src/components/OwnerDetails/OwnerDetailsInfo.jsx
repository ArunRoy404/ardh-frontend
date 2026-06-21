import CommonDetailCard from "@/components/shared/DetailCard/CommonDetailCard"
import CommonDetailLabel from "@/components/shared/DetailCard/CommonDetailLabel"

const OwnerDetailsInfo = ({ details }) => {
  return (
    <div className="space-y-3">
      {/* Custom Title Row with Badge */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-primary font-serif">
          Owner Information
        </h3>
        <span className="bg-success-tag-bg text-success-tag-text border border-success-tag-border px-3 py-0.5 rounded-[6px] text-xs font-semibold">
          {details.status}
        </span>
      </div>

      <CommonDetailCard cardClassName="text-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <CommonDetailLabel label="Phone" value={details.phone} />
            <CommonDetailLabel label="ID Type" value={details.idType} />
            <CommonDetailLabel label="Account No" value={details.accountNo} />
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <CommonDetailLabel label="Email" value={details.email} />
            <CommonDetailLabel label="ID Number" value={details.idNumber} />
            <CommonDetailLabel label="IFSC Code" value={details.ifscCode} />
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <CommonDetailLabel label="City" value={details.city} />
            <CommonDetailLabel label="Bank Name" value={details.bankName} />
          </div>
        </div>
      </CommonDetailCard>
    </div>
  )
}

export default OwnerDetailsInfo
