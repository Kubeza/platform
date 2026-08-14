import { forwardRef } from "react";
import {
  Calendar,
  MessageSquare,
  Paperclip,
} from "lucide-react";

import { cn } from "@/lib/cn";

import KanbanAvatarGroup from "./KanbanAvatarGroup";
import KanbanBadge from "./KanbanBadge";
import KanbanLabel from "./KanbanLabel";
import KanbanPriority from "./KanbanPriority";

import type {
  KanbanCardProps,
} from "./kanban.types";

const KanbanCard = forwardRef<
  HTMLDivElement,
  KanbanCardProps
>(
  (
    {
      card,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <article
        ref={ref}
        className={cn(
          "rounded-xl border border-slate-800 bg-slate-900 p-4 transition-all duration-200 hover:border-slate-700 hover:shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="flex items-start justify-between gap-3">
          <KanbanPriority
            priority={card.priority}
          />

          <KanbanBadge
            status={card.status}
          />
        </div>

        <h3 className="mt-3 text-sm font-semibold text-slate-100">
          {card.title}
        </h3>

        {card.description && (
          <p className="mt-2 text-sm leading-6 text-slate-400">
            {card.description}
          </p>
        )}

        {card.labels &&
          card.labels.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {card.labels.map(
                (label) => (
                  <KanbanLabel
                    key={label.id}
                    label={label}
                  />
                ),
              )}
            </div>
          )}

        <div className="mt-5 flex items-center justify-between">
          <KanbanAvatarGroup
            users={card.assignees}
          />

          <div className="flex items-center gap-4 text-xs text-slate-500">
            {card.comments !==
              undefined && (
              <div className="flex items-center gap-1">
                <MessageSquare className="h-3.5 w-3.5" />
                {card.comments}
              </div>
            )}

            {card.attachments !==
              undefined && (
              <div className="flex items-center gap-1">
                <Paperclip className="h-3.5 w-3.5" />
                {card.attachments}
              </div>
            )}
          </div>
        </div>

        {card.dueDate && (
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <Calendar className="h-3.5 w-3.5" />
            {card.dueDate}
          </div>
        )}

        {card.footer && (
          <div className="mt-4 border-t border-slate-800 pt-3">
            {card.footer}
          </div>
        )}
      </article>
    );
  },
);

KanbanCard.displayName =
  "KanbanCard";

export default KanbanCard;