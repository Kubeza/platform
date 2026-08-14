import type {
  TerminalCommand,
  TerminalStatus,
} from "./terminal.types";

export function formatTerminalTimestamp(
  value: Date | string,
  locale = "en-IN",
): string {
  const date =
    value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(date);
}

export function sortCommands(
  commands: TerminalCommand[],
): TerminalCommand[] {
  return [...commands].sort((a, b) => {
    const first = new Date(a.timestamp).getTime();
    const second = new Date(b.timestamp).getTime();

    return first - second;
  });
}

export function filterCommands(
  commands: TerminalCommand[],
  query: string,
): TerminalCommand[] {
  const keyword = query.trim().toLowerCase();

  if (!keyword) {
    return commands;
  }

  return commands.filter(
    (command) =>
      command.command
        .toLowerCase()
        .includes(keyword) ||
      command.output
        ?.toLowerCase()
        .includes(keyword),
  );
}

export function isTerminalConnected(
  status: TerminalStatus,
): boolean {
  return status === "connected";
}