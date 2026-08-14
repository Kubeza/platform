import {
  ArrowLeft,
  ArrowRight,
  GripVertical,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { useDataGridContext } from "./DataGrid";

export default function DataGridColumnOrdering() {
  const { table } =
    useDataGridContext<any>();

  const columns =
    table.getAllLeafColumns();

  function moveColumn(
    currentIndex: number,
    direction:
      | "left"
      | "right",
  ) {
    const order =
      columns.map(
        (column) =>
          column.id,
      );

    const target =
      direction === "left"
        ? Math.max(
            currentIndex - 1,
            0,
          )
        : Math.min(
            currentIndex + 1,
            order.length - 1,
          );

    const [item] =
      order.splice(
        currentIndex,
        1,
      );

    order.splice(
      target,
      0,
      item,
    );

    table.setColumnOrder(
      order,
    );
  }

  return (
    <div className="space-y-2 rounded-lg border p-3">
      <div className="flex items-center gap-2">
        <GripVertical className="h-4 w-4" />
        <h3 className="text-sm font-semibold">
          Column Order
        </h3>
      </div>

      <div className="space-y-2">
        {columns.map(
          (
            column,
            index,
          ) => (
            <div
              key={column.id}
              className="flex items-center justify-between rounded-md border px-3 py-2"
            >
              <span className="text-sm">
                {column.id}
              </span>

              <div className="flex gap-1">
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  onClick={() =>
                    moveColumn(
                      index,
                      "left",
                    )
                  }
                  disabled={
                    index === 0
                  }
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>

                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  onClick={() =>
                    moveColumn(
                      index,
                      "right",
                    )
                  }
                  disabled={
                    index ===
                    columns.length -
                      1
                  }
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}