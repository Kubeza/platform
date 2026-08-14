import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

import type { CommandGroupProps } from "./command.types";

type CommandGroupRootProps =
  Omit<
    HTMLAttributes<HTMLDivElement>,
    "children"
  > &
    CommandGroupProps;

export default function CommandGroup({
  heading,
  children,
  className,
  ...props
}: CommandGroupRootProps) {
  return (
    <section
      className={cn(
        "border-b border-slate-800 last:border-b-0",
        className,
      )}
      {...props}
    >
      <div className="sticky top-0 z-10 bg-slate-950/95 px-4 py-2 backdrop-blur">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {heading}
        </h3>
      </div>

      <div className="p-2">
        {children}
      </div>
    </section>
  );
}