# Context Menu

A production-ready Context Menu component for React 19 applications.

## Components

- ContextMenu
- ContextMenuTrigger
- ContextMenuContent
- ContextMenuItem
- ContextMenuSeparator
- ContextMenuLabel

## Provider

```tsx
<ContextMenuProvider defaultOpen={false}>
  ...
</ContextMenuProvider>
```

## Hook

```tsx
const {
  open,
  setOpen,
} = useContextMenu();
```

## Utilities

- findContextMenuItem()
- flattenContextMenuItems()
- getEnabledContextMenuItems()

## Features

- Context-based state management
- Right-click menu support
- Accessible menu structure
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui compatible