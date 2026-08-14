# Sidebar

A production-ready, composable sidebar component system for React applications. Designed for admin dashboards, DevOps platforms, AI workspaces, and enterprise applications.

## Components

- Sidebar
- SidebarHeader
- SidebarContent
- SidebarFooter
- SidebarGroup
- SidebarGroupLabel
- SidebarGroupContent
- SidebarMenu
- SidebarMenuItem
- SidebarMenuButton
- SidebarMenuBadge
- SidebarRail
- SidebarTrigger
- SidebarInset
- SidebarSeparator

## Provider

```tsx
<SidebarProvider items={items}>
  ...
</SidebarProvider>
```

## Hook

```tsx
const {
  open,
  variant,
  collapsible,
  items,
} = useSidebar();
```

## Utilities

- flattenSidebarItems()
- findActiveSidebarItem()
- filterSidebarItems()

## Features

- Nested navigation
- Active menu support
- Sidebar groups
- Collapsible layouts
- Multiple sidebar variants
- Badge support
- Icon support
- Responsive layout
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui compatible