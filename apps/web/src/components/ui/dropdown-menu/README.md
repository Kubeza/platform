# Dropdown Menu

A production-ready Dropdown Menu component built for React 19 applications.

## Components

- DropdownMenu
- DropdownMenuTrigger
- DropdownMenuContent
- DropdownMenuItem
- DropdownMenuSeparator
- DropdownMenuLabel

## Provider

```tsx
<DropdownMenuProvider defaultOpen={false}>
  ...
</DropdownMenuProvider>
```

## Hook

```tsx
const {
  open,
  setOpen,
} = useDropdownMenu();
```

## Utilities

- findDropdownMenuItem()
- flattenDropdownMenuItems()
- getEnabledDropdownMenuItems()

## Features

- Context-based state management
- Accessible dropdown menu
- Keyboard-friendly structure
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui compatible