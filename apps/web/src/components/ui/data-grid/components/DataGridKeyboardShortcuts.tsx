import {
  Keyboard,
} from "lucide-react";

export default function DataGridKeyboardShortcuts() {
  const shortcuts = [
    {
      key: "Ctrl + F",
      action: "Search table",
    },
    {
      key: "Ctrl + A",
      action: "Select all rows",
    },
    {
      key: "Esc",
      action: "Clear selection",
    },
    {
      key: "← / →",
      action: "Navigate columns",
    },
    {
      key: "↑ / ↓",
      action: "Navigate rows",
    },
    {
      key: "Enter",
      action: "Open row",
    },
  ];

  return (
    <details className="rounded-lg border">
      <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-3 font-medium">
        <Keyboard className="h-4 w-4" />
        Keyboard Shortcuts
      </summary>

      <div className="divide-y">
        {shortcuts.map(
          (shortcut) => (
            <div
              key={shortcut.key}
              className="flex items-center justify-between px-4 py-3"
            >
              <span className="text-sm">
                {shortcut.action}
              </span>

              <kbd className="rounded border bg-muted px-2 py-1 text-xs">
                {shortcut.key}
              </kbd>
            </div>
          ),
        )}
      </div>
    </details>
  );
}