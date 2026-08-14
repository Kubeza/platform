import type { ReactNode } from "react";

export interface HoverCardContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface HoverCardProviderProps {
  children: ReactNode;
  defaultOpen?: boolean;
}