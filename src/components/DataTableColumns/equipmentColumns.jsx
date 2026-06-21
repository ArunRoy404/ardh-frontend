import EquipmentAction from "@/components/Equipment/EquipmentList/EquipmentAction/EquipmentAction"

// ─── Status Badge ────────────────────────────────────────────────────────────

const StatusBadge = ({ status }) => {
  let badgeClass
  switch (status.toLowerCase()) {
    case "operational":
      badgeClass = "bg-success-tag-bg text-success-tag-text border-success-tag-border"
      break
    case "under maintenance":
    case "undermaintenance":
      badgeClass = "bg-medium-tag-bg text-medium-tag-text border-medium-tag-border"
      break
    case "out of order":
    case "outoforder":
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

export const equipmentColumns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ getValue }) => (
      <span className="text-primary font-semibold">{getValue()}</span>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
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
    accessorKey: "brand",
    header: "Brand",
    cell: ({ getValue }) => (
      <span className="text-dark-gray">{getValue()}</span>
    ),
  },
  {
    accessorKey: "nextService",
    header: "Next Service",
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
    cell: ({ row }) => <EquipmentAction equipment={row.original} />,
  },
]
