"use client";

import { Activity, Box, Cloud, TerminalSquare } from "lucide-react";

import {
  CommandPalette,
  CommandPaletteDialog,
  CommandPaletteEmpty,
  CommandPaletteFooter,
  CommandPaletteGroup,
  CommandPaletteItem,
  CommandPaletteList,
  CommandPaletteProvider,
  CommandPaletteSearch,
  CommandPaletteShortcut,
} from ".";

import type { CommandPaletteItem as CommandItem } from "./command-palette.types";

const commands: CommandItem[] = [
  {
    id: "1",
    label: "Open Kubernetes Lab",
    description: "Launch the Kubernetes interactive lab.",
    group: "Labs",
    icon: <Box className="h-4 w-4" />,
    shortcut: ["⌘", "K"],
    keywords: ["kubernetes", "k8s", "lab"],
  },
  {
    id: "2",
    label: "Open Terminal",
    description: "Open the integrated DevOps terminal.",
    group: "Workspace",
    icon: <TerminalSquare className="h-4 w-4" />,
    shortcut: ["⌘", "T"],
    keywords: ["terminal", "shell"],
  },
  {
    id: "3",
    label: "AWS Dashboard",
    description: "Navigate to cloud resources.",
    group: "Cloud",
    icon: <Cloud className="h-4 w-4" />,
    shortcut: ["⌘", "A"],
    keywords: ["aws", "cloud"],
  },
  {
    id: "4",
    label: "Recent Activity",
    description: "View recent lab activity.",
    group: "Workspace",
    icon: <Activity className="h-4 w-4" />,
    shortcut: ["⌘", "R"],
    keywords: ["activity", "history"],
  },
];

export default function CommandPaletteExamples() {
  return (
    <CommandPaletteProvider
      open
      query=""
      commands={commands}
    >
      <CommandPaletteDialog>
        <CommandPalette>
          <CommandPaletteSearch />

          <CommandPaletteList>
            <CommandPaletteGroup heading="Labs">
              <CommandPaletteItem
                title={commands[0].label}
                description={commands[0].description}
                icon={commands[0].icon}
              >
                <CommandPaletteShortcut
                  keys={commands[0].shortcut ?? []}
                />
              </CommandPaletteItem>
            </CommandPaletteGroup>

            <CommandPaletteGroup heading="Workspace">
              {commands.slice(1).map((command) => (
                <CommandPaletteItem
                  key={command.id}
                  title={command.label}
                  description={command.description}
                  icon={command.icon}
                >
                  <CommandPaletteShortcut
                    keys={command.shortcut ?? []}
                  />
                </CommandPaletteItem>
              ))}
            </CommandPaletteGroup>

            <CommandPaletteEmpty
              className="hidden"
            />
          </CommandPaletteList>

          <CommandPaletteFooter>
            <span>
              ↑ ↓ Navigate
            </span>

            <span>
              Enter Select • Esc Close
            </span>
          </CommandPaletteFooter>
        </CommandPalette>
      </CommandPaletteDialog>
    </CommandPaletteProvider>
  );
}