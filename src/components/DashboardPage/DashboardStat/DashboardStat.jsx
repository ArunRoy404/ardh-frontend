import React from "react"
import useStatsStore from "../../../dummyDataStore/useStatsStore"
import DashboardStatCard from "./DashboardStatCard"

const DashboardStat = () => {
    const { stats } = useStatsStore()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
                <DashboardStatCard
                    key={idx}
                    title={stat.title}
                    value={stat.value}
                    iconType={stat.iconType}
                    iconColor={stat.iconColor}
                    iconBg={stat.iconBg}
                    url={stat.url}
                />
            ))}
        </div>
    )
}

export default DashboardStat
