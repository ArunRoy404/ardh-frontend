import { cn } from "@/lib/utils"

const CommonActionitem = ({ icon, children, onClick, className }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        onClick?.(e)
      }}
      className={cn(
        "w-full text-left px-3 py-2 text-xs rounded-lg flex items-center gap-2 transition-colors",
        className || "text-dark-accent hover:bg-slate-50"
      )}
    >
      {children}
    </button>
  )
}

export default CommonActionitem
