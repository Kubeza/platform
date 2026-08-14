import {
  forwardRef,
  useId,
  useRef,
  type ChangeEvent,
  type ReactNode,
  type TextareaHTMLAttributes,
} from "react";

import { cn } from "@/lib/cn";

import {
  textareaVariants,
  type TextareaVariantProps,
} from "./textarea.variants";

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    TextareaVariantProps {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  autoResize?: boolean;
  showCharacterCount?: boolean;
  leftAdornment?: ReactNode;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      required = false,
      autoResize = true,
      showCharacterCount = false,
      leftAdornment,
      variant,
      size,
      className,
      id,
      maxLength,
      onChange,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();

    const textareaId = id ?? generatedId;

    const helperId = `${textareaId}-helper`;

    const errorId = `${textareaId}-error`;

    const innerRef = useRef<HTMLTextAreaElement | null>(null);

    const setRefs = (node: HTMLTextAreaElement | null) => {
      innerRef.current = node;

      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    const handleChange = (
      event: ChangeEvent<HTMLTextAreaElement>,
    ) => {
      if (autoResize) {
        const element = event.currentTarget;

        element.style.height = "auto";
        element.style.height = `${element.scrollHeight}px`;
      }

      onChange?.(event);
    };

    const characterCount = props.value
      ? String(props.value).length
      : props.defaultValue
        ? String(props.defaultValue).length
        : 0;

    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label
            htmlFor={textareaId}
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
            textareaVariants({
              variant: error ? "danger" : variant,
              size,
            }),
            className,
          )}
        >
          {leftAdornment && (
            <div className="mb-3 flex items-center text-slate-400">
              {leftAdornment}
            </div>
          )}

          <textarea
            ref={setRefs}
            id={textareaId}
            maxLength={maxLength}
            required={required}
            className="min-h-full w-full resize-none border-0 bg-transparent outline-none placeholder:text-slate-500"
            aria-invalid={Boolean(error)}
            aria-describedby={
              error
                ? errorId
                : helperText
                  ? helperId
                  : undefined
            }
            onChange={handleChange}
            {...props}
          />
        </div>

        <div className="flex items-start justify-between gap-4">
          <div className="min-h-[20px]">
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

          {showCharacterCount && maxLength && (
            <span className="shrink-0 text-xs text-slate-500">
              {characterCount}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;