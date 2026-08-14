import { cn } from "@/lib/utils";

import type {
  DropdownSeparatorProps,
} from "./dropdown.types";

const DropdownSeparator = ({
  className,
  ...props
}: DropdownSeparatorProps) => {
  return (
    <div
      className={cn(
        "my-2 h-px bg-border",
        className,
      )}
      {...props}
    />
  );
};

export default DropdownSeparator;