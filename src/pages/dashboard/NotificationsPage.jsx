import { ApartmentsIcon } from "../../components/SvgIcons/ApartmentsIcon"
import { MaintenanceIcon } from "../../components/SvgIcons/MaintenanceIcon"
import { IncomeIcon } from "../../components/SvgIcons/IncomeIcon"
import { AlertCircle } from "lucide-react"
import DashboardHeader from "@/components/DashboardLayout/DashbaordHeader"
import useNotificationsStore from "@/dummyDataStore/useNotificationsStore"

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
    const { notificationsData } = useNotificationsStore()
    return (
        <>
            {/* Header Block */}
            <DashboardHeader
                title="Notifications"
                description="Stay updated with the latest activities and alerts"
                showBreadcrumb
            />

            {/* Notifications List Container */}
            <div className="flex flex-col">
                {notificationsData.map((item, idx) => {
                    const iconData = getNotificationIconData(item.type)
                    return (
                        <div
                            key={idx}
                            className="flex p-3 items-start gap-3 self-stretch border-b border-[#EEE] justify-between hover:bg-slate-50 transition-colors"
                        >
                            <div className="flex gap-3 items-start">
                                <div className={`p-2.5 rounded-full flex items-center justify-center ${iconData.bg}`}>
                                    {iconData.icon}
                                </div>
                                <div className="flex flex-col justify-center min-h-[36px]">
                                    <h3
                                        className="text-[15px] font-medium text-[#1A1A1A] leading-tight"
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
        </>
    )
}

export default NotificationsPage
