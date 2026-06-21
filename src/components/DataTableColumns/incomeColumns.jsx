import IncomeAction from "@/components/Income/IncomeList/IncomeAction/IncomeAction"

// ─── Status Badge ────────────────────────────────────────────────────────────

const StatusBadge = ({ status }) => {
  let badgeClass
  switch (status.toLowerCase()) {
    case "paid":
      badgeClass = "bg-success-tag-bg text-success-tag-text border-success-tag-border"
      break
    case "pending":
      badgeClass = "bg-progress-tag-bg text-progress-tag-text border-progress-tag-border"
      break
    case "overdue":
      badgeClass = "bg-warning-tag-bg text-warning-tag-text border-warning-tag-border"
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

export const incomeColumns = [
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ getValue }) => (
      <span className="text-primary font-semibold">{getValue()}</span>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ getValue }) => (
      <span className="text-dark-accent font-medium">{getValue()}</span>
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
    accessorKey: "building",
    header: "Building",
    cell: ({ getValue }) => (
      <span className="text-dark-gray">{getValue()}</span>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) => (
      <span className="text-dark-gray">{getValue()}</span>
    ),
  },
  {
    accessorKey: "method",
    header: "Method",
    cell: ({ getValue }) => (
      <span className="text-dark-gray">{getValue()}</span>
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
    cell: ({ row }) => <IncomeAction income={row.original} />,
  },
]
