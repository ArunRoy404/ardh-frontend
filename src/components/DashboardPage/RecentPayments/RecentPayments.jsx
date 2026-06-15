import usePaymentsStore from "../../../dummyDataStore/usePaymentsStore"
import { getStatusBadge } from "../../../dummyData/openMaintenance"
import CommonCard from "@/components/shared/CommonCard/CommonCard"
import { LinkButtonCard } from "@/components/shared/LinkButton/LinkButtonCard"

const RecentPayments = () => {
    const { recentPayments } = usePaymentsStore()

    return (
        <CommonCard
            title="Recent Payments"
            headerChild={
                <LinkButtonCard to="/income">
                    View All
                </LinkButtonCard>
            }
            className="min-h-0"
        >
            <div
                className="flex flex-col divide-y divide-slate-100 font-sans"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
                {recentPayments.map((payment, idx) => (
                    <div key={idx} className="flex items-center justify-between py-3">
                        <div className="flex flex-col gap-0.5">
                            <span className="text-sm font-medium text-foreground">
                                {payment.name}
                            </span>
                            <span className="text-xs text-dark-gray">
                                {payment.type} • {payment.date}
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold text-dark-accent">
                                {payment.amount}
                            </span>
                            <span
                                className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${getStatusBadge(payment.status)}`}
                            >
                                {payment.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </CommonCard>
    )
}

export default RecentPayments
