import {
  ClipboardList,
} from "lucide-react";

const KanbanEmpty =
  () => {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-slate-700 py-10 text-center">
        <ClipboardList className="mb-3 h-8 w-8 text-slate-600" />

        <p className="text-sm font-medium text-slate-300">
          No cards
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Add a task to get started.
        </p>
      </div>
    );
  };

export default KanbanEmpty;