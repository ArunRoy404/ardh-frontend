import { useState } from "react"
import { Eye, Pencil, Trash2 } from "lucide-react"
import CommonAction from "@/components/shared/CommonAction/CommonAction"
import CommonDeleteDialog from "@/components/shared/CommonDeleteDialog/CommonDeleteDialog"

const ReportIncomeAction = ({ record }) => {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

    const items = [
        {
            icon: Eye,
            label: "View Details",
            link: `/income/${record.id}`,
        },
        {
            icon: Pencil,
            label: "Edit",
            link: `/income/${record.id}/edit`,
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
                itemName={`${record.type} - ${record.amount} from ${record.tenant}`}
                itemType="Income Record"
            />
        </>
    )
}

export default ReportIncomeAction
