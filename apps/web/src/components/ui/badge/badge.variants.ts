import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-full",
    "border",
    "font-medium",
    "transition-colors",
    "select-none",
    "whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-slate-700",
          "bg-slate-900",
          "text-slate-200",
        ],

        primary: [
          "border-blue-500/30",
          "bg-blue-500/10",
          "text-blue-400",
        ],

        success: [
          "border-emerald-500/30",
          "bg-emerald-500/10",
          "text-emerald-400",
        ],

        warning: [
          "border-amber-500/30",
          "bg-amber-500/10",
          "text-amber-400",
        ],

        danger: [
          "border-red-500/30",
          "bg-red-500/10",
          "text-red-400",
        ],

        ai: [
          "border-cyan-500/30",
          "bg-cyan-500/10",
          "text-cyan-400",
        ],

        beta: [
          "border-violet-500/30",
          "bg-violet-500/10",
          "text-violet-400",
        ],

        enterprise: [
          "border-indigo-500/30",
          "bg-indigo-500/10",
          "text-indigo-300",
        ],

        outline: [
          "border-slate-600",
          "bg-transparent",
          "text-slate-300",
        ],
      },

      size: {
        sm: "px-2 py-0.5 text-xs",

        md: "px-3 py-1 text-sm",

        lg: "px-4 py-1.5 text-base",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;