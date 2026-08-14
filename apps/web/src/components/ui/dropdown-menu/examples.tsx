"use client";

import {
  ChevronDown,
  Copy,
  Edit,
  Settings,
  Trash2,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuProvider,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from ".";

export default function DropdownMenuExamples() {
  return (
    <DropdownMenuProvider>
      <DropdownMenu>
        <DropdownMenuTrigger>
          Actions
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>
            File Actions
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            Copy
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            Rename
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </DropdownMenuProvider>
  );
}