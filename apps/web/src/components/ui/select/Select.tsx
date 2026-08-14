import {
  forwardRef,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

import { Check, ChevronDown, Search } from "lucide-react";

import { cn } from "@/lib/cn";

import {
  selectVariants,
  type SelectVariantProps,
} from "./select.variants";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export interface SelectProps extends SelectVariantProps {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  searchable?: boolean;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  id?: string;
  name?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => void;
}

const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      required = false,
      placeholder = "Select an option",
      options,
      searchable = false,
      leftIcon,
      rightIcon,
      variant,
      size,
      className,
      id,
      value,
      disabled,
      name,
      onChange,
    },
    ref,
  ) => {
    const generatedId = useId();

    const selectId = id ?? generatedId;

    const helperId = `${selectId}-helper`;

    const errorId = `${selectId}-error`;

    const wrapperRef = useRef<HTMLDivElement>(null);

    const inputRef = useRef<HTMLInputElement>(null);

    const [open, setOpen] = useState(false);

    const [query, setQuery] = useState("");

    const [highlightedIndex, setHighlightedIndex] =
      useState(0);

    const filteredOptions = useMemo(() => {
      if (!searchable || query.trim() === "") {
        return options;
      }

      return options.filter((option) =>
        option.label
          .toLowerCase()
          .includes(query.toLowerCase()),
      );
    }, [options, query, searchable]);

    useEffect(() => {
      if (!open) {
        return;
      }

      const handleOutsideClick = (event: MouseEvent) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(
            event.target as Node,
          )
        ) {
          setOpen(false);
          setQuery("");
        }
      };

      document.addEventListener(
        "mousedown",
        handleOutsideClick,
      );

      return () =>
        document.removeEventListener(
          "mousedown",
          handleOutsideClick,
        );
    }, [open]);

    useEffect(() => {
      if (open && searchable) {
        inputRef.current?.focus();
      }
    }, [open, searchable]);

    const selectedOption = options.find(
      (option) => option.value === value,
    );

    const handleSelect = (option: SelectOption) => {
      if (option.disabled) {
        return;
      }

      onChange?.({
        target: {
          value: option.value,
          name,
        },
      } as React.ChangeEvent<HTMLSelectElement>);

      setOpen(false);
      setQuery("");
    };

    const handleKeyDown = (
      event: KeyboardEvent<HTMLButtonElement>,
    ) => {
      if (disabled) {
        return;
      }

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();

          if (!open) {
            setOpen(true);
            return;
          }

          setHighlightedIndex((previous) =>
            Math.min(
              previous + 1,
              filteredOptions.length - 1,
            ),
          );
          break;

        case "ArrowUp":
          event.preventDefault();

          setHighlightedIndex((previous) =>
            Math.max(previous - 1, 0),
          );
          break;

        case "Enter":
        case " ":
          event.preventDefault();

          if (!open) {
            setOpen(true);
            return;
          }

          const option =
            filteredOptions[highlightedIndex];

          if (option) {
            handleSelect(option);
          }
          break;

        case "Escape":
          setOpen(false);
          break;
      }
    };

    return (
      <div
        ref={wrapperRef}
        className="flex w-full flex-col gap-2"
      >
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-slate-200"
          >
            {label}

            {required && (
              <span
                className="ml-1 text-red-400"
                aria-hidden="true"
              >
                *
              </span>
            )}
          </label>
        )}

        <div className="relative">
          <button
            ref={ref}
            id={selectId}
            type="button"
            disabled={disabled}
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-invalid={Boolean(error)}
            aria-describedby={
              error
                ? errorId
                : helperText
                  ? helperId
                  : undefined
            }
            onClick={() =>
              setOpen((previous) => !previous)
            }
            onKeyDown={handleKeyDown}
            className={cn(
              selectVariants({
                variant: error ? "danger" : variant,
                size,
              }),
              "justify-between",
              className,
            )}
          >
            <div className="flex items-center gap-3 overflow-hidden">
              {leftIcon}

              <span
                className={cn(
                  "truncate",
                  selectedOption
                    ? "text-slate-100"
                    : "text-slate-500",
                )}
              >
                {selectedOption?.label ?? placeholder}
              </span>
            </div>

            {rightIcon ?? (
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  open && "rotate-180",
                )}
              />
            )}
          </button>

          {open && (
            <div
              className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-2xl"
              role="listbox"
            >
              {searchable && (
                <div className="border-b border-slate-800 p-3">
                  <div className="flex items-center gap-2 rounded-lg border border-slate-700 px-3">
                    <Search className="h-4 w-4 text-slate-500" />

                    <input
                      ref={inputRef}
                      value={query}
                      onChange={(event) =>
                        setQuery(event.target.value)
                      }
                      placeholder="Search..."
                      className="h-10 w-full bg-transparent outline-none"
                    />
                  </div>
                </div>
              )}

              <div className="max-h-72 overflow-y-auto py-2">
                {filteredOptions.length === 0 ? (
                  <div className="px-4 py-6 text-center text-sm text-slate-500">
                    No options found.
                  </div>
                ) : (
                  filteredOptions.map(
                    (option, index) => {
                      const selected =
                        option.value === value;

                      return (
                        <button
                          key={option.value}
                          type="button"
                          disabled={option.disabled}
                          onClick={() =>
                            handleSelect(option)
                          }
                          className={cn(
                            "flex w-full items-center justify-between px-4 py-3 text-left transition-colors",
                            highlightedIndex ===
                              index &&
                              "bg-slate-800",
                            selected &&
                              "bg-blue-500/10 text-blue-400",
                            option.disabled &&
                              "cursor-not-allowed opacity-50",
                          )}
                        >
                          <div className="flex items-center gap-3">
                            {option.icon}
                            <span>{option.label}</span>
                          </div>

                          {selected && (
                            <Check className="h-4 w-4" />
                          )}
                        </button>
                      );
                    },
                  )
                )}
              </div>
            </div>
          )}
        </div>

        {error ? (
          <p
            id={errorId}
            className="text-sm text-red-400"
            role="alert"
          >
            {error}
          </p>
        ) : helperText ? (
          <p
            id={helperId}
            className="text-sm text-slate-500"
          >
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);

Select.displayName = "Select";

export default Select;