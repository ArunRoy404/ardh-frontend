
import useActivitiesStore from "../../../dummyDataStore/useActivitiesStore"
import CommonCard from "@/components/shared/CommonCard/CommonCard"
import { LinkButtonCard } from "@/components/shared/LinkButton/LinkButtonCard"

const RecentActivities = () => {
    const { recentActivities } = useActivitiesStore()

    return (
        <CommonCard
            title="Recent Activities"
            headerChild={
                <LinkButtonCard to="/notifications">
                    View All
                </LinkButtonCard>
            }
            className="min-h-0"
        >
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
        </CommonCard>
    )
}

export default RecentActivities
