import * as React from "react";
import {
  useFieldArray,
  type Control,
  type FieldArrayPath,
  type FieldArrayWithId,
  type FieldValues,
} from "react-hook-form";
import {
  Minus,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FormFieldArrayProps<
  TFieldValues extends FieldValues,
  TFieldArrayName extends FieldArrayPath<TFieldValues>,
> extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "children"
  > {
  control: Control<TFieldValues>;
  name: TFieldArrayName;

  createItem: () => TFieldValues[TFieldArrayName][number];

  children: (
    field: FieldArrayWithId<
      TFieldValues,
      TFieldArrayName
    >,
    index: number,
    helpers: {
      remove: (index: number) => void;
      move: (from: number, to: number) => void;
      swap: (a: number, b: number) => void;
    },
  ) => React.ReactNode;

  addButtonText?: string;
  removeButtonText?: string;
  maxItems?: number;
  minItems?: number;
}

export function FormFieldArray<
  TFieldValues extends FieldValues,
  TFieldArrayName extends FieldArrayPath<TFieldValues>,
>({
  control,
  name,
  createItem,
  children,
  className,
  addButtonText = "Add Item",
  removeButtonText = "Remove",
  maxItems,
  minItems = 0,
  ...props
}: FormFieldArrayProps<
  TFieldValues,
  TFieldArrayName
>) {
  const {
    fields,
    append,
    remove,
    move,
    swap,
  } = useFieldArray({
    control,
    name,
  });

  const canAdd =
    maxItems === undefined ||
    fields.length < maxItems;

  const canRemove = (index: number) =>
    fields.length > minItems &&
    index >= 0;

  return (
    <div
      className={cn(
        "space-y-6",
        className,
      )}
      {...props}
    >
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="rounded-lg border p-5"
        >
          {children(field, index, {
            remove,
            move,
            swap,
          })}

          <div className="mt-4 flex justify-end">
            <Button
              type="button"
              variant="danger"
              size="sm"
              disabled={!canRemove(index)}
              onClick={() =>
                remove(index)
              }
            >
              <Minus className="mr-2 h-4 w-4" />
              {removeButtonText}
            </Button>
          </div>
        </div>
      ))}

      {canAdd && (
        <Button
          type="button"
          variant="secondary"
          onClick={() =>
            append(createItem())
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          {addButtonText}
        </Button>
      )}
    </div>
  );
}