import type {
  HTMLAttributes,
} from "react";

export type DiffLineType =
  | "added"
  | "removed"
  | "unchanged";

export interface DiffLine {
  id: string;
  type: DiffLineType;
  content: string;
  oldLineNumber?: number;
  newLineNumber?: number;
}

export interface DiffViewerProps
  extends HTMLAttributes<HTMLDivElement> {
  oldValue: string;
  newValue: string;
  oldLabel?: string;
  newLabel?: string;
}