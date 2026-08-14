import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface CommandPaletteItem {
  id: string;
  label: string;
  description?: string;
  group?: string;
  icon?: ReactNode;
  shortcut?: string[];
  keywords?: string[];
  disabled?: boolean;
  onSelect?: () => void;
}

export interface CommandPaletteContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;

  query: string;
  setQuery: (query: string) => void;

  commands: CommandPaletteItem[];

  items: CommandPaletteItem[];
  registerItem: (
    item: CommandPaletteItem,
  ) => void;
  unregisterItem: (
    id: string,
  ) => void;

  selected: number;
  setSelected: (
    selected: number,
  ) => void;
}

export interface CommandPaletteProviderProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "children"
  > {
  children: ReactNode;
  open?: boolean;
  query?: string;
  commands: CommandPaletteItem[];
}

export interface CommandPaletteProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface CommandPaletteSearchProps
  extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
}

export interface CommandPaletteListProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface CommandPaletteGroupProps
  extends HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
}

export interface CommandPaletteItemProps
  extends HTMLAttributes<HTMLDivElement> {
  item: CommandPaletteItem;
}

export interface CommandPaletteShortcutProps
  extends HTMLAttributes<HTMLDivElement> {
  keys: string[];
}

export interface CommandPaletteEmptyProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface CommandPaletteFooterProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface CommandPaletteDialogProps
  extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
}

export interface CommandPaletteSkeletonProps
  extends HTMLAttributes<HTMLDivElement> {}