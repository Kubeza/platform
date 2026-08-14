import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface DateRange {
  from: Date | null;
  to: Date | null;
}

export interface DateRangePickerContextValue {
  value: DateRange;
  setValue: (value: DateRange) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface DateRangePickerProviderProps {
  children: ReactNode;
  defaultValue?: DateRange;
  defaultOpen?: boolean;
}

export interface DateRangePickerProps {
  children: ReactNode;
}

export interface DateRangePickerInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value"
  > {
  range: "from" | "to";
}

export interface DateRangePickerTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface DateRangePickerContentProps {
  className?: string;
}

export interface DateRangePickerCalendarProps {
  className?: string;
}