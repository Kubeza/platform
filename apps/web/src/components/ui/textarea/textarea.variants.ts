import { cva, type VariantProps } from "class-variance-authority";

export const textareaVariants = cva(
  [
    "flex",
    "w-full",
    "rounded-xl",
    "border",
    "bg-slate-950/60",
    "text-slate-100",
    "placeholder:text-slate-500",
    "transition-all",
    "duration-200",
    "outline-none",
    "resize-none",
    "backdrop-blur-sm",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
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
        sm: "min-h-24 px-3 py-2 text-sm",

        md: "min-h-32 px-4 py-3 text-base",

        lg: "min-h-40 px-5 py-4 text-lg",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export type TextareaVariantProps = VariantProps<
  typeof textareaVariants
>;