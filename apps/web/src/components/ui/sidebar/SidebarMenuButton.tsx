"use client";

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type BaseProps = {
  icon?: ReactNode;
  active?: boolean;
};

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type SidebarMenuButtonProps =
  | AnchorProps
  | ButtonProps;

export function SidebarMenuButton({
  icon,
  active = false,
  className,
  children,
  ...props
}: SidebarMenuButtonProps) {
  const classes = cn(
    "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
    "hover:bg-accent hover:text-accent-foreground",
    active &&
      "bg-accent text-accent-foreground",
    className,
  );

  if ("href" in props && props.href) {
    return (
      <a
        {...props}
        className={classes}
      >
        {icon}
        <span className="flex-1 truncate">
          {children}
        </span>
      </a>
    );
  }

  const {
    type = "button",
    ...buttonProps
  } = props as ButtonProps;

  return (
    <button
      {...buttonProps}
      type={type}
      className={classes}
    >
      {icon}
      <span className="flex-1 truncate">
        {children}
      </span>
    </button>
  );
}