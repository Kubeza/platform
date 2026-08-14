import type {
  CommandHistoryEntry,
  CommandHistoryStatus,
} from "./command-history.types";

export function sortCommandHistory(
  commands: CommandHistoryEntry[],
): CommandHistoryEntry[] {
  return [...commands].sort((a, b) => {
    const first = new Date(a.timestamp).getTime();
    const second = new Date(b.timestamp).getTime();

    return second - first;
  });
}

export function filterCommandHistory(
  commands: CommandHistoryEntry[],
  query: string,
): CommandHistoryEntry[] {
  const keyword = query.trim().toLowerCase();

  if (!keyword) {
    return commands;
  }

  return commands.filter((command) => {
    return (
      command.command
        .toLowerCase()
        .includes(keyword) ||
      command.output
        ?.toLowerCase()
        .includes(keyword) ||
      command.shell
        ?.toLowerCase()
        .includes(keyword) ||
      command.workingDirectory
        ?.toLowerCase()
        .includes(keyword)
    );
  });
}

export function filterByStatus(
  commands: CommandHistoryEntry[],
  status: CommandHistoryStatus,
): CommandHistoryEntry[] {
  return commands.filter(
    (command) => command.status === status,
  );
}

export function formatCommandDuration(
  duration?: number,
): string {
  if (duration == null) {
    return "-";
  }

  if (duration < 1000) {
    return `${duration} ms`;
  }

  return `${(duration / 1000).toFixed(2)} s`;
}

export function formatCommandTimestamp(
  value: Date | string,
  locale = "en-IN",
): string {
  const date =
    value instanceof Date
      ? value
      : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(date);
}