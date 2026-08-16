"use client";

import { useState } from "react";

import {
  ChevronRight,
  MessageCircle,
  RotateCcw,
  Server,
  Sparkles,
  TerminalSquare,
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
  LinuxPracticeEngine,
} from "../../practice/engines";

import type { AIChatMessage } from "../../components/ui/ai-chat/ai-chat.types";
import type { TerminalCommand } from "../../components/ui/terminal/terminal.types";

const INITIAL_COMMANDS: TerminalCommand[] = [
  {
    id: "linux-welcome",
    command: "",
    output: [
      "Welcome to your Linux practice environment.",
      "",
      "This is your machine.",
      "Explore it, experiment, and practice.",
      "",
      "Type a command to get started.",
    ].join("\n"),
    timestamp: "now",
  },
];

const INITIAL_MENTOR_MESSAGES: AIChatMessage[] = [
  {
    id: "linux-mentor-1",
    role: "assistant",
    content:
      "Your Linux environment is ready. Use the terminal freely. If you want help understanding a command, Linux concept, or something you are trying to do, ask me.",
    timestamp: "AI Mentor",
  },
];

export default function LinuxPracticeWorkspace(): React.JSX.Element {
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
      () => new LinuxPracticeEngine(),
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

    const nextCommand: TerminalCommand = {
      id: `${Date.now()}-${Math.random()}`,
      command,
      output: result.output,
      timestamp: new Date(),
    };

    setCommands((current) => [
      ...current,
      nextCommand,
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
            "I'm ready to help with your Linux practice. Keep using the terminal and ask me anything about what you're doing.",
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
            className="shrink-0 text-sm font-semibold tracking-tight text-white"
          >
            Kubeza
          </a>

          <ChevronRight className="size-4 shrink-0 text-slate-700" />

          <span className="truncate text-sm text-slate-400">
            Practice
          </span>

          <ChevronRight className="hidden size-4 shrink-0 text-slate-700 sm:block" />

          <span className="hidden truncate text-sm font-medium text-slate-200 sm:block">
            Linux
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2">
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
            className="flex size-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-slate-500 transition hover:border-white/[0.14] hover:text-white"
            aria-label="Reset Linux environment"
            title="Reset environment"
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
          <aside className="flex min-h-0 min-w-0 flex-col overflow-hidden border-r border-white/[0.08] bg-[#070B16]">
            <div className="flex h-16 shrink-0 items-center gap-3 border-b border-white/[0.07] px-4">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#67E8F9]/10 text-[#67E8F9]">
                <TerminalSquare className="size-4" />
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#67E8F9]">
                  Practice
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Linux
                </p>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-hidden px-4 py-5">
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.015] p-4">
                <div className="flex items-center gap-3">
                  <Server className="size-4 text-slate-500" />

                  <p className="text-xs font-medium text-slate-300">
                    Linux environment
                  </p>
                </div>

                <p className="mt-3 text-xs leading-5 text-slate-600">
                  A Linux machine for free practice and experimentation.
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.015] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-700">
                  Environment
                </p>

                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-700">
                      Operating system
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Ubuntu Linux
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-700">
                      Shell
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Bash
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-700">
                      Host
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      kubeza-linux
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
                    Linux Practice
                  </p>

                  <p className="mt-1 text-xs text-slate-600">
                    Use the terminal freely. Explore Linux without a guided problem.
                  </p>
                </div>

                {!mentorOpen && (
                  <button
                    type="button"
                    onClick={() =>
                      setMentorOpen(true)
                    }
                    className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-xs text-slate-400 transition hover:border-white/[0.14] hover:text-white"
                  >
                    <MessageCircle className="size-3.5" />
                    AI Mentor
                  </button>
                )}
              </div>

              <section className="flex min-h-0 flex-1 flex-col">
                <div className="mb-2 flex shrink-0 items-center justify-between px-1">
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
                  <Terminal className="min-h-0 flex-1 w-full max-w-none rounded-2xl border border-white/[0.1] bg-black shadow-2xl">
                    <TerminalHeader className="shrink-0 px-5 py-3">
                      <TerminalToolbar>
                        <div className="flex items-center gap-3">
                          <span className="flex gap-1.5">
                            <span className="size-2.5 rounded-full bg-red-400/80" />
                            <span className="size-2.5 rounded-full bg-amber-400/80" />
                            <span className="size-2.5 rounded-full bg-emerald-400/80" />
                          </span>

                          <span className="text-xs font-medium text-slate-400">
                            ubuntu@kubeza-linux
                          </span>
                        </div>

                        <TerminalStatus status="connected" />
                      </TerminalToolbar>
                    </TerminalHeader>

                    <TerminalBody
                      autoScrollKey={commands.length}
                      className="min-h-0 flex-1 p-5 sm:p-6"
                    >
                      <div className="min-h-0">
                        {commands.map(
                          (command) => (
                            <div
                              key={command.id}
                              className="mb-5"
                            >
                              {command.command && (
                                <TerminalLine className="min-w-0">
                                  <TerminalPrompt
                                    user="ubuntu"
                                    host="kubeza-linux"
                                    path="~"
                                  />

                                  <span className="ml-2 break-words font-medium text-slate-200">
                                    {command.command}
                                  </span>
                                </TerminalLine>
                              )}

                              {command.output ? (
                                <TerminalOutput className="mt-1 max-w-full overflow-x-hidden whitespace-pre-wrap break-words text-slate-400">
                                  {command.output}
                                </TerminalOutput>
                              ) : null}
                            </div>
                          ),
                        )}

                        <TerminalLine className="min-w-0">
                          <TerminalPrompt
                            user="ubuntu"
                            host="kubeza-linux"
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
                            aria-label="Linux terminal command"
                            className="ml-2"
                          />

                          <TerminalCursor />
                        </TerminalLine>
                      </div>
                    </TerminalBody>
                  </Terminal>
                </TerminalProvider>
              </section>
            </div>
          </main>

          {mentorOpen && (
            <aside className="flex min-h-0 min-w-0 flex-col overflow-hidden border-l border-white/[0.08] bg-[#070B16]">
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/[0.07] px-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-[#67E8F9]/10 text-[#67E8F9]">
                    <Sparkles className="size-4" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-white">
                        AI Mentor
                      </p>

                      <span className="rounded-full bg-emerald-400/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-emerald-400">
                        Ready
                      </span>
                    </div>

                    <p className="mt-0.5 text-[11px] text-slate-600">
                      Available when you need help
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setMentorOpen(false)
                  }
                  className="flex size-8 items-center justify-center rounded-md text-slate-600 transition hover:bg-white/[0.04] hover:text-white"
                  aria-label="Close AI Mentor"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
                <div className="min-h-0 flex-1 overflow-hidden p-4">
                  <AIChat
                    messages={mentorMessages}
                    emptyMessage="Your AI Mentor is ready."
                    className="h-full min-h-0 overflow-hidden border-0 bg-transparent"
                  />
                </div>

                <div className="shrink-0 border-t border-white/[0.07] p-3">
                  <div className="flex items-end gap-2 rounded-xl border border-white/[0.08] bg-[#03060D] px-3 py-2 focus-within:border-[#67E8F9]/30">
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
                      className="min-h-9 flex-1 resize-none border-0 bg-transparent py-2 text-sm text-slate-200 outline-none placeholder:text-slate-600"
                    />

                    <button
                      type="button"
                      onClick={sendMentorMessage}
                      disabled={
                        !mentorInput.trim()
                      }
                      className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#67E8F9] text-[#031015] disabled:opacity-30"
                      aria-label="Send mentor message"
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