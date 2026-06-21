import { Eye, Pencil, Trash2 } from "lucide-react"
import { toast } from "sonner"
import CommonAction from "@/components/shared/CommonAction/CommonAction"

const MaintenanceAction = ({ maintenance }) => {
    const items = [
        {
            icon: Eye,
            label: "View Details",
            link: `/maintenance/${maintenance.id}`,
        },
        {
            icon: Pencil,
            label: "Edit",
            onClick: () => {
                toast.info(`Editing maintenance ${maintenance.ticketId} — Not implemented yet`)
            },
        },
        {
            icon: Trash2,
            label: "Delete",
            variant: "destructive",
            onClick: () => {
                toast.error(`Deleting maintenance ${maintenance.ticketId} — Not implemented yet`)
            },
        },
    ]

    return <CommonAction items={items} />
}

export default MaintenanceAction
