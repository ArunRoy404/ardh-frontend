import React from "react"
import { ArrowRight } from "lucide-react"
import useMaintenanceStore from "../../../dummyDataStore/useMaintenanceStore"
import { getPriorityBadge, getStatusBadge } from "../../../dummyData/openMaintenance"

const OpenMaintenance = () => {
    const { openMaintenance } = useMaintenanceStore()

    return (
        <div className="bg-white p-6 rounded-[16px] shadow-[0_0_10px_0_rgba(0,0,0,0.10)] border border-slate-50 flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h2
                    className="text-xl font-semibold text-foreground"
                    style={{ fontFamily: "'Adobe Aldine', Georgia, serif" }}
                >
                    Open Maintenance
                </h2>
                <button className="flex items-center gap-1 text-xs text-secondary font-medium hover:underline cursor-pointer">
                    <span>View All</span>
                    <ArrowRight className="size-3.5" />
                </button>
            </div>

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
        </div>
    )
}

export default OpenMaintenance
