import Skeleton from "./Skeleton";

export interface SkeletonCardProps {
  showAvatar?: boolean;

  lines?: number;

  className?: string;
}

export default function SkeletonCard({
  showAvatar = true,
  lines = 3,
  className,
}: SkeletonCardProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-slate-800 bg-slate-950 p-6",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-center gap-4">
        {showAvatar && (
          <Skeleton
            circle
            className="h-12 w-12"
          />
        )}

        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-2/5" />

          <Skeleton className="h-3 w-1/4" />
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {Array.from({
          length: lines,
        }).map((_, index) => (
          <Skeleton
            key={index}
            className={
              index === lines - 1
                ? "h-3 w-2/3"
                : "h-3 w-full"
            }
          />
        ))}
      </div>
    </div>
  );
}