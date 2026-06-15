import { Link } from "react-router"
import { BuildingsIcon } from "../../SvgIcons/BuildingsIcon"
import { ApartmentsIcon } from "../../SvgIcons/ApartmentsIcon"
import { TenantsIcon } from "../../SvgIcons/TenantsIcon"
import { IncomeIcon } from "../../SvgIcons/IncomeIcon"
import { ExpensesIcon } from "../../SvgIcons/ExpensesIcon"
import { MaintenanceIcon } from "../../SvgIcons/MaintenanceIcon"
import { AlertCircle } from "lucide-react"




const iconMap = {
    buildings: (className) => <BuildingsIcon className={className} />,
    apartments: (className) => <ApartmentsIcon className={className} />,
    tenants: (className) => <TenantsIcon className={className} />,
    income: (className) => <IncomeIcon className={className} />,
    expenses: (className) => <ExpensesIcon className={className} />,
    maintenance: (className) => <MaintenanceIcon className={className} />,
    alert: (className) => <AlertCircle className={className} />,
}




const DashboardStatCard = ({ title, value, iconType, iconColor, iconBg, url }) => {
    const IconComponent = iconMap[iconType]

    return (
        <Link
            to={url}
            className="bg-stat-bg p-6 rounded-2xl flex items-center justify-between transition-all duration-300 hover:shadow-md border border-slate-100 cursor-pointer"
        >
            <div className="flex flex-col gap-2">
                <span
                    className="text-base text-dark-gray font-normal"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                    {title}
                </span>
                <span
                    className="text-2xl font-semibold text-dark-accent"
                >
                    {value}
                </span>
            </div>
            <div className={`p-3 rounded-full flex items-center justify-center ${iconBg}`}>
                {IconComponent && IconComponent(`size-6 ${iconColor}`)}
            </div>
        </Link>
    )
}

export default DashboardStatCard
