import { Eye, Pencil, Trash2 } from "lucide-react"
import { toast } from "sonner"
import CommonTable from "@/components/shared/CommonTable/CommonTable"

export const actionItems = [
  {
    label: "View Details",
    icon: <Eye className="w-3.5 h-3.5 text-dark-gray" />,
    onClick: (row) => toast.info(`Viewing maintenance ${row.ticketId} — Not implemented yet`),
  },
  {
    label: "Edit",
    icon: <Pencil className="w-3.5 h-3.5 text-dark-gray" />,
    onClick: (row) => toast.info(`Editing maintenance ${row.ticketId} — Not implemented yet`),
  },
  {
    label: "Delete",
    icon: <Trash2 className="w-3.5 h-3.5 text-destructive" />,
    className: "text-destructive hover:bg-red-50",
    onClick: (row) => toast.error(`Deleting maintenance ${row.ticketId} — Not implemented yet`),
  },
]

export const maintenanceColumns = [
  {
    key: "ticketId",
    label: "Ticket ID",
    className: "text-primary font-semibold",
  },
  {
    key: "issue",
    label: "Issue",
    className: "text-dark-accent font-medium",
  },
  { key: "flat", label: "Flat", className: "text-dark-gray" },
  { key: "type", label: "Category", className: "text-dark-gray" },
  { key: "tenant", label: "Tenant", className: "text-dark-accent" },
  {
    key: "status",
    label: "Status",
    className: "",
    render: (row) => (
      <span className="bg-open-tag-bg text-open-tag-text border border-open-tag-border px-2.5 py-0.5 rounded-[6px] text-xs font-semibold inline-block">
        {row.status}
      </span>
    ),
  },
]

const MaintenanceTable = ({ data, loading = false }) => {
  return (
    <CommonTable
      columns={maintenanceColumns}
      data={data}
      actions={actionItems}
      searchable={true}
      itemsPerPage={10}
      emptyMessage="No maintenance requests found."
      loading={loading}
      actionKey="id"
    />
  )
}

export default MaintenanceTable
