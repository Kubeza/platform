import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface SliderContextValue {
  value: number;
  setValue: (value: number) => void;
  min: number;
  max: number;
  disabled: boolean;
}

export interface SliderProviderProps {
  children: ReactNode;
  defaultValue?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
}

export interface SliderProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface SliderThumbProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface SliderTrackProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface SliderRangeProps
  extends HTMLAttributes<HTMLDivElement> {}