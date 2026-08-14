import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface TimeValue {
  hours: number;
  minutes: number;
  seconds?: number;
}

export interface TimePickerContextValue {
  value: TimeValue | null;
  setValue: (value: TimeValue | null) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface TimePickerProviderProps {
  children: ReactNode;
  defaultValue?: TimeValue | null;
  defaultOpen?: boolean;
}

export interface TimePickerProps {
  children: ReactNode;
}

export interface TimePickerInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value"
  > {}

export interface TimePickerTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface TimePickerContentProps {
  className?: string;
}

export interface TimePickerClockProps {
  className?: string;
}