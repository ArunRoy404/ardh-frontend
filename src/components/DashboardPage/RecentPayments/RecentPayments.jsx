import React from "react"
import { ArrowRight } from "lucide-react"
import usePaymentsStore from "../../../dummyDataStore/usePaymentsStore"
import { getStatusBadge } from "../../../dummyData/openMaintenance"

const RecentPayments = () => {
    const { recentPayments } = usePaymentsStore()

    return (
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
        </div>
    )
}

export default RecentPayments
