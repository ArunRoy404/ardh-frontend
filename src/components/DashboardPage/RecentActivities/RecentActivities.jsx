import React from "react"
import { ArrowRight } from "lucide-react"
import useActivitiesStore from "../../../dummyDataStore/useActivitiesStore"

const RecentActivities = () => {
    const { recentActivities } = useActivitiesStore()

    return (
        <div className="bg-white p-6 rounded-[16px] shadow-[0_0_10px_0_rgba(0,0,0,0.10)] border border-slate-50 flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h2
                    className="text-xl font-semibold text-foreground"
                    style={{ fontFamily: "'Adobe Aldine', Georgia, serif" }}
                >
                    Recent Activities
                </h2>
                <button className="flex items-center gap-1 text-xs text-secondary font-medium hover:underline cursor-pointer">
                    <span>View All</span>
                    <ArrowRight className="size-3.5" />
                </button>
            </div>

            <div
                className="relative flex flex-col gap-6 pl-4 font-sans"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
                <div className="absolute top-2 bottom-2 left-[5px] w-0.5 bg-slate-100"></div>

                {recentActivities.map((activity, idx) => (
                    <div key={idx} className="relative flex flex-col gap-1 text-sm">
                        <div className="absolute -left-[15px] top-1.5 h-2 w-2 rounded-full bg-secondary"></div>
                        <span className="text-[#1A1A1A] font-medium leading-tight">
                            {activity.text}
                        </span>
                        <span className="text-xs text-dark-gray">{activity.date}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentActivities
