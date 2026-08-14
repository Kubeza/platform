import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface AccordionContextValue {
  value: string | null;
  setValue: (value: string | null) => void;
}

export interface AccordionProviderProps {
  children: ReactNode;
  defaultValue?: string | null;
}

export interface AccordionProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface AccordionItemProps
  extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export interface AccordionTriggerProps
  extends HTMLAttributes<HTMLButtonElement> {}

export interface AccordionContentProps
  extends HTMLAttributes<HTMLDivElement> {}