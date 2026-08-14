"use client";

import {
  CheckCircle2,
  Clock3,
  PlayCircle,
  Search,
  Terminal,
  XCircle,
} from "lucide-react";

import { Button } from "../button";

import {
  CommandHistory,
  CommandHistoryActions,
  CommandHistoryCommand,
  CommandHistoryEmpty,
  CommandHistoryFilters,
  CommandHistoryHeader,
  CommandHistoryItem,
  CommandHistoryList,
  CommandHistoryOutput,
  CommandHistoryProvider,
  CommandHistorySearch,
  CommandHistorySkeleton,
  CommandHistoryStatus,
  CommandHistoryTimestamp,
} from ".";

import type {
  CommandHistoryEntry,
} from "./command-history.types";

const commands: CommandHistoryEntry[] = [
  {
    id: "1",
    command: "kubectl get pods -A",
    output:
      "kube-system   coredns   Running",
    shell: "zsh",
    workingDirectory: "~/devops-ai-lab",
    duration: 432,
    status: "success",
    timestamp: new Date(),
  },
  {
    id: "2",
    command: "terraform apply",
    output:
      "Apply complete! Resources: 2 added.",
    shell: "bash",
    workingDirectory: "~/terraform/aws",
    duration: 2514,
    status: "running",
    timestamp: new Date(),
  },
  {
    id: "3",
    command: "docker compose up",
    output:
      "Error: network not found.",
    shell: "zsh",
    workingDirectory: "~/apps/api",
    duration: 198,
    status: "failed",
    timestamp: new Date(),
  },
];

export default function CommandHistoryExamples() {
  return (
    <CommandHistoryProvider
      commands={commands}
    >
      <CommandHistory className="max-w-5xl">
        <CommandHistoryHeader>
          <div>
            <h2 className="text-lg font-semibold">
              Command History
            </h2>

            <p className="text-sm text-muted-foreground">
              Previously executed commands
            </p>
          </div>

          <CommandHistorySearch
            placeholder="Search..."
            className="max-w-xs"
          />
        </CommandHistoryHeader>

        <div className="border-b border-border p-4">
          <CommandHistoryFilters>
            <Button
              size="sm"
              variant="outline"
            >
              <Search className="mr-2 h-4 w-4" />
              All
            </Button>

            <Button
              size="sm"
              variant="outline"
            >
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Success
            </Button>

            <Button
              size="sm"
              variant="outline"
            >
              <PlayCircle className="mr-2 h-4 w-4" />
              Running
            </Button>

            <Button
              size="sm"
              variant="outline"
            >
              <XCircle className="mr-2 h-4 w-4" />
              Failed
            </Button>
          </CommandHistoryFilters>
        </div>

        <CommandHistoryList>
          {commands.map((command) => (
            <CommandHistoryItem
              key={command.id}
            >
              <CommandHistoryCommand>
                {command.command}
              </CommandHistoryCommand>

              <CommandHistoryOutput>
                {command.output}
              </CommandHistoryOutput>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CommandHistoryStatus
                    status={command.status}
                  />

                  <CommandHistoryTimestamp
                    value={command.timestamp}
                  />

                  <span className="text-xs text-muted-foreground">
                    <Clock3 className="mr-1 inline h-3 w-3" />
                    {command.duration} ms
                  </span>
                </div>

                <CommandHistoryActions>
                  <Button
                    size="sm"
                    variant="outline"
                  >
                    <Terminal className="mr-2 h-4 w-4" />
                    Re-run
                  </Button>
                </CommandHistoryActions>
              </div>
            </CommandHistoryItem>
          ))}
        </CommandHistoryList>

        <CommandHistoryEmpty className="hidden" />

        <CommandHistorySkeleton
          className="hidden"
        />
      </CommandHistory>
    </CommandHistoryProvider>
  );
}