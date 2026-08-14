import * as React from "react";
import type {
  FieldValues,
  UseFormReturn,
} from "react-hook-form";

import {
  FormContext,
} from "./FormContext";

interface FormConsumerProps<
  TFieldValues extends FieldValues,
> {
  children: (
    form: UseFormReturn<TFieldValues>,
  ) => React.ReactNode;
}

export function FormConsumer<
  TFieldValues extends FieldValues,
>({
  children,
}: FormConsumerProps<TFieldValues>) {
  return (
    <FormContext.Consumer>
      {(form) =>
        children(
          form as UseFormReturn<TFieldValues>,
        )
      }
    </FormContext.Consumer>
  );
}