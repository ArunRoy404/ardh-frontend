import React from "react"
import useStatsStore from "../../../dummyDataStore/useStatsStore"
import DashboardStatCard from "./DashboardStatCard"
import { cn } from "@/lib/utils"

const DashboardStat = ({ stats: propStats, className }) => {
    const { stats: storeStats } = useStatsStore()
    const stats = propStats || storeStats

    return (
        <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", className)}>
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
