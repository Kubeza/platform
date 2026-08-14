import {
  ChevronRight,
} from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  DropdownSubmenuProps,
} from "./dropdown.types";

const DropdownSubmenu = ({
  label,
  children,
  className,
  ...props
}: DropdownSubmenuProps) => {
  return (
    <div
      className={cn(
        "group relative",
        className,
      )}
      {...props}
    >
      <div
        className="
          flex
          cursor-pointer
          items-center
          justify-between
          rounded-lg
          px-3
          py-2
          text-sm
          transition-colors
          hover:bg-muted
        "
      >
        <span>{label}</span>

        <ChevronRight className="h-4 w-4" />
      </div>

      <div
        className="
          absolute
          left-full
          top-0
          z-50
          ml-2
          hidden
          min-w-[220px]
          rounded-xl
          border
          border-border
          bg-background
          p-2
          shadow-xl
          group-hover:block
        "
      >
        {children}
      </div>
    </div>
  );
};

export default DropdownSubmenu;