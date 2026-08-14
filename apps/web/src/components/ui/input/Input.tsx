import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

import {
  inputVariants,
  type InputVariantProps,
} from "./input.variants";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    InputVariantProps {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      required = false,
      variant,
      size,
      leftIcon,
      rightIcon,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();

    const inputId = id ?? generatedId;

    const helperId = `${inputId}-helper`;

    const errorId = `${inputId}-error`;

    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-slate-200"
          >
            {label}

            {required && (
              <span
                className="ml-1 text-red-400"
                aria-hidden="true"
              >
                *
              </span>
            )}
          </label>
        )}

        <div
          className={cn(
            inputVariants({
              variant: error ? "danger" : variant,
              size,
            }),
            className,
          )}
        >
          {leftIcon && (
            <span
              className="mr-3 flex shrink-0 items-center text-slate-400"
              aria-hidden="true"
            >
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            className="w-full border-0 bg-transparent text-slate-100 outline-none placeholder:text-slate-500 disabled:cursor-not-allowed"
            aria-invalid={Boolean(error)}
            aria-describedby={
              error
                ? errorId
                : helperText
                  ? helperId
                  : undefined
            }
            required={required}
            {...props}
          />

          {rightIcon && (
            <span
              className="ml-3 flex shrink-0 items-center text-slate-400"
              aria-hidden="true"
            >
              {rightIcon}
            </span>
          )}
        </div>

        {error ? (
          <p
            id={errorId}
            className="text-sm text-red-400"
            role="alert"
          >
            {error}
          </p>
        ) : helperText ? (
          <p
            id={helperId}
            className="text-sm text-slate-500"
          >
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;