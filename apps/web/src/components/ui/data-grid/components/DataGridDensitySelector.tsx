import { Rows3 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export type DataGridDensity =
  | "compact"
  | "comfortable"
  | "spacious";

interface DataGridDensitySelectorProps {
  value?: DataGridDensity;
  onChange?: (
    density: DataGridDensity,
  ) => void;
}

export default function DataGridDensitySelector({
  value = "comfortable",
  onChange,
}: DataGridDensitySelectorProps) {
  const [density, setDensity] =
    useState<DataGridDensity>(value);

  function changeDensity(
    next: DataGridDensity,
  ) {
    setDensity(next);
    onChange?.(next);
  }

  return (
    <div className="flex items-center gap-2">
      <Rows3 className="h-4 w-4" />

      <Button
        size="sm"
        variant={
          density === "compact"
            ? "primary"
            : "outline"
        }
        onClick={() =>
          changeDensity("compact")
        }
      >
        Compact
      </Button>

      <Button
        size="sm"
        variant={
          density ===
          "comfortable"
            ? "primary"
            : "outline"
        }
        onClick={() =>
          changeDensity(
            "comfortable",
          )
        }
      >
        Comfortable
      </Button>

      <Button
        size="sm"
        variant={
          density === "spacious"
            ? "primary"
            : "outline"
        }
        onClick={() =>
          changeDensity(
            "spacious",
          )
        }
      >
        Spacious
      </Button>
    </div>
  );
}