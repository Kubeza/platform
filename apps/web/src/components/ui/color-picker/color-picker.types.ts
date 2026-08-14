import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface ColorPickerContextValue {
  value: string;
  setValue: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface ColorPickerProviderProps {
  children: ReactNode;
  defaultValue?: string;
  defaultOpen?: boolean;
}

export interface ColorPickerProps {
  children: ReactNode;
}

export interface ColorPickerInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value"
  > {}

export interface ColorPickerTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ColorPickerContentProps {
  className?: string;
}

export interface ColorPickerSwatchProps {
  color: string;
  className?: string;
}