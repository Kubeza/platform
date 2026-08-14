import { forwardRef } from "react";

import { Avatar } from "@/components/ui/avatar";

import { cn } from "@/lib/cn";

import type {
  KanbanAvatarGroupProps,
} from "./kanban.types";

const KanbanAvatarGroup =
  forwardRef<
    HTMLDivElement,
    KanbanAvatarGroupProps
  >(
    (
      {
        users = [],
        className,
        ...props
      },
      ref,
    ) => {
      if (
        users.length === 0
      ) {
        return null;
      }

      return (
        <div
          ref={ref}
          className={cn(
            "flex -space-x-2",
            className,
          )}
          {...props}
        >
          {users
            .slice(0, 4)
            .map((user) => (
              <Avatar
                key={
                  user.id
                }
                size="xs"
              >
                {user.avatar ? (
                  <img
                    src={
                      user.avatar
                    }
                    alt={
                      user.name
                    }
                  />
                ) : (
                  user.name
                    .charAt(0)
                    .toUpperCase()
                )}
              </Avatar>
            ))}

          {users.length >
            4 && (
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xs text-slate-400">
              +
              {users.length -
                4}
            </div>
          )}
        </div>
      );
    },
  );

KanbanAvatarGroup.displayName =
  "KanbanAvatarGroup";

export default KanbanAvatarGroup;