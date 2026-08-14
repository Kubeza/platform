import { cn } from "@/lib/utils";

import type {
  Header,
} from "@tanstack/react-table";

interface DataGridColumnResizerProps<T> {
  header: Header<T, unknown>;
}

export default function DataGridColumnResizer<T>({
  header,
}: DataGridColumnResizerProps<T>) {
  if (!header.column.getCanResize()) {
    return null;
  }

  return (
    <div
      onMouseDown={header.getResizeHandler()}
      onTouchStart={
        header.getResizeHandler()
      }
      className={cn(
        "absolute right-0 top-0 h-full w-1 cursor-col-resize select-none touch-none bg-transparent transition-colors hover:bg-primary",
        header.column.getIsResizing() &&
          "bg-primary",
      )}
    />
  );
}