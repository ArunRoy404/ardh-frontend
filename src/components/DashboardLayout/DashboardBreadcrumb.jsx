import React from "react"
import { useLocation, Link } from "react-router"
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const pathNameMap = {
    "/": "Dashboard",
    "/notifications": "Notifications",
    "/buildings": "Buildings",
    "/dashboard/buildings": "Buildings",
    "/apartments": "Apartments",
    "/tenants": "Tenants",
    "/owners": "Owners",
    "/income": "Income",
    "/expenses": "Expenses",
    "/maintenance": "Maintenance",
    "/equipment": "Equipment",
    "/vendors": "Vendors",
    "/reports": "Reports",
    "/user-management": "User Management",
    "/settings": "Settings",
}

const DashboardBreadcrumb = () => {
    const { pathname } = useLocation()

    const segments = pathname.split("/").filter(Boolean)

    // Build breadcrumb items starting with Dashboard root
    const items = [
        {
            label: "Dashboard",
            path: "/",
            isLast: segments.length === 0,
        },
    ]

    let currentPath = ""
    segments.forEach((segment, index) => {
        currentPath += `/${segment}`
        
        // Skip duplicate "Dashboard" segment
        if (currentPath === "/dashboard") {
            return
        }

        const isLast = index === segments.length - 1
        
        // If the path is /dashboard/buildings, redirect breadcrumb link to /buildings
        let resolvedPath = currentPath
        if (currentPath === "/dashboard/buildings") {
            resolvedPath = "/buildings"
        }

        let label = pathNameMap[currentPath] || segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase())

        // Map building ID to the readable building name
        if (currentPath.startsWith("/dashboard/buildings/")) {
            label = "Sunrise Tower"
        }

        items.push({
            label,
            path: resolvedPath,
            isLast,
        })
    })

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {items.map((item, index) => (
                    <React.Fragment key={item.path}>
                        {index > 0 && <BreadcrumbSeparator />}
                        <BreadcrumbItem>
                            {item.isLast ? (
                                <BreadcrumbPage>{item.label}</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink render={<Link to={item.path} />}>
                                    {item.label}
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default DashboardBreadcrumb
