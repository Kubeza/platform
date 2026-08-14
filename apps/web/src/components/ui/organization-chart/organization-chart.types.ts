import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface OrganizationNode {
  id: string;
  name: string;
  title?: string;
  avatar?: string;
  children?: OrganizationNode[];
  content?: ReactNode;
}

export interface OrganizationChartProps
  extends HTMLAttributes<HTMLDivElement> {
  data: OrganizationNode;
  orientation?: "vertical" | "horizontal";
}