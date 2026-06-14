import React from "react"
import { ApartmentsIcon } from "../../components/SvgIcons/ApartmentsIcon"
import { MaintenanceIcon } from "../../components/SvgIcons/MaintenanceIcon"
import { IncomeIcon } from "../../components/SvgIcons/IncomeIcon"
import { AlertCircle } from "lucide-react"

const notificationsData = [
    {
        type: "vacant",
        title: "Vacant Apartments",
        detail: "2 apartments are vacant",
        date: "May 24, 9:37 AM",
    },
    {
        type: "maintenance-info",
        title: "Maintenance: hi",
        detail: "Status: in progress • Green Valley Apartments",
        date: "May 24, 9:37 AM",
    },
    {
        type: "critical",
        title: "Critical Maintenance",
        detail: "CCTV camera malfunction",
        date: "May 24, 9:37 AM",
    },
    {
        type: "maintenance-info",
        title: "Maintenance: Water leakage in bathroom",
        detail: "Status: in progress • Sunrise Tower",
        date: "May 24, 9:37 AM",
    },
    {
        type: "maintenance-info",
        title: "Maintenance: AC not cooling",
        detail: "Status: open • Skyline Residency",
        date: "May 24, 9:37 AM",
    },
    {
        type: "maintenance-info",
        title: "Maintenance: Parking lot lights broken",
        detail: "Status: open • Sunrise Tower",
        date: "May 24, 9:37 AM",
    },
    {
        type: "maintenance-info",
        title: "Maintenance: Common area painting",
        detail: "Status: open • Green Valley Apartments",
        date: "May 24, 9:37 AM",
    },
    {
        type: "payment",
        title: "Overdue Payment",
        detail: "₹20,000 from Unknown",
        date: "May 24, 9:37 AM",
    },
]

const getNotificationIconData = (type) => {
    const sizeClass = "size-5"
    switch (type) {
        case "vacant":
            return {
                icon: <ApartmentsIcon className={`${sizeClass} text-[#D97706]`} />,
                bg: "bg-[#FEF3C7]",
            }
        case "maintenance-info":
            return {
                icon: <MaintenanceIcon className={`${sizeClass} text-[#64748B]`} />,
                bg: "bg-[#F1F5F9]",
            }
        case "critical":
            return {
                icon: <AlertCircle className={`${sizeClass} text-[#D97706]`} />,
                bg: "bg-[#FEF3C7]",
            }
        case "payment":
            return {
                icon: <IncomeIcon className={`${sizeClass} text-[#16A34A]`} />,
                bg: "bg-[#DCFCE7]",
            }
        default:
            return {
                icon: <AlertCircle className={`${sizeClass} text-slate-500`} />,
                bg: "bg-slate-100",
            }
    }
}

const NotificationsPage = () => {
    return (
        <div className="flex flex-col gap-6 p-4">
            {/* Header Block */}
            <div className="mb-6">
                <h1 
                    className="text-3xl font-semibold text-[#1A1A1A] tracking-tight"
                    style={{ fontFamily: "'Adobe Aldine', Georgia, serif" }}
                >
                    Notifications
                </h1>
                
                {/* Breadcrumbs */}
                <div 
                    className="flex items-center gap-1.5 text-xs text-[#64748B] mt-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                    <span className="hover:text-[#0A0A0A] cursor-pointer">Dashboard</span>
                    <span className="text-[10px]">▸</span>
                    <span className="text-secondary font-medium">Notifications</span>
                </div>
            </div>

            {/* Notifications List Container */}
            <div className="flex flex-col bg-white  overflow-hidden">
                {notificationsData.map((item, idx) => {
                    const iconData = getNotificationIconData(item.type)
                    return (
                        <div 
                            key={idx}
                            className="flex p-2 items-start gap-2 self-stretch border-b border-[#EEE] justify-between hover:bg-slate-50 transition-colors"
                        >
                            <div className="flex gap-2 items-start">
                                <div className={`p-2 rounded-full flex items-center justify-center ${iconData.bg}`}>
                                    {iconData.icon}
                                </div>
                                <div className="flex flex-col justify-center min-h-[36px]">
                                    <h3 
                                        className="text-[18px] font-medium text-[#1A1A1A] leading-tight"
                                        style={{ fontFamily: "'Adobe Aldine', Georgia, serif" }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p 
                                        className="text-[12px] font-normal text-[#64748B] mt-0.5"
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >
                                        {item.detail}
                                    </p>
                                </div>
                            </div>
                            
                            <span 
                                className="text-[12px] font-normal text-[#64748B] whitespace-nowrap pt-1"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                {item.date}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NotificationsPage
