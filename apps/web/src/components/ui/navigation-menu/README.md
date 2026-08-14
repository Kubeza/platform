# Navigation Menu

A production-ready Navigation Menu component for React 19 applications.

## Components

- NavigationMenu
- NavigationMenuList
- NavigationMenuItem
- NavigationMenuTrigger
- NavigationMenuContent
- NavigationMenuLink

## Provider

```tsx
<NavigationMenuProvider defaultValue={null}>
  ...
</NavigationMenuProvider>
```

## Hook

```tsx
const {
  value,
  setValue,
} = useNavigationMenu();
```

## Utilities

- findNavigationMenuItem()
- flattenNavigationMenuItems()
- getEnabledNavigationMenuItems()

## Features

- Context-based state management
- Nested navigation support
- Dropdown content
- Accessible navigation
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui compatible