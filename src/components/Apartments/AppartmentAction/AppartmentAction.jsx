import { Eye, Pencil, Trash2 } from "lucide-react"
import { toast } from "sonner"
import CommonAction from "@/components/shared/CommonAction/CommonAction"
import CommonActionitem from "@/components/shared/CommonAction/CommonActionitem"

const ApartmentAction = ({ apartment }) => {
    return (
        <CommonAction>
            {({ close }) => (
                <>
                    <CommonActionitem
                        onClick={() => {
                            toast.info(`Viewing details for Flat ${apartment.flat} — Not implemented yet`)
                            close()
                        }}
                    >
                        <Eye className="w-3.5 h-3.5 text-dark-gray" />
                        View Details
                    </CommonActionitem>
                    <CommonActionitem
                        onClick={() => {
                            toast.info(`Editing Flat ${apartment.flat} — Not implemented yet`)
                            close()
                        }}
                    >
                        <Pencil className="w-3.5 h-3.5 text-dark-gray" />
                        Edit Flat
                    </CommonActionitem>
                    <CommonActionitem
                        className="text-destructive hover:bg-red-50"
                        onClick={() => {
                            toast.error(`Deleting Flat ${apartment.flat} — Not implemented yet`)
                            close()
                        }}F
                    >
                        <Trash2 className="w-3.5 h-3.5 text-destructive" />
                        Delete Flat
                    </CommonActionitem>
                </>
            )}
        </CommonAction>
    )
}

export default ApartmentAction
