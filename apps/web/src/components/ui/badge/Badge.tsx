import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { X } from "lucide-react";

import { cn } from "@/lib/cn";

import {
  badgeVariants,
  type BadgeVariantProps,
} from "./badge.variants";

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    BadgeVariantProps {
  dot?: boolean;
  removable?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onRemove?: () => void;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      variant,
      size,
      dot = false,
      removable = false,
      leftIcon,
      rightIcon,
      children,
      className,
      onRemove,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          badgeVariants({
            variant,
            size,
          }),
          className,
        )}
        {...props}
      >
        {dot && (
          <span
            className="mr-2 size-2 rounded-full bg-current"
            aria-hidden="true"
          />
        )}

        {leftIcon}

        <span className="inline-flex items-center">
          {children}
        </span>

        {rightIcon}

        {removable && (
          <button
            type="button"
            onClick={onRemove}
            className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-label="Remove badge"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>
    );
  },
);

Badge.displayName = "Badge";

export default Badge;