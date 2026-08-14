import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface AutocompleteItemData {
  value: string;
  label: string;
}

export interface AutocompleteContextValue {
  value: string;
  setValue: (value: string) => void;
  items: AutocompleteItemData[];
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface AutocompleteProviderProps {
  children: ReactNode;
  items: AutocompleteItemData[];
  defaultValue?: string;
}

export interface AutocompleteProps {
  children: ReactNode;
}

export interface AutocompleteInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size"
  > {}

export interface AutocompleteItemProps {
  item: AutocompleteItemData;
}