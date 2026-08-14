import type {
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface InputOTPContextValue {
  value: string;
  setValue: (value: string) => void;
  length: number;
  disabled: boolean;
}

export interface InputOTPProviderProps {
  children: ReactNode;
  length?: number;
  defaultValue?: string;
  disabled?: boolean;
}

export interface InputOTPProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "size"
  > {}

export interface InputOTPGroupProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface InputOTPSlotProps
  extends HTMLAttributes<HTMLDivElement> {
  index: number;
}