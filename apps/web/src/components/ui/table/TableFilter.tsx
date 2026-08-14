import type { ReactNode } from "react";

interface TableFilterProps {
  children?: ReactNode;
}

const TableFilter = ({
  children,
}: TableFilterProps) => {
  return (
    <div className="flex items-center gap-2">
      {children}
    </div>
  );
};

export default TableFilter;