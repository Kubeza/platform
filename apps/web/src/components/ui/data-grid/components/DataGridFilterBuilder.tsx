import type { Column } from "@tanstack/react-table";
import { Filter, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface FilterRule {
  id: string;
  operator: "contains" | "equals";
  value: string;
}

interface DataGridFilterBuilderProps<TData, TValue> {
  column: Column<TData, TValue>;
}

export default function DataGridFilterBuilder<
  TData,
  TValue,
>({
  column,
}: DataGridFilterBuilderProps<
  TData,
  TValue
>) {
  const [rules, setRules] =
    useState<FilterRule[]>([
      {
        id: crypto.randomUUID(),
        operator: "contains",
        value: "",
      },
    ]);

  function updateRule(
    id: string,
    changes: Partial<FilterRule>,
  ) {
    setRules((previous) =>
      previous.map((rule) =>
        rule.id === id
          ? {
              ...rule,
              ...changes,
            }
          : rule,
      ),
    );
  }

  function removeRule(id: string) {
    setRules((previous) =>
      previous.filter(
        (rule) => rule.id !== id,
      ),
    );
  }

  function applyFilters() {
    const values = rules
      .map((rule) => rule.value.trim())
      .filter(Boolean);

    column.setFilterValue(
      values.length
        ? values
        : undefined,
    );
  }

  return (
    <div className="space-y-4 rounded-lg border p-4">
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4" />
        <h3 className="font-medium">
          Filter Builder
        </h3>
      </div>

      {rules.map((rule) => (
        <div
          key={rule.id}
          className="flex gap-2"
        >
          <select
            value={rule.operator}
            onChange={(event) =>
              updateRule(rule.id, {
                operator:
                  event.target
                    .value as FilterRule["operator"],
              })
            }
            className="rounded-md border px-3"
          >
            <option value="contains">
              Contains
            </option>
            <option value="equals">
              Equals
            </option>
          </select>

          <input
            value={rule.value}
            onChange={(event) =>
              updateRule(rule.id, {
                value:
                  event.target.value,
              })
            }
            className="flex-1 rounded-md border px-3"
          />

          <Button
            variant="danger"
            size="icon"
            onClick={() =>
              removeRule(rule.id)
            }
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}

      <div className="flex gap-2">
        <Button
          variant="secondary"
          onClick={() =>
            setRules((previous) => [
              ...previous,
              {
                id: crypto.randomUUID(),
                operator:
                  "contains",
                value: "",
              },
            ])
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Rule
        </Button>

        <Button
          variant="primary"
          onClick={applyFilters}
        >
          Apply
        </Button>
      </div>
    </div>
  );
}