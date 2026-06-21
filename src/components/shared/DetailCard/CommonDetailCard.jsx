import { cn } from "@/lib/utils"

const CommonDetailCard = ({
  children,
  title,
  className,
  titleClassName,
  cardClassName,
}) => {
  const card = (
    <div className={cn(
      "bg-stat-bg rounded-md p-6 border border text-sm font-['Poppins']",
      cardClassName
    )}>
      {children}
    </div>
  )

  if (title) {
    return (
      <div className={cn("space-y-3", className)}>
        <h3 className={cn("text-lg font-bold text-primary font-serif", titleClassName)}>
          {title}
        </h3>
        {card}
      </div>
    )
  }

  return card
}

export default CommonDetailCard
