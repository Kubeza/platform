import { cva, type VariantProps } from "class-variance-authority";

export const cardVariants = cva(
  [
    "relative",
    "overflow-hidden",
    "rounded-2xl",
    "border",
    "transition-all",
    "duration-300",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-slate-800",
          "bg-slate-950",
        ],

        elevated: [
          "border-slate-800",
          "bg-slate-950",
          "shadow-2xl",
        ],

        glass: [
          "border-white/10",
          "bg-white/5",
          "backdrop-blur-xl",
        ],

        gradient: [
          "border-indigo-500/30",
          "bg-gradient-to-br",
          "from-slate-950",
          "via-slate-900",
          "to-indigo-950/40",
        ],

        outlined: [
          "border-slate-700",
          "bg-transparent",
        ],
      },

      padding: {
        none: "",

        sm: "p-4",

        md: "p-6",

        lg: "p-8",
      },

      interactive: {
        true: [
          "cursor-pointer",
          "hover:-translate-y-1",
          "hover:border-indigo-500/40",
          "hover:shadow-[0_20px_60px_rgba(79,70,229,0.25)]",
        ],

        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      padding: "md",
      interactive: false,
    },
  },
);

export type CardVariantProps = VariantProps<
  typeof cardVariants
>;