import { useState } from "react"
import { Eye, Pencil, Trash2 } from "lucide-react"
import { toast } from "sonner"
import CommonAction from "@/components/shared/CommonAction/CommonAction"
import CommonDeleteDialog from "@/components/shared/CommonDeleteDialog/CommonDeleteDialog"

const IncomeAction = ({ income }) => {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

    const items = [
        {
            icon: Eye,
            label: "View Details",
            link: `/income/${income.id}`,
        },
        {
            icon: Pencil,
            label: "Edit",
            onClick: () => {
                toast.info(`Editing ${income.type} from ${income.tenant} — Not implemented yet`)
            },
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
                itemName={`${income.type} - ${income.tenant}`}
                itemType="Income Record"
            />
        </>
    )
}

export default IncomeAction
