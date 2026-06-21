import TenantAction from "@/components/Tenants/TenantsList/TenantAction/TenantAction"

// ─── Status Badge ────────────────────────────────────────────────────────────

const StatusBadge = ({ status }) => {
  let badgeClass
  switch (status.toLowerCase()) {
    case "active":
      badgeClass = "bg-success-tag-bg text-success-tag-text border-success-tag-border"
      break
    case "pending":
      badgeClass = "bg-progress-tag-bg text-progress-tag-text border-progress-tag-border"
      break
    case "moved out":
    case "movedout":
      badgeClass = "bg-slate-100 text-slate-500 border-slate-300"
      break
    default:
      badgeClass = "bg-open-tag-bg text-open-tag-text border-open-tag-border"
  }
  return (
    <span
      className={`px-2.5 py-0.5 rounded-[6px] text-xs font-semibold inline-block border ${badgeClass}`}
    >
      {status}
    </span>
  )
}

// ─── Column Definitions ──────────────────────────────────────────────────────

export const tenantColumns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ getValue }) => (
      <span className="text-primary font-semibold">{getValue()}</span>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ getValue }) => (
      <span className="text-dark-accent font-medium">{getValue()}</span>
    ),
  },
  {
    accessorKey: "building",
    header: "Building",
    cell: ({ getValue }) => (
      <span className="text-dark-gray">{getValue()}</span>
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
    accessorKey: "moveIn",
    header: "Move in",
    cell: ({ getValue }) => (
      <span className="text-dark-gray">{getValue()}</span>
    ),
  },
  {
    accessorKey: "rent",
    header: "Rent",
    cell: ({ getValue }) => (
      <span className="text-dark-gray">{getValue()}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => <StatusBadge status={row.getValue("status")} />,
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => <TenantAction tenant={row.original} />,
  },
]
