# Command History

Reusable command history components for terminals, DevOps dashboards, CI/CD pipelines, and cloud consoles.

## Components

- CommandHistory
- CommandHistoryHeader
- CommandHistoryList
- CommandHistoryItem
- CommandHistoryCommand
- CommandHistoryOutput
- CommandHistoryTimestamp
- CommandHistoryStatus
- CommandHistoryActions
- CommandHistorySearch
- CommandHistoryFilters
- CommandHistoryEmpty
- CommandHistorySkeleton

## Provider

```tsx
<CommandHistoryProvider commands={commands}>
  ...
</CommandHistoryProvider>
```

## Hook

```tsx
const { commands } = useCommandHistory();
```

## Utilities

- sortCommandHistory()
- filterCommandHistory()
- filterByStatus()
- formatCommandDuration()
- formatCommandTimestamp()

## Features

- Command history
- Status badges
- Search & filtering
- Timestamp formatting
- Duration formatting
- Loading skeleton
- Empty state
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui compatible