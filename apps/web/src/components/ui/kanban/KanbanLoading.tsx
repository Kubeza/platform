import { cn } from "@/lib/cn";

interface KanbanLoadingProps {
  cards?: number;
  className?: string;
}

const KanbanLoading = ({
  cards = 4,
  className,
}: KanbanLoadingProps) => {
  return (
    <div
      className={cn(
        "space-y-3",
        className,
      )}
    >
      {Array.from({
        length: cards,
      }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-xl border border-slate-800 bg-slate-900 p-4"
        >
          <div className="h-4 w-2/3 rounded bg-slate-700" />

          <div className="mt-3 h-3 rounded bg-slate-800" />

          <div className="mt-2 h-3 w-3/4 rounded bg-slate-800" />

          <div className="mt-6 flex justify-between">
            <div className="h-6 w-20 rounded bg-slate-800" />

            <div className="h-6 w-10 rounded bg-slate-800" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanLoading;