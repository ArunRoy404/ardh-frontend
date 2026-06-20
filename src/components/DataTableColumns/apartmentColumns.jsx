"use client"

import { useState, useRef, useEffect } from "react"
import { Eye, Pencil, Trash2, MoreHorizontal } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

// ─── Action Items (reusable by both table & cards) ───────────────────────────

export const actionItems = [
  {
    label: "View Details",
    icon: <Eye className="w-3.5 h-3.5 text-dark-gray" />,
    onClick: (row) => toast.info(`Viewing details for Flat ${row.flat} — Not implemented yet`),
  },
  {
    label: "Edit Flat",
    icon: <Pencil className="w-3.5 h-3.5 text-dark-gray" />,
    onClick: (row) => toast.info(`Editing Flat ${row.flat} — Not implemented yet`),
  },
  {
    label: "Delete Flat",
    icon: <Trash2 className="w-3.5 h-3.5 text-destructive" />,
    className: "text-destructive hover:bg-red-50",
    onClick: (row) => toast.error(`Deleting Flat ${row.flat} — Not implemented yet`),
  },
]

// ─── Actions Cell (dropdown per row) ─────────────────────────────────────────

const ActionsCell = ({ row }) => {
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

  const apartment = row.original

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
          {actionItems.map((action, actIdx) => (
            <button
              key={actIdx}
              onClick={(e) => {
                e.stopPropagation()
                action.onClick?.(apartment)
                setOpen(false)
              }}
              className={cn(
                "w-full text-left px-3 py-2 text-xs rounded-lg flex items-center gap-2 transition-colors",
                action.className || "text-dark-accent hover:bg-slate-50"
              )}
            >
              {action.icon}
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Status Badge ────────────────────────────────────────────────────────────

const StatusBadge = ({ status }) => {
  const isOccupied = status === "Occupied"
  return (
    <span
      className={`px-2.5 py-0.5 rounded-[6px] text-xs font-semibold inline-block border ${
        isOccupied
          ? "bg-success-tag-bg text-success-tag-text border-success-tag-border"
          : "bg-progress-tag-bg text-progress-tag-text border-progress-tag-border"
      }`}
    >
      {status}
    </span>
  )
}

// ─── Column Definitions ──────────────────────────────────────────────────────

export const apartmentColumns = [
  {
    accessorKey: "flat",
    header: "Flat",
    cell: ({ getValue }) => (
      <span className="text-dark-accent font-medium">{getValue()}</span>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ getValue }) => (
      <span className="text-dark-gray">{getValue()}</span>
    ),
  },
  {
    accessorKey: "floor",
    header: "Floor",
    cell: ({ getValue }) => (
      <span className="text-dark-gray">{getValue()}</span>
    ),
  },
  {
    accessorKey: "tenant",
    header: "Tenant",
    cell: ({ getValue }) => (
      <span className="text-dark-accent">{getValue()}</span>
    ),
  },
  {
    accessorKey: "rent",
    header: "Rent",
    cell: ({ getValue }) => (
      <span className="text-dark-accent font-medium">{getValue()}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => <ActionsCell row={row} />,
  },
]
