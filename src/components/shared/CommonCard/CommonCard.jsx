import { cn } from "@/lib/utils"

const CommonCard = ({ children, className, title, headerChild }) => {
    return (
        <div className={cn(
            "bg-white p-6 rounded-[16px] shadow-[0_0_10px_0_rgba(0,0,0,0.10)] border border-slate-50 flex flex-col justify-between min-h-[350px]",
            className
        )}>

            <div className="flex items-center justify-between mb-4">
                <h2
                    className="text-xl font-semibold text-foreground"
                >
                   {title}
                </h2>
                
                {headerChild}
            </div>

            {children}
        </div>
    )
}

export default CommonCard