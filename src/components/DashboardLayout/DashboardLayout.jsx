import { AppSidebar } from "@/components/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { Outlet } from "react-router"
import DashboardHeader from "./DashboardNavbar"

const DashboardLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <DashboardHeader />
                <div className="flex flex-col gap-4 p-4 w-full max-w-480 mx-auto">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default DashboardLayout;
