import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface ProfileCardProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title"
  > {
  name: ReactNode;
  jobTitle?: ReactNode;
  avatar?: string;
  avatarAlt?: string;
  description?: ReactNode;
  status?: ReactNode;
  metadata?: ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
}