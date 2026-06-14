"use client"

import * as React from "react"
import { Link, useLocation } from "react-router"

import { Logo } from "@/components/shared/Logo/Logo"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { DashboardIcon } from "@/components/SvgIcons/DashboardIcon"
import { NotificationsIcon } from "@/components/SvgIcons/NotificationsIcon"
import { BuildingsIcon } from "@/components/SvgIcons/BuildingsIcon"
import { ApartmentsIcon } from "@/components/SvgIcons/ApartmentsIcon"
import { TenantsIcon } from "@/components/SvgIcons/TenantsIcon"
import { OwnersIcon } from "@/components/SvgIcons/OwnersIcon"
import { IncomeIcon } from "@/components/SvgIcons/IncomeIcon"
import { ExpensesIcon } from "@/components/SvgIcons/ExpensesIcon"
import { MaintenanceIcon } from "@/components/SvgIcons/MaintenanceIcon"
import { EquipmentIcon } from "@/components/SvgIcons/EquipmentIcon"
import { VendorsIcon } from "@/components/SvgIcons/VendorsIcon"
import { ReportsIcon } from "@/components/SvgIcons/ReportsIcon"
import { UserManagementIcon } from "@/components/SvgIcons/UserManagementIcon"
import { SettingsIcon } from "@/components/SvgIcons/SettingsIcon"
import { navSections } from "@/data/navData"
import { cn } from "@/lib/utils"

const iconMap = {
  "Dashboard Overview": DashboardIcon,
  "Notifications": NotificationsIcon,
  "Buildings": BuildingsIcon,
  "Apartments": ApartmentsIcon,
  "Tenants": TenantsIcon,
  "Owners": OwnersIcon,
  "Income": IncomeIcon,
  "Expenses": ExpensesIcon,
  "Maintenance": MaintenanceIcon,
  "Equipment": EquipmentIcon,
  "Vendors": VendorsIcon,
  "Reports": ReportsIcon,
  "User Management": UserManagementIcon,
  "Settings": SettingsIcon,
}

export function AppSidebar({
  ...props
}) {
  const location = useLocation()
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="px-2 py-3">
        <Logo
          collapsed={isCollapsed}
          size={isCollapsed ? "sm" : "md"}
          className={cn(
            isCollapsed ? "mx-auto" : "px-1"
          )}
        />
      </SidebarHeader>
      <SidebarContent>
        {navSections.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel className="group-data-[collapsible=icon]:pointer-events-none">{section.title}</SidebarGroupLabel>
            <SidebarMenu>
              {section.items.map((item) => {
                const IconComponent = iconMap[item.name]
                const isActive = location.pathname === item.url

                return (
                  <SidebarMenuItem
                    key={item.name}
                    className={cn(
                      "relative border-l-2 border-transparent hover:border-dark-gray",
                      isActive && "border-secondary"
                    )}
                  >
                    <SidebarMenuButton
                      isActive={isActive}
                      tooltip={item.name}
                      render={<Link to={item.url} />}
                      className={cn(
                        "rounded-none bg-transparent! text-dark-gray!",
                        isActive
                          ? "text-secondary! [&_svg]:text-secondary"
                          : "text-dark-gray [&_svg]:text-dark-gray"
                      )}
                    >
                      <IconComponent />
                      <span>{item.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
