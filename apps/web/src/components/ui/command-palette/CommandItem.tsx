import {
  useEffect,
  useMemo,
} from "react";

import { Check } from "lucide-react";

import { cn } from "@/lib/cn";

import { useCommandPalette } from "./useCommandPalette";

import type {
  CommandItemProps,
} from "./command.types";

export default function CommandItem({
  item,
}: CommandItemProps) {
  const {
    registerItem,
    unregisterItem,
    selected,
    items,
    setSelected,
    setOpen,
  } = useCommandPalette();

  useEffect(() => {
    registerItem(item);

    return () => {
      unregisterItem(item.id);
    };
  }, [
    item,
    registerItem,
    unregisterItem,
  ]);

  const index = useMemo(
    () =>
      items.findIndex(
        (entry) =>
          entry.id === item.id,
      ),
    [items, item.id],
  );

  const active =
    index === selected;

  const disabled =
    item.disabled ?? false;

  return (
    <button
      type="button"
      role="option"
      aria-selected={active}
      disabled={disabled}
      onMouseEnter={() => {
        if (index >= 0) {
          setSelected(index);
        }
      }}
      onClick={() => {
        if (disabled) {
          return;
        }

        item.onSelect();

        setOpen(false);
      }}
      className={cn(
        "flex w-full items-center justify-between rounded-lg px-3 py-3 text-left transition-colors",
        active &&
          "bg-indigo-600 text-white",
        !active &&
          "hover:bg-slate-900",
        disabled &&
          "cursor-not-allowed opacity-50",
      )}
    >
      <div className="flex min-w-0 items-center gap-3">
        {item.icon && (
          <div className="shrink-0 text-slate-400">
            {item.icon}
          </div>
        )}

        <div className="min-w-0">
          <div className="truncate text-sm font-medium">
            {item.label}
          </div>

          {item.description && (
            <div className="truncate text-xs text-slate-400">
              {item.description}
            </div>
          )}
        </div>
      </div>

      <div className="ml-4 flex items-center gap-2">
        {item.shortcut &&
          item.shortcut.map(
            (key) => (
              <kbd
                key={key}
                className="rounded border border-slate-700 bg-slate-900 px-2 py-1 text-[10px] font-medium uppercase text-slate-400"
              >
                {key}
              </kbd>
            ),
          )}

        {active && (
          <Check className="h-4 w-4 text-white" />
        )}
      </div>
    </button>
  );
}