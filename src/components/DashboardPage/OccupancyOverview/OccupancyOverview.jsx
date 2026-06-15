import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../../ui/chart"
import { PieChart, Pie, Cell } from "recharts"
import useOccupancyStore from "../../../dummyDataStore/useOccupancyStore"
import CommonCard from "@/components/shared/CommonCard/CommonCard"
import CommonSelect from "@/components/shared/CommonSelect/CommonSelect"

const OccupancyOverview = () => {
    const { occupancyData, occupancyConfig } = useOccupancyStore()

    return (
        <CommonCard
            title="Occupancy Overview"
            headerChild={
                <CommonSelect
                    defaultValue="this-week"
                    options={[
                        { value: "this-week", label: "This Week" },
                        { value: "this-month", label: "This Month" },
                        { value: "this-year", label: "This Year" },
                    ]}
                />
            }
        >

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
        </CommonCard>
    )
}

export default OccupancyOverview
