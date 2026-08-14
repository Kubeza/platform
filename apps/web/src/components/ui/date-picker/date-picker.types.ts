import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface DatePickerContextValue {
  value: Date | null;
  setValue: (value: Date | null) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface DatePickerProviderProps {
  children: ReactNode;
  defaultValue?: Date | null;
  defaultOpen?: boolean;
}

export interface DatePickerProps {
  children: ReactNode;
}

export interface DatePickerInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value"
  > {}

export interface DatePickerTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface DatePickerContentProps {
  className?: string;
}

export interface DatePickerCalendarProps {
  className?: string;
}