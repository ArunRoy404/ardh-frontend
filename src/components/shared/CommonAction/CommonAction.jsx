import { useState, useRef, useEffect } from "react"
import { MoreHorizontal } from "lucide-react"

const CommonAction = ({ children }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={(e) => {
          e.stopPropagation()
          setOpen((prev) => !prev)
        }}
        className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-500 cursor-pointer"
      >
        <MoreHorizontal className="w-5 h-5" />
      </button>

      {open && (
        <div
          className="absolute right-0 top-10 z-50 w-36 bg-white border border-[#E2E8F0] rounded-xl shadow-lg p-1"
          onClick={(e) => e.stopPropagation()}
        >
          {typeof children === "function"
            ? children({ close: () => setOpen(false) })
            : children}
        </div>
      )}
    </div>
  )
}

export default CommonAction
