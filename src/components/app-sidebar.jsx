"use client"

import * as React from "react"

import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import { LayoutBottomIcon, AudioWave01Icon, CommandIcon } from "@hugeicons/core-free-icons"
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

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: (
        <HugeiconsIcon icon={LayoutBottomIcon} strokeWidth={2} />
      ),
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: (
        <HugeiconsIcon icon={AudioWave01Icon} strokeWidth={2} />
      ),
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: (
        <HugeiconsIcon icon={CommandIcon} strokeWidth={2} />
      ),
      plan: "Free",
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {navSections.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarMenu>
              {section.items.map((item) => {
                const IconComponent = iconMap[item.name]
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton render={<a href={item.url} />} tooltip={item.name}>
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
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
