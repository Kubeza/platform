import type {
  CommandPaletteItem,
} from "./command-palette.types";

export function filterCommands(
  commands: CommandPaletteItem[],
  query: string,
): CommandPaletteItem[] {
  const keyword =
    query.trim().toLowerCase();

  if (!keyword) {
    return commands;
  }

  return commands.filter(
    (command) => {
      return (
        command.label
          .toLowerCase()
          .includes(keyword) ||
        command.description
          ?.toLowerCase()
          .includes(keyword) ||
        command.group
          ?.toLowerCase()
          .includes(keyword) ||
        command.keywords?.some(
          (
            keywordItem: string,
          ) =>
            keywordItem
              .toLowerCase()
              .includes(keyword),
        )
      );
    },
  );
}

export function groupCommands(
  commands: CommandPaletteItem[],
): Record<
  string,
  CommandPaletteItem[]
> {
  return commands.reduce<
    Record<
      string,
      CommandPaletteItem[]
    >
  >(
    (groups, command) => {
      const group =
        command.group ??
        "General";

      if (!groups[group]) {
        groups[group] = [];
      }

      groups[group].push(command);

      return groups;
    },
    {},
  );
}

export function getEnabledCommands(
  commands: CommandPaletteItem[],
): CommandPaletteItem[] {
  return commands.filter(
    (command) =>
      !command.disabled,
  );
}

export function getRecentCommands(
  commands: CommandPaletteItem[],
  limit = 5,
): CommandPaletteItem[] {
  return commands.slice(
    0,
    limit,
  );
}