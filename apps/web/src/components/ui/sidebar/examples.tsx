"use client";

import {
  Activity,
  BookOpen,
  Boxes,
  ChevronRight,
  Cloud,
  Home,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from ".";

import type { SidebarMenuItemData } from "./sidebar.types";

const items: SidebarMenuItemData[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <Home className="h-4 w-4" />,
    active: true,
  },
  {
    id: "labs",
    label: "Labs",
    icon: <Boxes className="h-4 w-4" />,
    badge: "12",
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: <Cloud className="h-4 w-4" />,
  },
  {
    id: "activity",
    label: "Activity",
    icon: <Activity className="h-4 w-4" />,
  },
  {
    id: "docs",
    label: "Documentation",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    id: "settings",
    label: "Settings",
    icon: <Settings className="h-4 w-4" />,
  },
];

export default function SidebarExamples() {
  return (
    <SidebarProvider items={items}>
      <div className="flex h-[700px] rounded-lg border">
        <Sidebar>
          <SidebarHeader className="justify-between">
            <span className="text-lg font-semibold">
              DevOps AI Lab
            </span>

            <SidebarTrigger />
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>
                Workspace
              </SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        active={item.active}
                      >
                        {item.icon}

                        {item.label}

                        {item.badge ? (
                          <SidebarMenuBadge>
                            {item.badge}
                          </SidebarMenuBadge>
                        ) : (
                          <ChevronRight className="ml-auto h-4 w-4 opacity-40" />
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarSeparator />

          <SidebarFooter>
            <div className="text-sm text-muted-foreground">
              DevOps AI Lab v1.0
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex items-center justify-center">
          <h2 className="text-2xl font-semibold">
            Main Content
          </h2>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}