import MaintenanceAction from "@/components/Maintenance/MaintenanceList/MaintenanceAction/MaintenanceAction"
import { getPriorityBadge, getStatusBadge } from "@/dummyData/maintenanceRecords"

// ─── Status Badge ────────────────────────────────────────────────────────────

const StatusBadge = ({ status }) => (
  <span className={`${getStatusBadge(status)} px-2.5 py-0.5 rounded-[6px] text-xs font-semibold inline-block`}>
    {status}
  </span>
)

// ─── Priority Badge ──────────────────────────────────────────────────────────

const PriorityBadge = ({ priority }) => (
  <span className={`${getPriorityBadge(priority)} px-2.5 py-0.5 rounded-[6px] text-xs font-semibold inline-block`}>
    {priority}
  </span>
)

// ─── Column Definitions ──────────────────────────────────────────────────────

export const maintenanceColumns = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ getValue }) => (
      <span className="text-primary font-semibold">{getValue()}</span>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ getValue }) => (
      <span className="text-dark-gray">{getValue()}</span>
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
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => <PriorityBadge priority={row.getValue("priority")} />,
  },
  {
    accessorKey: "vendor",
    header: "Vendor",
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
    cell: ({ row }) => <MaintenanceAction maintenance={row.original} />,
  },
]
