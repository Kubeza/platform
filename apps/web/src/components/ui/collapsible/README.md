# Collapsible

A production-ready Collapsible component for React 19 applications.

## Components

- Collapsible
- CollapsibleTrigger
- CollapsibleContent

## Provider

```tsx
<CollapsibleProvider defaultOpen={false}>
  ...
</CollapsibleProvider>
```

## Hook

```tsx
const {
  open,
  setOpen,
} = useCollapsible();
```

## Utilities

- toggleCollapsible()
- getCollapsibleState()
- isCollapsibleOpen()

## Features

- Context-based state management
- Controlled open/close state
- Accessible trigger
- Keyboard friendly
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui compatible