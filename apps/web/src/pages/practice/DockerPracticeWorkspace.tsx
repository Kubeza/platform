"use client";

import { useState } from "react";

import {
  Box,
  ChevronRight,
  MessageCircle,
  RotateCcw,
  Sparkles,
  X,
} from "lucide-react";

import {
  Terminal,
  TerminalBody,
  TerminalCursor,
  TerminalHeader,
  TerminalInput,
  TerminalLine,
  TerminalOutput,
  TerminalPrompt,
  TerminalProvider,
  TerminalStatus,
  TerminalToolbar,
} from "../../components/ui/terminal";

import { AIChat } from "../../components/ui/ai-chat";
import { Badge } from "../../components/ui/badge";

import {
  DockerPracticeEngine,
} from "../../practice/engines";

import type { AIChatMessage } from "../../components/ui/ai-chat/ai-chat.types";
import type { TerminalCommand } from "../../components/ui/terminal/terminal.types";

const INITIAL_COMMANDS: TerminalCommand[] = [
  {
    id: "docker-welcome",
    command: "",
    output: [
      "Welcome to your Docker practice environment.",
      "",
      "A Docker environment is ready for practice.",
      "Explore containers, images, networks, volumes, and logs.",
      "",
      "Type a command to get started.",
    ].join("\n"),
    timestamp: "now",
  },
];

const INITIAL_MENTOR_MESSAGES: AIChatMessage[] = [
  {
    id: "docker-mentor-1",
    role: "assistant",
    content:
      "Your Docker environment is ready. Use the terminal freely and ask me anything about containers, images, networks, volumes, or Docker commands.",
    timestamp: "AI Mentor",
  },
];

export default function DockerPracticeWorkspace(): React.JSX.Element {
  const [commands, setCommands] =
    useState<TerminalCommand[]>(
      INITIAL_COMMANDS,
    );

  const [input, setInput] =
    useState("");

  const [mentorMessages, setMentorMessages] =
    useState<AIChatMessage[]>(
      INITIAL_MENTOR_MESSAGES,
    );

  const [mentorInput, setMentorInput] =
    useState("");

  const [mentorOpen, setMentorOpen] =
    useState(true);

  const [engine] =
    useState(
      () => new DockerPracticeEngine(),
    );

  const runCommand = () => {
    const command = input.trim();

    if (!command) {
      return;
    }

    const result =
      engine.execute(command);

    if (command === "clear") {
      setCommands([]);
      setInput("");
      return;
    }

    setCommands((current) => [
      ...current,
      {
        id: `${Date.now()}-${Math.random()}`,
        command,
        output: result.output,
        timestamp: new Date(),
      },
    ]);

    setInput("");
  };

  const resetTerminal = () => {
    engine.reset();
    setCommands(INITIAL_COMMANDS);
    setInput("");
  };

  const sendMentorMessage = () => {
    const message =
      mentorInput.trim();

    if (!message) {
      return;
    }

    setMentorMessages((current) => [
      ...current,
      {
        id: `${Date.now()}-user`,
        role: "user",
        content: message,
        timestamp: "You",
      },
    ]);

    setMentorInput("");

    window.setTimeout(() => {
      setMentorMessages((current) => [
        ...current,
        {
          id: `${Date.now()}-mentor`,
          role: "assistant",
          content:
            "I'm ready to help with Docker practice. Ask me about images, containers, networks, volumes, Dockerfiles, logs, or commands you're experimenting with.",
          timestamp: "AI Mentor",
        },
      ]);
    }, 400);
  };

  return (
    <div className="flex h-screen min-h-0 w-full flex-col overflow-hidden bg-[#050816] text-white">
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-white/[0.08] bg-[#070B16] px-4">
        <div className="flex min-w-0 items-center gap-3">
          <a
            href="/"
            className="text-sm font-semibold text-white"
          >
            Kubeza
          </a>

          <ChevronRight className="size-4 text-slate-700" />

          <span className="text-sm text-slate-400">
            Practice
          </span>

          <ChevronRight className="hidden size-4 text-slate-700 sm:block" />

          <span className="hidden text-sm font-medium text-slate-200 sm:block">
            Docker
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Badge
            variant="success"
            size="sm"
          >
            <span className="mr-1.5 inline-block size-1.5 rounded-full bg-emerald-400" />
            Environment ready
          </Badge>

          <button
            type="button"
            onClick={resetTerminal}
            className="flex size-9 items-center justify-center rounded-lg border border-white/[0.08] text-slate-500 hover:text-white"
            aria-label="Reset Docker environment"
          >
            <RotateCcw className="size-4" />
          </button>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-hidden">
        <div
          className={
            mentorOpen
              ? "grid h-full min-h-0 grid-cols-[220px_minmax(0,1fr)_340px]"
              : "grid h-full min-h-0 grid-cols-[220px_minmax(0,1fr)]"
          }
        >
          <aside className="flex min-h-0 flex-col overflow-hidden border-r border-white/[0.08] bg-[#070B16]">
            <div className="flex h-16 items-center gap-3 border-b border-white/[0.07] px-4">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#67E8F9]/10 text-[#67E8F9]">
                <Box className="size-4" />
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#67E8F9]">
                  Practice
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Docker
                </p>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-hidden px-4 py-5">
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.015] p-4">
                <div className="flex items-center gap-3">
                  <Box className="size-4 text-slate-500" />

                  <p className="text-xs font-medium text-slate-300">
                    Docker environment
                  </p>
                </div>

                <p className="mt-3 text-xs leading-5 text-slate-600">
                  Practice containers, images, networks, volumes, and logs.
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.015] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-700">
                  Environment
                </p>

                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-700">
                      Engine
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Docker Engine
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-700">
                      Host
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      kubeza-docker
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-700">
                      Status
                    </p>

                    <p className="mt-1 flex items-center gap-2 text-xs text-emerald-400">
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                      Running
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="min-h-0 min-w-0 overflow-hidden bg-[#03060D]">
            <div className="flex h-full min-h-0 flex-col p-4 sm:p-5">
              <div className="mb-4 flex shrink-0 items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#67E8F9]">
                    Docker Practice
                  </p>

                  <p className="mt-1 text-xs text-slate-600">
                    Work with containers and Docker directly from the terminal.
                  </p>
                </div>

                {!mentorOpen && (
                  <button
                    type="button"
                    onClick={() =>
                      setMentorOpen(true)
                    }
                    className="flex items-center gap-2 rounded-lg border border-white/[0.08] px-3 py-2 text-xs text-slate-400 hover:text-white"
                  >
                    <MessageCircle className="size-3.5" />
                    AI Mentor
                  </button>
                )}
              </div>

              <section className="flex min-h-0 flex-1 flex-col">
                <div className="mb-2 flex items-center justify-between px-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                    Terminal
                  </p>

                  <div className="flex items-center gap-2 text-xs text-emerald-400">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    Connected
                  </div>
                </div>

                <TerminalProvider
                  commands={commands}
                  status="connected"
                >
                  <Terminal className="min-h-0 flex-1 w-full rounded-2xl border border-white/[0.1] bg-black shadow-2xl">
                    <TerminalHeader className="shrink-0 px-5 py-3">
                      <TerminalToolbar>
                        <div className="flex items-center gap-3">
                          <span className="flex gap-1.5">
                            <span className="size-2.5 rounded-full bg-red-400/80" />
                            <span className="size-2.5 rounded-full bg-amber-400/80" />
                            <span className="size-2.5 rounded-full bg-emerald-400/80" />
                          </span>

                          <span className="text-xs text-slate-400">
                            ubuntu@kubeza-docker
                          </span>
                        </div>

                        <TerminalStatus status="connected" />
                      </TerminalToolbar>
                    </TerminalHeader>

                    <TerminalBody
                      autoScrollKey={commands.length}
                      className="min-h-0 flex-1 p-5 sm:p-6"
                    >
                      {commands.map(
                        (command) => (
                          <div
                            key={command.id}
                            className="mb-5"
                          >
                            {command.command && (
                              <TerminalLine>
                                <TerminalPrompt
                                  user="ubuntu"
                                  host="kubeza-docker"
                                  path="~"
                                />

                                <span className="ml-2 break-words font-medium text-slate-200">
                                  {command.command}
                                </span>
                              </TerminalLine>
                            )}

                            {command.output ? (
                              <TerminalOutput className="mt-1 whitespace-pre-wrap break-words text-slate-400">
                                {command.output}
                              </TerminalOutput>
                            ) : null}
                          </div>
                        ),
                      )}

                      <TerminalLine>
                        <TerminalPrompt
                          user="ubuntu"
                          host="kubeza-docker"
                          path="~"
                        />

                        <TerminalInput
                          value={input}
                          onChange={(event) =>
                            setInput(
                              event.target.value,
                            )
                          }
                          onKeyDown={(event) => {
                            if (
                              event.key ===
                              "Enter"
                            ) {
                              runCommand();
                            }
                          }}
                          autoFocus
                          aria-label="Docker terminal command"
                          className="ml-2"
                        />

                        <TerminalCursor />
                      </TerminalLine>
                    </TerminalBody>
                  </Terminal>
                </TerminalProvider>
              </section>
            </div>
          </main>

          {mentorOpen && (
            <aside className="flex min-h-0 flex-col overflow-hidden border-l border-white/[0.08] bg-[#070B16]">
              <div className="flex h-16 items-center justify-between border-b border-white/[0.07] px-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="size-4 text-[#67E8F9]" />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      AI Mentor
                    </p>

                    <p className="text-[11px] text-slate-600">
                      Available when needed
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setMentorOpen(false)
                  }
                  className="flex size-8 items-center justify-center rounded-md text-slate-600 hover:text-white"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
                <div className="min-h-0 flex-1 overflow-hidden p-4">
                  <AIChat
                    messages={mentorMessages}
                    emptyMessage="Your AI Mentor is ready."
                    className="h-full border-0 bg-transparent"
                  />
                </div>

                <div className="border-t border-white/[0.07] p-3">
                  <div className="flex items-end gap-2 rounded-xl border border-white/[0.08] bg-[#03060D] px-3 py-2">
                    <textarea
                      value={mentorInput}
                      onChange={(event) =>
                        setMentorInput(
                          event.target.value,
                        )
                      }
                      onKeyDown={(event) => {
                        if (
                          event.key === "Enter" &&
                          !event.shiftKey
                        ) {
                          event.preventDefault();
                          sendMentorMessage();
                        }
                      }}
                      rows={1}
                      placeholder="Ask anything..."
                      className="min-h-9 flex-1 resize-none bg-transparent py-2 text-sm text-slate-200 outline-none placeholder:text-slate-600"
                    />

                    <button
                      type="button"
                      onClick={sendMentorMessage}
                      disabled={
                        !mentorInput.trim()
                      }
                      className="flex size-9 items-center justify-center rounded-lg bg-[#67E8F9] text-[#031015] disabled:opacity-30"
                    >
                      <MessageCircle className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}