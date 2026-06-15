import DashboardStat from "@/components/DashboardPage/DashboardStat/DashboardStat"
import OccupancyOverview from "@/components/DashboardPage/OccupancyOverview/OccupancyOverview"
import ExpenseBreakdown from "@/components/DashboardPage/ExpenseBreakdown/ExpenseBreakdown"
import RecentPayments from "@/components/DashboardPage/RecentPayments/RecentPayments"
import RecentActivities from "@/components/DashboardPage/RecentActivities/RecentActivities"
import OpenMaintenance from "@/components/DashboardPage/OpenMaintenance/OpenMaintenance"
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader"
import DashboardBuildingFilter from "@/components/DashboardPage/DashboardBuildingFilter/DashboardBuildingFilter"




const DashboardPage = () => {
    return (
        <>
            {/* Header Block */}
            <DashboardHeader
                title="Dashboard"
                description="Welcome to ARDH Admin Platform"
            >
                <DashboardBuildingFilter />
            </DashboardHeader>

            {/* Grid Stats Block */}
            <DashboardStat />

            {/* Middle Section (Donut & Expense Breakdown) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <OccupancyOverview />
                <ExpenseBreakdown />
            </div>

            {/* Bottom Section: Recent Payments & Recent Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RecentPayments />
                <RecentActivities />
            </div>

            {/* Full Width Bottom Card: Open Maintenance */}
            <OpenMaintenance />
        </>
    )
}



export default DashboardPage 