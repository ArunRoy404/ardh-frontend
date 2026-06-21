import { useNavigate } from "react-router"
import { MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

const CommonAction = ({ items = [] }) => {
    const navigate = useNavigate()

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
            >
                {items.map((item, index) => {
                    const Icon = item.icon

                    // Link variant — navigates using React Router
                    if (item.link) {
                        return (
                            <DropdownMenuItem
                                key={index}
                                onClick={() => navigate(item.link)}
                                className="px-3 py-2 text-xs rounded-lg flex items-center gap-2 transition-colors text-dark-accent! hover:bg-muted focus:bg-muted cursor-pointer"
                            >
                                <Icon className="w-3.5 h-3.5 text-dark-gray!" />
                                {item.label}
                            </DropdownMenuItem>
                        )
                    }

                    // Destructive variant
                    if (item.variant === "destructive") {
                        return (
                            <DropdownMenuItem
                                key={index}
                                variant="destructive"
                                onClick={item.onClick}
                                className="hover:bg-destructive/10 focus:bg-destructive/10 text-destructive!"
                            >
                                <Icon className="w-3.5 h-3.5 text-destructive" />
                                {item.label}
                            </DropdownMenuItem>
                        )
                    }

                    // Default — button with onClick
                    return (
                        <DropdownMenuItem
                            key={index}
                            onClick={item.onClick}
                            className="px-3 py-2 text-xs rounded-lg flex items-center gap-2 transition-colors text-dark-accent! hover:bg-muted focus:bg-muted cursor-pointer"
                        >
                            <Icon className="w-3.5 h-3.5 text-dark-gray!" />
                            {item.label}
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default CommonAction
