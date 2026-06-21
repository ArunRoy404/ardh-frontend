import React from "react"
import { cn } from "@/lib/utils"

const ReportsStatCard = ({ title, value, valueColor }) => {
    return (
        <div className="bg-stat-bg p-6 rounded-md flex flex-col gap-2 border border-border">
            <span
                className="text-sm text-dark-gray font-normal"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
                {title}
            </span>
            <span className={cn("text-2xl font-bold", valueColor)}>
                {value}
            </span>
        </div>
    )
}

const ReportsStats = ({ stats: propStats, className }) => {
    const defaultStats = [
        {
            title: "Total Income ( Paid )",
            value: "₹1,30,000",
            valueColor: "text-emerald-600"
        },
        {
            title: "Total Expense ( Paid )",
            value: "₹170,000",
            valueColor: "text-red-600"
        },
        {
            title: "Net",
            value: "₹-40,500",
            valueColor: "text-red-600"
        }
    ]

    const stats = propStats || defaultStats

    return (
        <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-6", className)}>
            {stats.map((stat, idx) => (
                <ReportsStatCard
                    key={idx}
                    title={stat.title}
                    value={stat.value}
                    valueColor={stat.valueColor}
                />
            ))}
        </div>
    )
}

export default ReportsStats