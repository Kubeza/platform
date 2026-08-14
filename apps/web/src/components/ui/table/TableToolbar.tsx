import type {
  ReactNode,
} from "react";

interface TableToolbarProps {
  left?: ReactNode;

  right?: ReactNode;
}

const TableToolbar = ({
  left,
  right,
}: TableToolbarProps) => {
  return (
    <div
      className="
        flex
        flex-col
        gap-4
        border-b
        border-border
        p-4

        md:flex-row
        md:items-center
        md:justify-between
      "
    >
      <div className="flex flex-1 items-center gap-3">
        {left}
      </div>

      <div className="flex items-center gap-2">
        {right}
      </div>
    </div>
  );
};

export default TableToolbar;