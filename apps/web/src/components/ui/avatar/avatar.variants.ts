import { cva, type VariantProps } from "class-variance-authority";

export const avatarVariants = cva(
  [
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "overflow-hidden",
    "rounded-full",
    "bg-slate-900",
    "font-semibold",
    "text-white",
    "select-none",
    "shrink-0",
    "border",
    "border-slate-800",
  ],
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-[10px]",
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
        xl: "h-16 w-16 text-lg",
        "2xl": "h-20 w-20 text-xl",
      },

      variant: {
        default: "bg-slate-900",
        primary: "bg-indigo-600",
        success: "bg-emerald-600",
        warning: "bg-amber-500 text-black",
        danger: "bg-red-600",
        gradient:
          "bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400",
      },
    },

    defaultVariants: {
      size: "md",
      variant: "default",
    },
  },
);

export type AvatarVariantProps = VariantProps<
  typeof avatarVariants
>;