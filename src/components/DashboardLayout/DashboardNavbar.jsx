import { SidebarTrigger } from "../ui/sidebar"
import LogoutIcon from "../SvgIcons/LogoutIcon"
import { NotificationsIcon } from "../SvgIcons/NotificationsIcon"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { Link } from "react-router"
import { toast } from "sonner"

const DashboardNavbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white  border-b flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="p-4!" />
            </div>

            <div className="flex items-center gap-4">
                <Link to="/notifications" className="relative cursor-pointer text-muted-foreground hover:text-foreground flex items-center justify-center">
                    <NotificationsIcon className="size-6" />
                    <span className="absolute top-0 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-primary-foreground">3</span>
                </Link>

                <div className="flex items-center justify-center gap-2">
                    <Avatar className="cursor-pointer size-8">
                        <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
                        <AvatarFallback>PR</AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-dark-gray">John Doe</p>
                </div>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger className="flex items-center justify-center text-destructive hover:text-destructive/80 cursor-pointer" onClick={() => toast.warning('Functionality not implemented yet.')}>
                            <LogoutIcon className="size-6" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Logout</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </nav>
    )
}

export default DashboardNavbar 