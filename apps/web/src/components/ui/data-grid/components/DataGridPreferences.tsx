import { Settings2 } from "lucide-react";
import { useState } from "react";

interface DataGridPreferences {
  stripedRows: boolean;
  stickyHeader: boolean;
  hoverHighlight: boolean;
  compactMode: boolean;
}

export default function DataGridPreferences() {
  const [preferences, setPreferences] =
    useState<DataGridPreferences>({
      stripedRows: true,
      stickyHeader: true,
      hoverHighlight: true,
      compactMode: false,
    });

  function togglePreference(
    key: keyof DataGridPreferences,
  ) {
    setPreferences((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  }

  return (
    <div className="space-y-4 rounded-lg border p-4">
      <div className="flex items-center gap-2">
        <Settings2 className="h-4 w-4" />
        <h3 className="font-medium">
          Preferences
        </h3>
      </div>

      {(
        Object.keys(
          preferences,
        ) as Array<
          keyof DataGridPreferences
        >
      ).map((key) => (
        <label
          key={key}
          className="flex items-center justify-between"
        >
          <span className="capitalize">
            {key.replace(
              /([A-Z])/g,
              " $1",
            )}
          </span>

          <input
            type="checkbox"
            checked={
              preferences[key]
            }
            onChange={() =>
              togglePreference(
                key,
              )
            }
          />
        </label>
      ))}
    </div>
  );
}