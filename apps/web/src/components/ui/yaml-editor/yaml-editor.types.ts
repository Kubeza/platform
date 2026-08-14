import type {
  TextareaHTMLAttributes,
} from "react";

export interface YamlEditorProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "onChange"
  > {
  value?: string;
  onChange?: (value: string) => void;
  lineNumbers?: boolean;
}