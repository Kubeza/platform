import type {
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface CommandItemData {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface CommandContextValue {
  value: string;
  setValue: (value: string) => void;
  query: string;
  setQuery: (query: string) => void;
  items: CommandItemData[];
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface CommandProviderProps {
  children: ReactNode;
  items?: CommandItemData[];
  defaultValue?: string;
  defaultQuery?: string;
  defaultOpen?: boolean;
}

export interface CommandProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface CommandInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value"
  > {}

export interface CommandListProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface CommandItemProps
  extends HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface CommandEmptyProps
  extends HTMLAttributes<HTMLDivElement> {}