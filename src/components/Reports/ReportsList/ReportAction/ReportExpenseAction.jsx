import { useState } from "react"
import { Eye, Pencil, Trash2 } from "lucide-react"
import CommonAction from "@/components/shared/CommonAction/CommonAction"
import CommonDeleteDialog from "@/components/shared/CommonDeleteDialog/CommonDeleteDialog"

const ReportExpenseAction = ({ record }) => {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

    const items = [
        {
            icon: Eye,
            label: "View Details",
            link: `/expenses/${record.id}`,
        },
        {
            icon: Pencil,
            label: "Edit",
            link: `/expenses/${record.id}/edit`,
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
                itemName={`${record.category} - ${record.amount} for ${record.description}`}
                itemType="Expense Record"
            />
        </>
    )
}

export default ReportExpenseAction
