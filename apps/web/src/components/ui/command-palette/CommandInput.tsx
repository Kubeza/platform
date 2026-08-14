import {
  forwardRef,
  useEffect,
} from "react";

import { Search } from "lucide-react";

import { cn } from "@/lib/cn";

import { useCommandPalette } from "./useCommandPalette";

import type {
  CommandInputProps,
} from "./command.types";

const CommandInput = forwardRef<
  HTMLInputElement,
  CommandInputProps
>(
  (
    {
      className,
      placeholder = "Search commands...",
      ...props
    },
    ref,
  ) => {
    const {
      query,
      setQuery,
      open,
      setSelected,
    } = useCommandPalette();

    useEffect(() => {
      if (!open) {
        setQuery("");
        setSelected(0);
      }
    }, [
      open,
      setQuery,
      setSelected,
    ]);

    return (
      <div className="flex items-center gap-3 border-b border-slate-800 px-5 py-4">
        <Search className="h-5 w-5 shrink-0 text-slate-500" />

        <input
          ref={ref}
          value={query}
          onChange={(event) => {
            setQuery(
              event.target.value,
            );

            setSelected(0);
          }}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          placeholder={placeholder}
          className={cn(
            "w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

CommandInput.displayName =
  "CommandInput";

export default CommandInput;