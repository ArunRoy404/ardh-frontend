import React from "react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../../ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"
import useExpenseStore from "../../../dummyDataStore/useExpenseStore"
import CommonCard from "@/components/shared/CommonCard/CommonCard"
import CommonSelect from "@/components/shared/CommonSelect/CommonSelect"

const ExpenseBreakdown = () => {
    const { expenseData, expenseConfig } = useExpenseStore()

    return (
        <CommonCard
            title="Expense Breakdown"
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
            <div className="flex-1 w-full min-h-[220px] relative mt-2">
                <ChartContainer
                    config={expenseConfig}
                    className="w-full h-full min-h-[220px]"
                    initialDimension={{ width: 400, height: 220 }}
                >
                    <BarChart
                        layout="vertical"
                        data={expenseData}
                        margin={{ left: 10, right: 10, top: 0, bottom: 0 }}
                        barGap={0}
                    >
                        <CartesianGrid
                            horizontal={false}
                            strokeDasharray="3 3"
                            stroke="var(--border)"
                        />
                        <XAxis
                            type="number"
                            domain={[0, 120000]}
                            ticks={[0, 30000, 60000, 90000, 120000]}
                            tickFormatter={(value) => `₹${value.toLocaleString()}`}
                            stroke="var(--dark-gray)"
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                            dy={8}
                        />
                        <YAxis
                            dataKey="name"
                            type="category"
                            tickLine={false}
                            axisLine={false}
                            stroke="var(--dark-gray)"
                            fontSize={12}
                            width={75}
                            tickFormatter={(val) => val}
                            className="font-sans"
                        />
                        <ChartTooltip
                            cursor={{ fill: "rgba(0, 0, 0, 0.03)" }}
                            content={
                                <ChartTooltipContent
                                    hideLabel
                                    formatter={(value) => (
                                        <div className="flex items-center gap-1">
                                            <span className="text-muted-foreground">
                                                Expense:
                                            </span>
                                            <span className="font-mono font-semibold text-foreground">
                                                ₹{value.toLocaleString()}
                                            </span>
                                        </div>
                                    )}
                                />
                            }
                        />
                        <Bar
                            dataKey="value"
                            fill="var(--color-value)"
                            radius={4}
                            barSize={24}
                        />
                    </BarChart>
                </ChartContainer>
            </div>
        </CommonCard>
    )
}

export default ExpenseBreakdown
