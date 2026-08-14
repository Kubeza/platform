import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface TreeNodeData {
  id: string;

  label: ReactNode;

  icon?: ReactNode;

  children?: TreeNodeData[];

  expanded?: boolean;

  selected?: boolean;

  disabled?: boolean;

  loading?: boolean;

  data?: unknown;
}

export interface TreeContextValue {
  expandedNodes: Set<string>;

  selectedNodes: Set<string>;

  toggleNode: (
    id: string,
  ) => void;

  selectNode: (
    id: string,
  ) => void;

  multiSelect: boolean;
}

export interface TreeProps {
  className?: string;

  style?: React.CSSProperties;

  id?: string;

  role?: string;

  nodes: TreeNodeData[];

  initialExpanded?: string[];

  initialSelected?: string[];

  multiSelect?: boolean;

  onToggle?: (
    id: string,
    expanded: boolean,
  ) => void;

  onSelectionChange?: (
    ids: string[],
  ) => void;
}

export interface TreeNodeProps
  extends HTMLAttributes<HTMLLIElement> {
  node: TreeNodeData;

  level: number;
}

export interface TreeItemProps
  extends HTMLAttributes<HTMLDivElement> {
  node: TreeNodeData;

  level: number;
}

export interface TreeToggleProps
  extends HTMLAttributes<HTMLButtonElement> {
  expanded: boolean;

  hasChildren: boolean;
}

export interface TreeIconProps
  extends HTMLAttributes<HTMLSpanElement> {
  icon?: ReactNode;

  expanded?: boolean;

  loading?: boolean;
}

export interface TreeLabelProps
  extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export interface TreeChildrenProps {
  expanded: boolean;

  children?: ReactNode;

  className?: string;
}