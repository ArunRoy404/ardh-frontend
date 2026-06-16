import { Eye, Pencil, Trash2 } from "lucide-react"
import { toast } from "sonner"
import CommonTable from "@/components/shared/CommonTable/CommonTable"

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

export const apartmentsColumns = [
  { key: "flat", label: "Flat", className: "text-dark-accent font-medium" },
  { key: "type", label: "Type", className: "text-dark-gray" },
  { key: "floor", label: "Floor", className: "text-dark-gray" },
  { key: "tenant", label: "Tenant", className: "text-dark-accent" },
  { key: "rent", label: "Rent", className: "text-dark-accent font-medium" },
  {
    key: "status",
    label: "Status",
    className: "",
    render: (row) => {
      const isOccupied = row.status === "Occupied"
      return (
        <span
          className={`px-2.5 py-0.5 rounded-[6px] text-xs font-semibold inline-block border ${
            isOccupied
              ? "bg-success-tag-bg text-success-tag-text border-success-tag-border"
              : "bg-progress-tag-bg text-progress-tag-text border-progress-tag-border"
          }`}
        >
          {row.status}
        </span>
      )
    },
  },
]

const ApartmentsTable = ({ data, loading = false }) => {
  return (
    <CommonTable
      columns={apartmentsColumns}
      data={data}
      actions={actionItems}
      searchable={true}
      itemsPerPage={10}
      emptyMessage="No apartments found."
      loading={loading}
      actionKey="id"
    />
  )
}

export default ApartmentsTable
