import { Eye, Pencil, Trash2, MoreHorizontal } from "lucide-react"
import { toast } from "sonner"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

const MaintenanceAction = ({ maintenance }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <button className="p-1 hover:bg-muted rounded-full transition-colors text-dark-gray cursor-pointer" />
                }
            >
                <MoreHorizontal className="w-5 h-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                side="bottom"
                sideOffset={8}
                className="w-36 bg-popover border border-border rounded-xl shadow-lg p-1"
            >
                <DropdownMenuItem
                    onClick={() => {
                        toast.info(`Viewing maintenance ${maintenance.ticketId} — Not implemented yet`)
                    }}className="px-3 py-2 text-xs rounded-lg flex items-center gap-2 transition-colors text-dark-accent hover:bg-muted focus:bg-muted cursor-pointer"
                    >
                        <Eye className="w-3.5 h-3.5 text-dark-gray" />
                        View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => {
                            toast.info(`Editing maintenance ${maintenance.ticketId} — Not implemented yet`)
                        }}
                        className="px-3 py-2 text-xs rounded-lg flex items-center gap-2 transition-colors text-dark-accent hover:bg-muted focus:bg-muted cursor-pointer"
                >
                    <Pencil className="w-3.5 h-3.5 text-dark-gray" />
                    Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                    variant="destructive"
                    onClick={() => {
                        toast.error(`Deleting maintenance ${maintenance.ticketId} — Not implemented yet`)
                    }}
                    className="px-3 py-2 text-xs rounded-lg flex items-center gap-2 transition-colors hover:bg-destructive/10 focus:bg-destructive/10 cursor-pointer"
                >
                    <Trash2 className="w-3.5 h-3.5 text-destructive" />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default MaintenanceAction
