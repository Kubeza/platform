import { cva, type VariantProps } from "class-variance-authority";

export const selectVariants = cva(
  [
    "relative",
    "flex",
    "w-full",
    "items-center",
    "rounded-xl",
    "border",
    "bg-slate-950/60",
    "transition-all",
    "duration-200",
    "backdrop-blur-sm",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-slate-800",
          "focus-within:border-blue-500",
          "focus-within:ring-4",
          "focus-within:ring-blue-500/10",
        ],

        success: [
          "border-emerald-500/40",
          "focus-within:border-emerald-500",
          "focus-within:ring-4",
          "focus-within:ring-emerald-500/10",
        ],

        danger: [
          "border-red-500/40",
          "focus-within:border-red-500",
          "focus-within:ring-4",
          "focus-within:ring-red-500/10",
        ],
      },

      size: {
        sm: "h-10 px-3",
        md: "h-11 px-4",
        lg: "h-12 px-5",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export type SelectVariantProps = VariantProps<
  typeof selectVariants
>;