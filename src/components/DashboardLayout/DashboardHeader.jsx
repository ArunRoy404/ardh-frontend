import { SidebarTrigger } from "../ui/sidebar"
import LogoutIcon from "../SvgIcons/LogoutIcon"
import { NotificationsIcon } from "../SvgIcons/NotificationsIcon"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const DashboardHeader = () => {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="p-4!" />
            </div>
            
            <div className="flex items-center gap-4">
                <button className="relative cursor-pointer text-muted-foreground hover:text-foreground flex items-center justify-center">
                    <NotificationsIcon className="size-6" />
                    <span className="absolute top-0 right-1 flex size-2 rounded-full bg-red-500"></span>
                </button>
                
                <Avatar className="cursor-pointer size-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
                    <AvatarFallback>PR</AvatarFallback>
                </Avatar>
                
                <button className="flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer">
                    <LogoutIcon className="size-6" />
                </button>
            </div>
        </header>
    )
}

export default DashboardHeader 