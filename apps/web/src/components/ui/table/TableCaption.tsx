import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import type {
  TableCaptionProps,
} from "./table.types";

const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  TableCaptionProps
>(
  (
    {
      children,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <caption
        ref={ref}
        className={cn(
          "caption-bottom mt-4 px-2 text-sm leading-relaxed text-slate-400",
          className,
        )}
        {...props}
      >
        {children}
      </caption>
    );
  },
);

TableCaption.displayName =
  "TableCaption";

export default TableCaption;