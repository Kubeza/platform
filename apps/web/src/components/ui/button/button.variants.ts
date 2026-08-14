import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "rounded-xl",
    "font-medium",
    "transition-all",
    "duration-200",
    "select-none",
    "outline-none",
    "whitespace-nowrap",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "focus-visible:ring-2",
    "focus-visible:ring-blue-500/50",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-[#050816]",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-blue-600",
          "text-white",
          "hover:bg-blue-700",
          "shadow-lg",
          "shadow-blue-600/20",
        ],

        secondary: [
          "bg-slate-800",
          "text-slate-100",
          "border",
          "border-slate-700",
          "hover:bg-slate-700",
        ],

        outline: [
          "border",
          "border-slate-700",
          "bg-transparent",
          "text-slate-100",
          "hover:bg-slate-900",
        ],

        ghost: [
          "bg-transparent",
          "text-slate-200",
          "hover:bg-slate-800",
        ],

        danger: [
          "bg-red-600",
          "text-white",
          "hover:bg-red-700",
        ],

        success: [
          "bg-emerald-600",
          "text-white",
          "hover:bg-emerald-700",
        ],
      },

      size: {
        sm: "h-9 px-4 text-sm",

        md: "h-11 px-5 text-sm",

        lg: "h-12 px-6 text-base",

        xl: "h-14 px-8 text-base",

        icon: "h-11 w-11 p-0",
      },

      fullWidth: {
        true: "w-full",
        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;