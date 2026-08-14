# Command Palette

A reusable command palette inspired by VS Code, Linear, Raycast, and GitHub.

## Components

- CommandPalette
- CommandPaletteDialog
- CommandPaletteSearch
- CommandPaletteList
- CommandPaletteGroup
- CommandPaletteItem
- CommandPaletteShortcut
- CommandPaletteEmpty
- CommandPaletteFooter
- CommandPaletteSkeleton

## Provider

```tsx
<CommandPaletteProvider commands={commands}>
  ...
</CommandPaletteProvider>
```

## Hook

```tsx
const { open, query, commands } =
  useCommandPalette();
```

## Utilities

- filterCommands()
- groupCommands()
- getEnabledCommands()
- getRecentCommands()

## Features

- Global command search
- Command grouping
- Keyboard shortcut display
- Empty state
- Loading skeleton
- TypeScript
- React 19
- Tailwind CSS v4
- shadcn/ui compatible