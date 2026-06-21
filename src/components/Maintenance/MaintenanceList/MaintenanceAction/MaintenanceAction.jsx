import { useState } from "react"
import { Eye, Pencil, Trash2 } from "lucide-react"
import CommonAction from "@/components/shared/CommonAction/CommonAction"
import CommonDeleteDialog from "@/components/shared/CommonDeleteDialog/CommonDeleteDialog"

const MaintenanceAction = ({ maintenance }) => {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
    const slug = maintenance.title?.toLowerCase().replace(/\s+/g, "-") || "item"

    const items = [
        {
            icon: Eye,
            label: "View Details",
            link: `/maintenance/${slug}`,
        },
        {
            icon: Pencil,
            label: "Edit",
            link: `/maintenance/${slug}/edit`,
        },
        {
            icon: Trash2,
            label: "Delete",
            variant: "destructive",
            onClick: () => {
                setDeleteDialogOpen(true)
            },
        },
    ]

    return (
        <>
            <CommonAction items={items} />
            <CommonDeleteDialog
                open={deleteDialogOpen}
                onOpenChange={setDeleteDialogOpen}
                itemName={`${maintenance.title}`}
                itemType="Maintenance"
            />
        </>
    )
}

export default MaintenanceAction
