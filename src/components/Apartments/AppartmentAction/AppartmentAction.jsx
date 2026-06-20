import { Eye, Pencil, Trash2, MoreHorizontal } from "lucide-react"
import { toast } from "sonner"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

const ApartmentAction = ({ apartment }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <button className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-500 cursor-pointer" />
                }
            >
                <MoreHorizontal className="w-5 h-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                side="bottom"
                sideOffset={8}
                className="w-36 bg-white border border-[#E2E8F0] rounded-xl shadow-lg p-1"
            >
                <DropdownMenuItem
                    onClick={() => {
                        toast.info(`Viewing details for Flat ${apartment.flat} — Not implemented yet`)
                    }}
                    className="px-3 py-2 text-xs rounded-lg flex items-center gap-2 transition-colors text-dark-accent! hover:bg-slate-50 focus:bg-slate-50 cursor-pointer"
                >
                    <Eye className="w-3.5 h-3.5 text-dark-gray!" />
                    View Details
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => {
                        toast.info(`Editing Flat ${apartment.flat} — Not implemented yet`)
                    }}
                    className="px-3 py-2 text-xs rounded-lg flex items-center gap-2 transition-colors text-dark-accent! hover:bg-slate-50 focus:bg-slate-50 cursor-pointer"
                >
                    <Pencil className="w-3.5 h-3.5 text-dark-gray!" />
                    Edit Flat
                </DropdownMenuItem>
                <DropdownMenuItem
                    variant="destructive"
                    onClick={() => {
                        toast.error(`Deleting Flat ${apartment.flat} — Not implemented yet`)
                    }}
                    className="px-3 py-2 text-xs rounded-lg flex items-center gap-2 transition-colors hover:bg-red-50 focus:bg-red-50 cursor-pointer"
                >
                    <Trash2 className="w-3.5 h-3.5 text-destructive" />
                    Delete Flat
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ApartmentAction
