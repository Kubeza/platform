import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export interface AvatarGroupProps
  extends HTMLAttributes<HTMLDivElement> {
  max?: number;
}

export default function AvatarGroup({
  className,
  children,
  max,
  ...props
}: AvatarGroupProps) {
  const avatars = Array.isArray(children)
    ? children
    : [children];

  const visible = max
    ? avatars.slice(0, max)
    : avatars;

  const remaining = max
    ? avatars.length - visible.length
    : 0;

  return (
    <div
      className={cn(
        "flex items-center -space-x-3",
        className,
      )}
      {...props}
    >
      {visible}

      {remaining > 0 && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-xs font-semibold text-slate-300">
          +{remaining}
        </div>
      )}
    </div>
  );
}