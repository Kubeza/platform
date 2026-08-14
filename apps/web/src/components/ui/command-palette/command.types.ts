import type {
  HTMLMotionProps,
} from "framer-motion";

import type {
  ReactNode,
} from "react";

export interface CommandItemData {
  id: string;

  label: string;

  description?: string;

  keywords?: string[];

  shortcut?: string[];

  icon?: ReactNode;

  disabled?: boolean;

  group?: string;

  onSelect: () => void;
}

export interface CommandPaletteContextValue {
  open: boolean;

  query: string;

  selected: number;

  items: CommandItemData[];

  setOpen: (open: boolean) => void;

  setQuery: (
    query: string,
  ) => void;

  setSelected: (
    index: number,
  ) => void;

  registerItem: (
    item: CommandItemData,
  ) => void;

  unregisterItem: (
    id: string,
  ) => void;
}

export interface CommandPaletteProps
  extends Omit<
    HTMLMotionProps<"div">,
    "children"
  > {
  children: ReactNode;

  open?: boolean;

  defaultOpen?: boolean;

  onOpenChange?: (
    open: boolean,
  ) => void;

  shortcut?: string;
}

export interface CommandInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange"
  > {}

export interface CommandGroupProps {
  heading: string;

  children: ReactNode;
}

export interface CommandItemProps {
  item: CommandItemData;
}

export interface CommandEmptyProps {
  children?: ReactNode;
}