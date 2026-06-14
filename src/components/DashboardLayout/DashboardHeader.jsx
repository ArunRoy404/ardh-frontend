import { SidebarTrigger } from "../ui/sidebar"
import LogoutIcon from "../SvgIcons/LogoutIcon"
import { NotificationsIcon } from "../SvgIcons/NotificationsIcon"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

const DashboardHeader = () => {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="p-4!" />
            </div>

            <div className="flex items-center gap-4">
                <button className="relative cursor-pointer text-muted-foreground hover:text-foreground flex items-center justify-center">
                    <NotificationsIcon className="size-6" />
                    <span className="absolute top-0 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">3</span>
                </button>

                <div className="flex items-center justify-center gap-2">
                    <Avatar className="cursor-pointer size-8">
                        <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
                        <AvatarFallback>PR</AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-dark-gray">John Doe</p>
                </div>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger className="flex items-center justify-center text-red-500 hover:text-red-600 cursor-pointer">
                            <LogoutIcon className="size-6" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Logout</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </header>
    )
}

export default DashboardHeader 