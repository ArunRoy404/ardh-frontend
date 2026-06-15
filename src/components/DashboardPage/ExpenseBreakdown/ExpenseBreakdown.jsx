import React from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../../ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"
import useExpenseStore from "../../../dummyDataStore/useExpenseStore"

const ExpenseBreakdown = () => {
    const { expenseData, expenseConfig } = useExpenseStore()

    return (
        <div className="bg-white p-6 rounded-[16px] shadow-[0_0_10px_0_rgba(0,0,0,0.10)] border border-slate-50 flex flex-col justify-between min-h-[350px]">
            <div className="flex items-center justify-between mb-4">
                <h2
                    className="text-xl font-semibold text-foreground"
                    style={{ fontFamily: "'Adobe Aldine', Georgia, serif" }}
                >
                    Expense Breakdown
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
                            stroke="#E2E8F0"
                        />
                        <XAxis
                            type="number"
                            domain={[0, 120000]}
                            ticks={[0, 30000, 60000, 90000, 120000]}
                            tickFormatter={(value) => `₹${value.toLocaleString()}`}
                            stroke="#64748B"
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
                            stroke="#64748B"
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
        </div>
    )
}

export default ExpenseBreakdown
