# Terminal

Enterprise-ready terminal UI components for browser-based Linux shells, DevOps labs, Kubernetes exec sessions, Docker containers, and AI-assisted command execution.

## Components

- TerminalProvider
- Terminal
- TerminalHeader
- TerminalBody
- TerminalFooter
- TerminalPrompt
- TerminalInput
- TerminalOutput
- TerminalLine
- TerminalCursor
- TerminalToolbar
- TerminalStatus
- TerminalEmpty
- TerminalSkeleton

## Hook

```tsx
const { commands, status } = useTerminal();
```

## Utilities

- formatTerminalTimestamp()
- sortCommands()
- filterCommands()
- isTerminalConnected()

## Features

- Linux-style terminal layout
- Command history
- Prompt component
- Terminal status indicator
- Search/filter helpers
- Empty state
- Loading skeleton
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui compatible
- Ready for xterm.js integration