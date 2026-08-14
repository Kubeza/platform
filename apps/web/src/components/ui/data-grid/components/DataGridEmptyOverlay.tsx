import { Database } from "lucide-react";

interface DataGridEmptyOverlayProps {
  title?: string;
  description?: string;
}

export default function DataGridEmptyOverlay({
  title = "No data available",
  description = "There are currently no records to display.",
}: DataGridEmptyOverlayProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <Database className="h-12 w-12 text-muted-foreground" />

        <div>
          <h3 className="text-lg font-semibold">
            {title}
          </h3>

          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}