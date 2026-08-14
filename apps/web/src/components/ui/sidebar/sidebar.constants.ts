import type {
  SidebarCollapsible,
  SidebarVariant,
} from "./sidebar.types";

export const DEFAULT_SIDEBAR_OPEN = true;

export const DEFAULT_SIDEBAR_VARIANT: SidebarVariant =
  "default";

export const DEFAULT_SIDEBAR_COLLAPSIBLE: SidebarCollapsible =
  "icon";

export const SIDEBAR_WIDTH = "18rem";

export const SIDEBAR_ICON_WIDTH = "4.5rem";

export const SIDEBAR_TRANSITION_DURATION = 200;

export const SIDEBAR_VARIANTS: readonly SidebarVariant[] =
  [
    "default",
    "floating",
    "inset",
  ] as const;

export const SIDEBAR_COLLAPSIBLE_TYPES: readonly SidebarCollapsible[] =
  [
    "offcanvas",
    "icon",
    "none",
  ] as const;