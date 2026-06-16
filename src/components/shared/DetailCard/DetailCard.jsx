import { cn } from "@/lib/utils"

const DetailCard = ({ children, className }) => {
    return (
        <div className={cn(
            "bg-stat-bg rounded-md p-6 border border text-sm font-['Poppins']",
            className
        )}>
            {children}
        </div>
    )
}

export default DetailCard