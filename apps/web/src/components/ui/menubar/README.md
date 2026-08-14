# Menubar

A production-ready Menubar component for React 19 applications.

## Components

- Menubar
- MenubarMenu
- MenubarTrigger
- MenubarContent
- MenubarItem
- MenubarSeparator

## Provider

```tsx
<MenubarProvider defaultValue={null}>
  ...
</MenubarProvider>
```

## Hook

```tsx
const {
  value,
  setValue,
} = useMenubar();
```

## Utilities

- findMenubarItem()
- flattenMenubarItems()
- getEnabledMenubarItems()

## Features

- Context-based state management
- Keyboard-friendly structure
- Accessible dropdown menus
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui compatible