import {
  forwardRef,
  useMemo,
  useState,
  type ImgHTMLAttributes,
} from "react";

import { User } from "lucide-react";

import { cn } from "@/lib/cn";

import {
  avatarVariants,
  type AvatarVariantProps,
} from "./avatar.variants";

export interface AvatarProps
  extends Omit<
      ImgHTMLAttributes<HTMLImageElement>,
      "size"
    >,
    AvatarVariantProps {
  name?: string;

  src?: string;

  online?: boolean;

  showStatus?: boolean;
}

function getInitials(name?: string) {
  if (!name) return "";

  return name
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

const statusSize = {
  xs: "h-2 w-2",
  sm: "h-2.5 w-2.5",
  md: "h-3 w-3",
  lg: "h-3.5 w-3.5",
  xl: "h-4 w-4",
  "2xl": "h-5 w-5",
};

const Avatar = forwardRef<
  HTMLImageElement,
  AvatarProps
>(
  (
    {
      className,
      name,
      src,
      alt,
      size,
      variant,
      online = false,
      showStatus = false,
      ...props
    },
    ref,
  ) => {
    const [failed, setFailed] = useState(false);

    const initials = useMemo(
      () => getInitials(name),
      [name],
    );

    return (
      <div
        className={cn(
          avatarVariants({
            size,
            variant,
          }),
          className,
        )}
      >
        {!failed && src ? (
          <img
            ref={ref}
            src={src}
            alt={alt ?? name ?? "Avatar"}
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
            {...props}
          />
        ) : initials ? (
          initials
        ) : (
          <User className="h-1/2 w-1/2 text-slate-500" />
        )}

        {showStatus && (
          <span
            className={cn(
              "absolute bottom-0 right-0 rounded-full border-2 border-slate-950",
              online
                ? "bg-emerald-500"
                : "bg-slate-500",
              statusSize[size ?? "md"],
            )}
          />
        )}
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

export default Avatar;