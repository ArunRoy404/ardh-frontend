import { useState } from "react"
import { Eye, Pencil, Trash2 } from "lucide-react"
import CommonAction from "@/components/shared/CommonAction/CommonAction"
import CommonDeleteDialog from "@/components/shared/CommonDeleteDialog/CommonDeleteDialog"

const ApartmentAction = ({ apartment }) => {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

    const items = [
        {
            icon: Eye,
            label: "View Details",
            link: `/apartments/${apartment.id}`,
        },
        {
            icon: Pencil,
            label: "Edit Flat",
            link: `/apartments/${apartment.id}/edit`,
        },
        {
            icon: Trash2,
            label: "Delete Flat",
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
                itemName={`Flat ${apartment.flat}`}
                itemType="Flat"
            />
        </>
    )
}

export default ApartmentAction
