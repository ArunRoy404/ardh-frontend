import React from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select"
import { BuildingsIcon } from "../../components/SvgIcons/BuildingsIcon"
import { ApartmentsIcon } from "../../components/SvgIcons/ApartmentsIcon"
import { TenantsIcon } from "../../components/SvgIcons/TenantsIcon"
import { IncomeIcon } from "../../components/SvgIcons/IncomeIcon"
import { ExpensesIcon } from "../../components/SvgIcons/ExpensesIcon"
import { MaintenanceIcon } from "../../components/SvgIcons/MaintenanceIcon"
import { AlertCircle, ArrowRight } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../../components/ui/chart"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"

const statsData = [
    {
        title: "Total Buildings",
        value: "3",
        icon: <BuildingsIcon className="size-6 text-[#1E3A5F]" />,
        iconBg: "bg-[#E4ECFF]",
    },
    {
        title: "Total Apartments",
        value: "19",
        icon: <ApartmentsIcon className="size-6 text-[#64748B]" />,
        iconBg: "bg-[#F1F5F9]",
    },
    {
        title: "Occupied",
        value: "4",
        icon: <TenantsIcon className="size-6 text-[#1961FF]" />,
        iconBg: "bg-[#E4ECFF]",
    },
    {
        title: "Vacant",
        value: "2",
        icon: <ApartmentsIcon className="size-6 text-[#F59E0B]" />,
        iconBg: "bg-[#FEF3C7]",
    },
    {
        title: "Monthly Income",
        value: "₹130,000",
        icon: <IncomeIcon className="size-6 text-[#16A34A]" />,
        iconBg: "bg-[#DCFCE7]",
    },
    {
        title: "Monthly Expense",
        value: "₹130,000",
        icon: <ExpensesIcon className="size-6 text-[#DC2626]" />,
        iconBg: "bg-[#FEE2E2]",
    },
    {
        title: "Pending Payments",
        value: "4",
        icon: <AlertCircle className="size-6 text-[#F59E0B]" />,
        iconBg: "bg-[#FEF3C7]",
    },
    {
        title: "Open Maintenance",
        value: "2",
        icon: <MaintenanceIcon className="size-6 text-[#64748B]" />,
        iconBg: "bg-[#F1F5F9]",
    },
]

const expenseCategories = [
    { name: "Utilities", percentage: 66 },
    { name: "Supplies", percentage: 10 },
    { name: "Maintenance", percentage: 20 },
    { name: "Repair", percentage: 75 },
    { name: "Cleaning", percentage: 15 },
    { name: "Salary", percentage: 30 },
    { name: "Insurance", percentage: 100 },
]

const occupancyData = [
    { status: "occupied", value: 3, fill: "#16A34A" },
    { status: "vacant", value: 2, fill: "#F59E0B" },
    { status: "maintenance", value: 2, fill: "#1961FF" },
    { status: "reserved", value: 1, fill: "#1E3A5F" },
]

const occupancyConfig = {
    value: {
        label: "Value",
    },
    occupied: {
        label: "Occupied",
        color: "#16A34A",
    },
    vacant: {
        label: "Vacant",
        color: "#F59E0B",
    },
    maintenance: {
        label: "Maintenance",
        color: "#1961FF",
    },
    reserved: {
        label: "Reserved",
        color: "#1E3A5F",
    },
}

const expenseData = expenseCategories.map(item => ({
    name: item.name,
    value: Math.round((item.percentage / 100) * 120000),
}))

const expenseConfig = {
    value: {
        label: "Expense",
        color: "#1961FF",
    },
}

const recentPayments = [
    { name: "Meera Iyer", type: "Rent", date: "May 5", amount: "₹45,000", status: "Paid" },
    { name: "Meera Iyer", type: "Maintenance", date: "May 5", amount: "₹5,000", status: "Paid" },
    { name: "Meera Iyer", type: "Parking", date: "May 5", amount: "₹2,000", status: "Paid" },
    { name: "Neha Singh", type: "Rent", date: "May 5", amount: "₹35,000", status: "Paid" },
    { name: "Ravi Gupta", type: "Rent", date: "May 5", amount: "₹35,000", status: "Paid" },
    { name: "Ankit Verma", type: "Rent", date: "May 5", amount: "₹35,000", status: "Paid" },
]

const recentActivities = [
    { text: "Skyline Residency building added to portfolio", date: "May 23, 8:33 AM" },
    { text: "Rent payment of ₹45,000 received from Meera Iyer (Flat 301)", date: "May 23, 8:33 AM" },
    { text: "Critical: CCTV camera malfunction at Skyline Residency", date: "May 23, 8:33 AM" },
    { text: "Ankit Verma moved into Sunrise Tower, Flat 101", date: "May 23, 8:33 AM" },
    { text: "Flat 302 at Skyline Residency marked for maintenance", date: "May 23, 8:33 AM" },
    { text: "₹75,000 paid for lift motor replacement at Skyline Residency", date: "May 23, 8:33 AM" },
    { text: "Flat 302 at Skyline Residency marked for maintenance", date: "May 23, 8:33 AM" },
]

const openMaintenance = [
    { title: "Water Leakage in bathroom", location: "Sunrise Tower • 101", priority: "High", status: "InProgress" },
    { title: "Ac Not cooling", location: "Skyline Residency • 301", priority: "High", status: "InProgress" },
    { title: "Parking lot lights broken", location: "Sunrise Tower", priority: "Medium", status: "Open" },
    { title: "Common area painting", location: "Green Valley Apartments", priority: "Low", status: "Open" },
]

const getPriorityBadge = (priority) => {
    switch (priority.toLowerCase()) {
        case "high":
            return "bg-warning-tag-bg border border-warning-tag-border text-warning-tag-text"
        case "medium":
            return "bg-medium-tag-bg border border-medium-tag-border text-medium-tag-text"
        case "low":
            return "bg-success-tag-bg border border-success-tag-border text-success-tag-text"
        default:
            return ""
    }
}

const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
        case "inprogress":
            return "bg-progress-tag-bg border border-progress-tag-border text-progress-tag-text"
        case "open":
            return "bg-open-tag-bg border border-open-tag-border text-open-tag-text"
        case "paid":
            return "bg-success-tag-bg border border-success-tag-border text-success-tag-text"
        default:
            return ""
    }
}

const DashboardPage = () => {
    return (
        <div className="flex flex-col gap-6 p-4">
            {/* Header Block */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 
                        className="text-3xl font-semibold text-foreground tracking-tight"
                        style={{ fontFamily: "'Adobe Aldine', Georgia, serif" }}
                    >
                        Dashboard
                    </h1>
                    <p 
                        className="text-sm text-dark-gray"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        Welcome to ARDH Admin Platform
                    </p>
                </div>
                
                <div className="flex items-center gap-2">
                    <span 
                        className="text-sm text-dark-gray font-sans"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                        Filter by Building:
                    </span>
                    <Select defaultValue="all">
                        <SelectTrigger className="w-[140px] text-xs font-sans border-border bg-white text-[#1A1A1A]">
                            <SelectValue placeholder="All Buildings" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Buildings</SelectItem>
                            <SelectItem value="sunrise">Sunrise Tower</SelectItem>
                            <SelectItem value="skyline">Skyline Residency</SelectItem>
                            <SelectItem value="greenvalley">Green Valley</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Grid Stats Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((stat, idx) => (
                    <div 
                        key={idx}
                        className="bg-stat-bg p-6 rounded-2xl flex items-center justify-between transition-all duration-300 hover:shadow-md border border-slate-100"
                    >
                        <div className="flex flex-col gap-2">
                            <span 
                                className="text-base text-dark-gray font-normal"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                {stat.title}
                            </span>
                            <span 
                                className="text-2xl font-semibold text-dark-accent"
                                style={{ fontFamily: "'Adobe Aldine', Georgia, serif" }}
                            >
                                {stat.value}
                            </span>
                        </div>
                        <div className={`p-3 rounded-full flex items-center justify-center ${stat.iconBg}`}>
                            {stat.icon}
                        </div>
                    </div>
                ))}
            </div>

            {/* Middle Section (Donut & Expense Breakdown) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Occupancy Overview Card */}
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
                                                const configItem = occupancyConfig[name];
                                                return (
                                                    <div className="flex items-center gap-2">
                                                        <div 
                                                            className="h-2.5 w-2.5 shrink-0 rounded-[2px]" 
                                                            style={{ backgroundColor: configItem?.color }}
                                                        />
                                                        <span className="text-muted-foreground">{configItem?.label || name}:</span>
                                                        <span className="font-mono font-semibold text-foreground">{value}</span>
                                                    </div>
                                                );
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
                                08
                            </span>
                            <span 
                                className="text-xs text-dark-gray font-sans"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                Total
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 text-xs font-sans text-dark-gray" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-[#16A34A]"></span>
                            <span>Occupied 03</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-[#F59E0B]"></span>
                            <span>Vacant 02</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-[#1961FF]"></span>
                            <span>Maintenance 02</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-[#1E3A5F]"></span>
                            <span>Reserved 1</span>
                        </div>
                    </div>
                </div>

                {/* Expense Breakdown Card */}
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
                                                    <span className="text-muted-foreground">Expense:</span>
                                                    <span className="font-mono font-semibold text-foreground">₹{value.toLocaleString()}</span>
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
            </div>

            {/* Bottom Section: Recent Payments & Recent Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Payments Card */}
                <div className="bg-white p-6 rounded-[16px] shadow-[0_0_10px_0_rgba(0,0,0,0.10)] border border-slate-50 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                        <h2 
                            className="text-xl font-semibold text-foreground"
                            style={{ fontFamily: "'Adobe Aldine', Georgia, serif" }}
                        >
                            Recent Payments
                        </h2>
                        <button className="flex items-center gap-1 text-xs text-secondary font-medium hover:underline cursor-pointer">
                            <span>View All</span>
                            <ArrowRight className="size-3.5" />
                        </button>
                    </div>

                    <div className="flex flex-col divide-y divide-slate-100 font-sans" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {recentPayments.map((payment, idx) => (
                            <div key={idx} className="flex items-center justify-between py-3">
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-sm font-medium text-foreground">{payment.name}</span>
                                    <span className="text-xs text-dark-gray">{payment.type} • {payment.date}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-semibold text-dark-accent">{payment.amount}</span>
                                    <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${getStatusBadge(payment.status)}`}>
                                        {payment.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activities Card */}
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

                    <div className="relative flex flex-col gap-6 pl-4 font-sans" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {/* Timeline Line */}
                        <div className="absolute top-2 bottom-2 left-[5px] w-0.5 bg-slate-100"></div>

                        {recentActivities.map((activity, idx) => (
                            <div key={idx} className="relative flex flex-col gap-1 text-sm">
                                {/* Dot */}
                                <div className="absolute -left-[15px] top-1.5 h-2 w-2 rounded-full bg-secondary"></div>
                                <span className="text-[#1A1A1A] font-medium leading-tight">{activity.text}</span>
                                <span className="text-xs text-dark-gray">{activity.date}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Full Width Bottom Card: Open Maintenance */}
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

                <div className="flex flex-col divide-y divide-slate-100 font-sans" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {openMaintenance.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between py-3.5">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-sm font-medium text-foreground">{item.title}</span>
                                <span className="text-xs text-dark-gray">{item.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${getPriorityBadge(item.priority)}`}>
                                    {item.priority}
                                </span>
                                <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${getStatusBadge(item.status)}`}>
                                    {item.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DashboardPage