"use client";

import {
  Terminal,
  TerminalBody,
  TerminalCursor,
  TerminalFooter,
  TerminalHeader,
  TerminalInput,
  TerminalLine,
  TerminalOutput,
  TerminalPrompt,
  TerminalProvider,
  TerminalStatus,
  TerminalToolbar,
} from ".";

import type { TerminalCommand } from "./terminal.types";

const commands: TerminalCommand[] = [
  {
    id: "1",
    command: "pwd",
    output: "/home/nani/devops-ai-lab",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
  },
  {
    id: "2",
    command: "kubectl get pods",
    output:
      "frontend-7f98b6c7c5-l6j7p   Running\nbackend-74d85cbdf8-f6wzg   Running",
    timestamp: new Date(Date.now() - 1000 * 60 * 3),
  },
  {
    id: "3",
    command: "terraform plan",
    output:
      "Plan: 2 to add, 0 to change, 0 to destroy.",
    timestamp: new Date(),
  },
];

export default function TerminalExamples() {
  return (
    <TerminalProvider
      commands={commands}
      status="connected"
    >
      <Terminal className="max-w-5xl">
        <TerminalHeader>
          <TerminalToolbar>
            <span className="font-semibold text-white">
              DevOps AI Terminal
            </span>

            <TerminalStatus status="connected" />
          </TerminalToolbar>
        </TerminalHeader>

        <TerminalBody>
          {commands.map((command) => (
            <div
              key={command.id}
              className="mb-4"
            >
              <TerminalLine>
                <TerminalPrompt
                  user="nani"
                  host="devops-ai"
                  path="~/labs"
                />

                <span className="text-green-400">
                  {command.command}
                </span>
              </TerminalLine>

              {command.output ? (
                <TerminalOutput>
                  {command.output}
                </TerminalOutput>
              ) : null}
            </div>
          ))}
        </TerminalBody>

        <TerminalFooter>
          <TerminalLine>
            <TerminalPrompt
              user="nani"
              host="devops-ai"
              path="~/labs"
            />

            <TerminalInput
              placeholder="Type a command..."
            />

            <TerminalCursor />
          </TerminalLine>
        </TerminalFooter>
      </Terminal>
    </TerminalProvider>
  );
}