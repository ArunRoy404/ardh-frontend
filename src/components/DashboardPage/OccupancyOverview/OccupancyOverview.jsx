import React from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../../ui/chart"
import { PieChart, Pie, Cell } from "recharts"
import useOccupancyStore from "../../../dummyDataStore/useOccupancyStore"

const OccupancyOverview = () => {
    const { occupancyData, occupancyConfig } = useOccupancyStore()

    return (
        <div className="bg-white p-6 rounded-[16px] shadow-[0_0_10px_0_rgba(0,0,0,0.10)] border border-slate-50 flex flex-col justify-between min-h-[350px]">
            <div className="flex items-center justify-between mb-4">
                <h2
                    className="text-xl font-semibold text-foreground"
                    style={{ fontFamily: "'Adobe Aldine', Georgia, serif" }}
                >
                    Occupancy Overview
                </h2>
                <Select defaultValue="this-week">
                    <SelectTrigger className="w-[110px] text-xs font-sans border-border bg-white">
                        <SelectValue placeholder="This Week" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="this-week">This Week</SelectItem>
                        <SelectItem value="this-month">This Month</SelectItem>
                        <SelectItem value="this-year">This Year</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="relative w-[220px] h-[220px] mx-auto flex items-center justify-center my-4">
                <ChartContainer
                    config={occupancyConfig}
                    className="w-full h-full aspect-square"
                    initialDimension={{ width: 220, height: 220 }}
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    hideLabel
                                    formatter={(value, name) => {
                                        const configItem = occupancyConfig[name]
                                        return (
                                            <div className="flex items-center gap-2">
                                                <div
                                                    className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
                                                    style={{ backgroundColor: configItem?.color }}
                                                />
                                                <span className="text-muted-foreground">
                                                    {configItem?.label || name}:
                                                </span>
                                                <span className="font-mono font-semibold text-foreground">
                                                    {value}
                                                </span>
                                            </div>
                                        )
                                    }}
                                />
                            }
                        />
                        <Pie
                            data={occupancyData}
                            dataKey="value"
                            nameKey="status"
                            innerRadius={55}
                            outerRadius={81}
                            strokeWidth={0}
                            startAngle={90}
                            endAngle={-270}
                        >
                            {occupancyData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                    </PieChart>
                </ChartContainer>
                <div className="absolute flex flex-col items-center justify-center pointer-events-none">
                    <span
                        className="text-3xl font-semibold text-dark-accent"
                        style={{ fontFamily: "'Adobe Aldine', Georgia, serif" }}
                    >
                        {occupancyData.reduce((acc, item) => acc + item.value, 0)
                            .toString()
                            .padStart(2, "0")}
                    </span>
                    <span
                        className="text-xs text-dark-gray font-sans"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        Total
                    </span>
                </div>
            </div>

            <div
                className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 text-xs font-sans text-dark-gray"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
                {occupancyData.map((item) => (
                    <div key={item.status} className="flex items-center gap-2">
                        <span
                            className="h-3 w-3 rounded-full"
                            style={{ backgroundColor: item.fill }}
                        ></span>
                        <span>
                            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}{" "}
                            {item.value.toString().padStart(2, "0")}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OccupancyOverview
