import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface ComboboxItemData {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ComboboxContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  value: string;
  setValue: (value: string) => void;
  items: ComboboxItemData[];
}

export interface ComboboxProviderProps {
  children: ReactNode;
  items: ComboboxItemData[];
  defaultValue?: string;
  defaultOpen?: boolean;
}

export interface ComboboxProps {
  children: ReactNode;
}

export interface ComboboxInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size"
  > {}

export interface ComboboxItemProps {
  item: ComboboxItemData;
}