import type { HTMLAttributes, ReactNode } from "react";

export type StepperOrientation =
  | "horizontal"
  | "vertical";

export type StepStatus =
  | "pending"
  | "active"
  | "completed"
  | "error";

export interface StepperContextValue {
  activeStep: number;

  orientation: StepperOrientation;
}

export interface StepperProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  activeStep?: number;

  orientation?: StepperOrientation;
}

export interface StepProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  index: number;

  status?: StepStatus;
}

export interface StepIconProps
  extends HTMLAttributes<HTMLDivElement> {
  index: number;

  status?: StepStatus;
}

export interface StepLabelProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title"
  > {
  title: ReactNode;

  description?: ReactNode;
}

export interface StepConnectorProps
  extends HTMLAttributes<HTMLDivElement> {
  completed?: boolean;

  orientation?: StepperOrientation;
}