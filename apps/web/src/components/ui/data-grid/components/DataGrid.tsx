import {
  createContext,
  useContext,
} from "react";

import type {
  ReactNode,
} from "react";

import type {
  ColumnDef,
  Table,
} from "@tanstack/react-table";

import { useDataGrid } from "../hooks/useDataGrid";

interface DataGridContextValue<T> {
  table: Table<T>;
}

const DataGridContext =
  createContext<
    DataGridContextValue<any> | null
  >(null);

export function useDataGridContext<T>() {
  const context =
    useContext(DataGridContext);

  if (!context) {
    throw new Error(
      "DataGridContext missing",
    );
  }

  return context as DataGridContextValue<T>;
}

interface DataGridProps<T> {
  data: T[];
  columns: ColumnDef<T, unknown>[];
  children: ReactNode;
  className?: string;
}

export default function DataGrid<T>({
  data,
  columns,
  children,
  className,
}: DataGridProps<T>) {
  const table = useDataGrid({
    data,
    columns,
  });

  return (
    <DataGridContext.Provider
      value={{ table }}
    >
      <div
        className={className}
      >
        <table className="w-full border-collapse">
          {children}
        </table>
      </div>
    </DataGridContext.Provider>
  );
}