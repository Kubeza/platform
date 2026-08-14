import {
  createContext,
  useContext,
} from "react";

import { useTooltip } from "./hooks";

import type {
  TooltipPlacement,
  TooltipProps,
} from "./tooltip.types";

interface TooltipContextValue {
  open: boolean;

  placement: TooltipPlacement;

  show: () => void;

  hide: () => void;
}

const TooltipContext =
  createContext<
    TooltipContextValue | undefined
  >(undefined);

export function useTooltipContext() {
  const context =
    useContext(
      TooltipContext,
    );

  if (!context) {
    throw new Error(
      "Tooltip components must be used inside <Tooltip>.",
    );
  }

  return context;
}

const Tooltip = ({
  open,
  defaultOpen,
  onOpenChange,
  placement = "top",
  children,
  ...props
}: TooltipProps) => {
  const tooltip =
    useTooltip({
      open,
      defaultOpen,
      onOpenChange,
    });

  return (
    <TooltipContext.Provider
      value={{
        ...tooltip,
        placement,
      }}
    >
      <div
        className="relative inline-flex"
        {...props}
      >
        {children}
      </div>
    </TooltipContext.Provider>
  );
};

export default Tooltip;