import {
  type HTMLAttributes,
  useState,
} from "react";

import {
  AlertCircle,
  CheckCircle2,
  Info,
  TriangleAlert,
  X,
} from "lucide-react";

import { cn } from "@/lib/cn";

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "success"
    | "warning"
    | "danger"
    | "info";

  dismissible?: boolean;

  icon?: boolean;
}

const variants = {
  default:
    "border-slate-700 bg-slate-900 text-slate-100",

  success:
    "border-emerald-500/30 bg-emerald-950/40 text-emerald-100",

  warning:
    "border-amber-500/30 bg-amber-950/40 text-amber-100",

  danger:
    "border-red-500/30 bg-red-950/40 text-red-100",

  info:
    "border-sky-500/30 bg-sky-950/40 text-sky-100",
};

const icons = {
  default: AlertCircle,
  success: CheckCircle2,
  warning: TriangleAlert,
  danger: AlertCircle,
  info: Info,
};

export default function Alert({
  children,
  className,
  variant = "default",
  dismissible = false,
  icon = true,
  ...props
}: AlertProps) {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  const Icon = icons[variant];

  return (
    <div
      role="alert"
      className={cn(
        "flex gap-4 rounded-xl border p-4",
        variants[variant],
        className,
      )}
      {...props}
    >
      {icon && (
        <Icon className="mt-0.5 h-5 w-5 shrink-0" />
      )}

      <div className="flex-1 space-y-1">
        {children}
      </div>

      {dismissible && (
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="rounded-lg p-1 transition hover:bg-white/10"
          aria-label="Dismiss alert"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}