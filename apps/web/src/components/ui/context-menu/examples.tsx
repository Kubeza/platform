"use client";

import {
  Copy,
  Edit,
  Scissors,
  Trash2,
} from "lucide-react";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuProvider,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from ".";

export default function ContextMenuExamples() {
  return (
    <ContextMenuProvider>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="flex h-48 w-72 items-center justify-center rounded-lg border border-dashed text-sm">
            Right-click anywhere inside this area
          </div>
        </ContextMenuTrigger>

        <ContextMenuContent>
          <ContextMenuLabel>
            Actions
          </ContextMenuLabel>

          <ContextMenuSeparator />

          <ContextMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            Copy
          </ContextMenuItem>

          <ContextMenuItem>
            <Scissors className="mr-2 h-4 w-4" />
            Cut
          </ContextMenuItem>

          <ContextMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            Rename
          </ContextMenuItem>

          <ContextMenuSeparator />

          <ContextMenuItem>
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </ContextMenuProvider>
  );
}