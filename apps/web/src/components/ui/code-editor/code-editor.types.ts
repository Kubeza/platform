import type {
  TextareaHTMLAttributes,
} from "react";

export interface CodeEditorProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "onChange"
  > {
  value?: string;
  language?: string;
  lineNumbers?: boolean;
  onChange?: (value: string) => void;
}