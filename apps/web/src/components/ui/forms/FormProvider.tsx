import * as React from "react";
import type {
  FieldValues,
  UseFormReturn,
} from "react-hook-form";

import {
  FormContext,
} from "./FormContext";

interface FormProviderProps<
  TFieldValues extends FieldValues,
> {
  form: UseFormReturn<TFieldValues>;
  children: React.ReactNode;
}

export function FormProvider<
  TFieldValues extends FieldValues,
>({
  form,
  children,
}: FormProviderProps<TFieldValues>) {
  return (
    <FormContext.Provider
      value={
        form as UseFormReturn<FieldValues>
      }
    >
      {children}
    </FormContext.Provider>
  );
}