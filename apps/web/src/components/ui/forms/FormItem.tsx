import { cn } from "@/lib/utils";

interface FormItemProps {
  children: React.ReactNode;
  className?: string;
}

export function FormItem({
  children,
  className,
}: FormItemProps) {
  return (
    <div
      className={cn(
        "space-y-2",
        className,
      )}
    >
      {children}
    </div>
  );
}