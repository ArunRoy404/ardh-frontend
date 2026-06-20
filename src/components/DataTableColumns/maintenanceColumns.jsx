import MaintenanceAction from "@/components/Maintenance/MaintenanceList/MaintenanceAction/MaintenanceAction"

// ─── Status Badge ────────────────────────────────────────────────────────────

const StatusBadge = ({ status }) => (
  <span className="bg-open-tag-bg text-open-tag-text border border-open-tag-border px-2.5 py-0.5 rounded-[6px] text-xs font-semibold inline-block">
    {status}
  </span>
)

// ─── Column Definitions ──────────────────────────────────────────────────────

export const maintenanceColumns = [
  {
    accessorKey: "ticketId",
    header: "Ticket ID",
    cell: ({ getValue }) => (
      <span className="text-primary font-semibold">{getValue()}</span>
    ),
  },
  {
    accessorKey: "issue",
    header: "Issue",
    cell: ({ getValue }) => (
      <span className="text-dark-accent font-medium">{getValue()}</span>
    ),
  },
  {
    accessorKey: "flat",
    header: "Flat",
    cell: ({ getValue }) => (
      <span className="text-dark-gray">{getValue()}</span>
    ),
  },
  {
    accessorKey: "type",
    header: "Category",
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => <MaintenanceAction maintenance={row.original} />,
  },
]
