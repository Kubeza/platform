import * as React from "react";

import { cn } from "@/lib/utils";

interface FormDevToolsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  values: unknown;
  errors?: unknown;
  dirtyFields?: unknown;
  touchedFields?: unknown;
  enabled?: boolean;
}

export function FormDevTools({
  values,
  errors,
  dirtyFields,
  touchedFields,
  enabled = import.meta.env.DEV,
  className,
  ...props
}: FormDevToolsProps) {
  if (!enabled) {
    return null;
  }

  return (
    <aside
      className={cn(
        "rounded-lg border bg-muted/40 p-4 font-mono text-xs",
        className,
      )}
      {...props}
    >
      <h3 className="mb-4 text-sm font-semibold">
        Form DevTools
      </h3>

      <div className="space-y-4">
        <section>
          <h4 className="mb-1 font-medium">Values</h4>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </section>

        <section>
          <h4 className="mb-1 font-medium">Errors</h4>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </section>

        <section>
          <h4 className="mb-1 font-medium">
            Dirty Fields
          </h4>
          <pre>
            {JSON.stringify(dirtyFields, null, 2)}
          </pre>
        </section>

        <section>
          <h4 className="mb-1 font-medium">
            Touched Fields
          </h4>
          <pre>
            {JSON.stringify(
              touchedFields,
              null,
              2,
            )}
          </pre>
        </section>
      </div>
    </aside>
  );
}