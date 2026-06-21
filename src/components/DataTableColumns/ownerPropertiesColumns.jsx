import ApartmentAction from "@/components/Apartments/AppartmentAction/AppartmentAction"

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

export const ownerPropertiesColumns = [
  {
    accessorKey: "flat",
    header: "Flat",
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
    accessorKey: "type",
    header: "Type",
    cell: ({ getValue }) => (
      <span className="text-dark-gray">{getValue()}</span>
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
    cell: ({ row }) => <ApartmentAction apartment={row.original} />,
  },
]
