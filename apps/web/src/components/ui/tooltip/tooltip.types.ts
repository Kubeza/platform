import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type TooltipPlacement =
  | "top"
  | "bottom"
  | "left"
  | "right";

export interface TooltipProps
  extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;

  defaultOpen?: boolean;

  onOpenChange?: (
    open: boolean,
  ) => void;

  placement?: TooltipPlacement;

  children: ReactNode;
}

export interface TooltipTriggerProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface TooltipContentProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface TooltipArrowProps
  extends HTMLAttributes<HTMLDivElement> {}