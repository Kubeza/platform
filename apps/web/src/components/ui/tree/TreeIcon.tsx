import { forwardRef } from "react";

import {
  Folder,
  FolderOpen,
  Loader2,
} from "lucide-react";

import { cn } from "@/lib/cn";

import type {
  TreeIconProps,
} from "./tree.types";

const TreeIcon = forwardRef<
  HTMLSpanElement,
  TreeIconProps
>(
  (
    {
      icon,
      expanded,
      loading,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "flex h-5 w-5 items-center justify-center text-slate-400",
          className,
        )}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : icon ? (
          icon
        ) : expanded ? (
          <FolderOpen className="h-4 w-4 text-amber-400" />
        ) : (
          <Folder className="h-4 w-4 text-amber-400" />
        )}
      </span>
    );
  },
);

TreeIcon.displayName =
  "TreeIcon";

export default TreeIcon;