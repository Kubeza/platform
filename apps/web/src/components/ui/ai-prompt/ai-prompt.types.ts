import type {
  FormHTMLAttributes,
  ReactNode,
} from "react";

export interface AIPromptProps
  extends Omit<
    FormHTMLAttributes<HTMLFormElement>,
    "onSubmit"
  > {
  value?: string;
  placeholder?: string;
  submitLabel?: ReactNode;
  disabled?: boolean;
  onValueChange?: (
    value: string,
  ) => void;
  onSubmitPrompt?: (
    value: string,
  ) => void;
}