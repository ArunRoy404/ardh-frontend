import useMaintenanceStore from "../../../dummyDataStore/useMaintenanceStore"
import { getPriorityBadge, getStatusBadge } from "../../../dummyData/openMaintenance"
import CommonCard from "@/components/shared/CommonCard/CommonCard"
import { LinkButton } from "@/components/shared/LinkButton/LinkButton"
import { LinkButtonCard } from "@/components/shared/LinkButton/LinkButtonCard"

const OpenMaintenance = () => {
    const { openMaintenance } = useMaintenanceStore()

    return (
        <CommonCard
            title="Open Maintenance"
            headerChild={
                <LinkButtonCard to="/maintenance">
                    View All
                </LinkButtonCard>
            }
            className="min-h-0"
        >
            <div
                className="flex flex-col divide-y divide-slate-100 font-sans"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
                {openMaintenance.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-3.5">
                        <div className="flex flex-col gap-0.5">
                            <span className="text-sm font-medium text-foreground">
                                {item.title}
                            </span>
                            <span className="text-xs text-dark-gray">{item.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span
                                className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${getPriorityBadge(item.priority)}`}
                            >
                                {item.priority}
                            </span>
                            <span
                                className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${getStatusBadge(item.status)}`}
                            >
                                {item.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </CommonCard>
    )
}

export default OpenMaintenance
