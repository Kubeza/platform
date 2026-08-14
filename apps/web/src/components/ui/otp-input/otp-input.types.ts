import type {
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface OTPInputContextValue {
  value: string;
  setValue: (value: string) => void;
  length: number;
  disabled: boolean;
}

export interface OTPInputProviderProps {
  children: ReactNode;
  length?: number;
  defaultValue?: string;
  disabled?: boolean;
}

export interface OTPInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "size"
  > {}

export interface OTPInputGroupProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface OTPInputSlotProps
  extends HTMLAttributes<HTMLDivElement> {
  index: number;
}