import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

import {
  cardVariants,
  type CardVariantProps,
} from "./card.variants";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    CardVariantProps {}

export default function Card({
  className,
  variant,
  padding,
  interactive,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        cardVariants({
          variant,
          padding,
          interactive,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}