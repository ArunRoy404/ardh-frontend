import UserAction from "@/components/UserManagement/UserManagementList/UserAction/UserAction"
import CommonAvatar from "../shared/CommonAvatar/CommonAvatar"

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
    case "inactive":
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

export const userColumns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <CommonAvatar src={row.original.avatar} alt={row.original.name} />
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
    accessorKey: "email",
    header: "Email",
    cell: ({ getValue }) => (
      <span className="text-dark-accent">{getValue()}</span>
    ),
  },
  {
    accessorKey: "city",
    header: "City",
    cell: ({ getValue }) => (
      <span className="text-dark-gray">{getValue()}</span>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
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
    cell: ({ row }) => <UserAction user={row.original} />,
  },
]
