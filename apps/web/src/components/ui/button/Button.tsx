import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ElementType,
  type ReactNode,
} from "react";

import { Loader2 } from "lucide-react";

import { cn } from "@/lib/cn";
import {
  buttonVariants,
  type ButtonVariantProps,
} from "./button.variants";

type ButtonOwnProps = ButtonVariantProps & {
  as?: ElementType;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

type ButtonProps = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as,
      variant,
      size,
      fullWidth,
      loading = false,
      leftIcon,
      rightIcon,
      className,
      children,
      disabled,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const Component = as ?? "button";

    const isDisabled = disabled || loading;

    return (
      <Component
        ref={ref}
        type={Component === "button" ? type : undefined}
        disabled={Component === "button" ? isDisabled : undefined}
        aria-disabled={isDisabled}
        aria-busy={loading}
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidth,
          }),
          className,
        )}
        {...props}
      >
        {loading ? (
          <Loader2
            className="size-4 animate-spin"
            aria-hidden="true"
          />
        ) : (
          leftIcon
        )}

        {children && (
          <span className="inline-flex items-center">
            {children}
          </span>
        )}

        {!loading && rightIcon}
      </Component>
    );
  },
);

Button.displayName = "Button";

export default Button;