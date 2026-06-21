import { useState } from "react"
import { Eye, Pencil, Trash2 } from "lucide-react"
import CommonAction from "@/components/shared/CommonAction/CommonAction"
import CommonDeleteDialog from "@/components/shared/CommonDeleteDialog/CommonDeleteDialog"

const UserAction = ({ user }) => {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

    const items = [
        {
            icon: Eye,
            label: "View Details",
            link: `/user-management/${user.id}`,
        },
        {
            icon: Pencil,
            label: "Edit",
            link: `/user-management/${user.id}/edit`,
        },
        {
            icon: Trash2,
            label: "Delete",
            variant: "destructive",
            onClick: () => setDeleteDialogOpen(true),
        },
    ]

    return (
        <>
            <CommonAction items={items} />
            <CommonDeleteDialog
                open={deleteDialogOpen}
                onOpenChange={setDeleteDialogOpen}
                itemName={`${user.name} - ${user.role}`}
                itemType="User"
            />
        </>
    )
}

export default UserAction
