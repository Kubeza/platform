import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

import {
  buttonVariants,
  type ButtonVariantProps,
} from "./button.variants";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<ButtonVariantProps, "size"> & {
    size?: "sm" | "md" | "lg";
  };

const sizeMap = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-12 w-12",
} as const;

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant,
      size = "md",
      fullWidth,
      children,
      type = "button",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          buttonVariants({
            variant,
            size: "icon",
            fullWidth,
          }),
          sizeMap[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";

export default IconButton;