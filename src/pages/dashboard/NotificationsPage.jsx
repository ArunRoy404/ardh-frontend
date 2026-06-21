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
                icon: <ApartmentsIcon className={`${sizeClass} text-progress-tag-text`} />,
                bg: "bg-progress-tag-bg",
            }
        case "maintenance-info":
            return {
                icon: <MaintenanceIcon className={`${sizeClass} text-dark-gray`} />,
                bg: "bg-muted",
            }
        case "critical":
            return {
                icon: <AlertCircle className={`${sizeClass} text-progress-tag-text`} />,
                bg: "bg-progress-tag-bg",
            }
        case "payment":
            return {
                icon: <IncomeIcon className={`${sizeClass} text-success-tag-text`} />,
                bg: "bg-success-tag-bg",
            }
        default:
            return {
                icon: <AlertCircle className={`${sizeClass} text-dark-gray`} />,
                bg: "bg-muted",
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
                            className="flex p-3 items-start gap-3 self-stretch border-b border-border justify-between hover:bg-muted transition-colors"
                        >
                            <div className="flex gap-3 items-start">
                                <div className={`p-2.5 rounded-full flex items-center justify-center ${iconData.bg}`}>
                                    {iconData.icon}
                                </div>
                                <div className="flex flex-col justify-center min-h-[36px]">
                                    <h3
                                        className="text-[15px] font-medium text-card-inner-title leading-tight"
                                        style={{ fontFamily: "'Adobe Aldine', Georgia, serif" }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="text-[12px] font-normal text-dark-gray mt-0.5"
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >
                                        {item.detail}
                                    </p>
                                </div>
                            </div>

                            <span
                                className="text-[12px] font-normal text-dark-gray whitespace-nowrap pt-1"
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
