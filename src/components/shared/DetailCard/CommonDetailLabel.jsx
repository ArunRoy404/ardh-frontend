import { cn } from "@/lib/utils"

const CommonDetailLabel = ({
  label,
  value,
  render,
  valueClassName,
  labelClassName,
  className,
}) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className={cn("text-dark-gray font-normal min-w-[100px]", labelClassName)}>
        {label} :
      </span>
      {render ? (
        render(value)
      ) : (
        <span className={cn("text-dark-accent font-semibold", valueClassName)}>
          {value}
        </span>
      )}
    </div>
  )
}

export default CommonDetailLabel
