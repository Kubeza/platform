import {
  createContext,
  useContext,
} from "react";

import {
  FormProvider,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";

interface FormContextValue<
  TFieldValues extends FieldValues,
> {
  form: UseFormReturn<TFieldValues>;
}

const Context =
  createContext<FormContextValue<any> | null>(
    null,
  );

interface FormProps<
  TFieldValues extends FieldValues,
> {
  form: UseFormReturn<TFieldValues>;
  children: React.ReactNode;
  onSubmit: (
    values: TFieldValues,
  ) => void | Promise<void>;
  className?: string;
}

export function Form<
  TFieldValues extends FieldValues,
>({
  form,
  children,
  onSubmit,
  className,
}: FormProps<TFieldValues>) {
  return (
    <Context.Provider value={{ form }}>
      <FormProvider {...form}>
        <form
          className={className}
          onSubmit={form.handleSubmit(
            onSubmit,
          )}
        >
          {children}
        </form>
      </FormProvider>
    </Context.Provider>
  );
}

export function useFormContext<
  TFieldValues extends FieldValues,
>() {
  const context =
    useContext(Context);

  if (!context) {
    throw new Error(
      "useFormContext must be used inside Form",
    );
  }

  return context.form as UseFormReturn<TFieldValues>;
}