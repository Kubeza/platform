# Breadcrumb

A lightweight, composable breadcrumb navigation component for React 19 applications.

## Components

- Breadcrumb
- BreadcrumbList
- BreadcrumbItem
- BreadcrumbLink
- BreadcrumbPage
- BreadcrumbSeparator
- BreadcrumbEllipsis

## Provider

```tsx
<BreadcrumbProvider items={items}>
  ...
</BreadcrumbProvider>
```

## Hook

```tsx
const { items, setItems } = useBreadcrumb();
```

## Utilities

- normalizeBreadcrumbItems()
- findCurrentBreadcrumb()
- collapseBreadcrumbItems()

## Features

- Accessible navigation
- Current page support
- Custom separators
- Ellipsis for long paths
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui compatible