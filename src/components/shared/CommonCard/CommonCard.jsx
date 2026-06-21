import { cn } from "@/lib/utils"

const CommonCard = ({ children, className, title, headerChild }) => {
    return (
        <div className={cn(
            "bg-card p-6 rounded-[16px] shadow-[var(--card-shadow)] border border-muted flex flex-col justify-between min-h-[350px]",
            "hover:shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] transition-shadow duration-300",
            className
        )}>

            {
                (title || headerChild) && (
                    <div className="flex items-center justify-between mb-4">
                        {!!title && (
                            <h2
                                className="text-xl font-semibold text-foreground"
                            >
                                {title}
                            </h2>
                        )}

                        {!!headerChild && headerChild}
                    </div>
                )
            }
 
            {children}
        </div>
    )
}

export default CommonCard