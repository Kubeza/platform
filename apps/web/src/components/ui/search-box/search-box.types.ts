import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface SearchBoxContextValue {
  value: string;
  setValue: (value: string) => void;
  clear: () => void;
}

export interface SearchBoxProviderProps {
  children: ReactNode;
  defaultValue?: string;
}

export interface SearchBoxProps {
  children: ReactNode;
}

export interface SearchBoxInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value"
  > {}

export interface SearchBoxClearProps {
  className?: string;
}