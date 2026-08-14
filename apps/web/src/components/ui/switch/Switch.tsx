"use client";

import type {
  MouseEvent,
} from "react";

import { cn } from "@/lib/utils";

import { useSwitch } from "./useSwitch";

import type {
  SwitchProps,
} from "./switch.types";

export function Switch({
  className,
  disabled,
  onClick,
  ...props
}: SwitchProps) {
  const {
    checked,
    setChecked,
    disabled: providerDisabled,
  } = useSwitch();

  const isDisabled =
    disabled ?? providerDisabled;

  function handleClick(
    event: MouseEvent<HTMLButtonElement>,
  ) {
    if (isDisabled) {
      return;
    }

    setChecked(!checked);
    onClick?.(event);
  }

  return (
    <button
      {...props}
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={isDisabled}
      onClick={handleClick}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
        checked
          ? "bg-primary"
          : "bg-muted",
        isDisabled &&
          "cursor-not-allowed opacity-50",
        className,
      )}
    >
      <span
        className={cn(
          "absolute left-0.5 h-5 w-5 rounded-full bg-background shadow transition-transform",
          checked &&
            "translate-x-5",
        )}
      />
    </button>
  );
}