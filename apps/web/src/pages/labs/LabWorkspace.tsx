"use client";

import { useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Lightbulb,
  RotateCcw,
  Search,
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
import { GuidedMode } from "../../components/lab/GuidedMode";

import { useLabProgress } from "../../hooks/useLabProgress";
import { useLabTerminal } from "../../hooks/useLabTerminal";

import type { LabDefinition } from "../../labs/types";
import type { AIChatMessage } from "../../components/ui/ai-chat/ai-chat.types";
import type { GuidedAction } from "../../components/lab/GuidedMode";

interface LabWorkspaceProps {
  lab: LabDefinition;
}

const initialMentorMessages: AIChatMessage[] = [
  {
    id: "mentor-1",
    role: "assistant",
    content:
      "Your lab computer is ready. Start by investigating the service failure.",
    timestamp: "AI Mentor",
  },
  {
    id: "mentor-2",
    role: "assistant",
    content:
      "I can guide you without solving the lab for you. If you get stuck, ask for a hint.",
    timestamp: "AI Mentor",
  },
];

export default function LabWorkspace({
  lab,
}: LabWorkspaceProps): React.JSX.Element {
  const {
    commands,
    input,
    setInput,
    runCommand,
    reset,
  } = useLabTerminal();

  const {
    steps,
    currentStep,
    processCommand,
    resetProgress,
    isComplete,
  } = useLabProgress();

  const [mentorMessages, setMentorMessages] =
    useState<AIChatMessage[]>(
      initialMentorMessages,
    );

  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);

  const [
    completionDismissed,
    setCompletionDismissed,
  ] = useState(false);

  const handleRunCommand = () => {
    const command = input.trim();

    if (!command) {
      return;
    }

    const result = runCommand(command);

    if (result) {
      processCommand({
        command: result.command.command,
        output: result.command.output,
      });

      setCompletionDismissed(false);
    }
  };

  const handleGuidedAction = (
    action: GuidedAction,
  ) => {
    const labAction =
      lab.guidedActions.find(
        (item) => item.id === action.id,
      );

    if (labAction) {
      setInput(labAction.command);
    }
  };

  const askMentor = (message: string) => {
    setMentorMessages((current) => [
      ...current,
      {
        id: `${Date.now()}`,
        role: "user",
        content: message,
        timestamp: "You",
      },
    ]);

    window.setTimeout(() => {
      setMentorMessages((current) => [
        ...current,
        {
          id: `${Date.now()}-answer`,
          role: "assistant",
          content:
            "Start with the current failure. Use the terminal to investigate it, then inspect the configuration around the line reported by the validation command.",
          timestamp: "AI Mentor",
        },
      ]);
    }, 400);
  };

  const resetLab = () => {
    reset();
    resetProgress();

    setCompletionDismissed(false);
    setMentorMessages(initialMentorMessages);
  };

  const continueLab = () => {
    setCompletionDismissed(true);

    window.setTimeout(() => {
      const problemArea =
        document.getElementById(
          "lab-problem-area",
        );

      problemArea?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const showCompletionModal =
    isComplete && !completionDismissed;

  return (
    <div className="flex h-screen min-h-[680px] w-full flex-col overflow-hidden bg-[#03060D] text-white">
      {/* TOP BAR */}

      <header className="flex h-14 shrink-0 items-center justify-between border-b border-white/[0.08] bg-[#070B16] px-3 sm:px-4">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <a
            href="/labs"
            className="flex size-8 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/[0.04] hover:text-white"
            aria-label="Back to labs"
            title="Back to labs"
          >
            <ArrowLeft className="size-4" />
          </a>

          <ChevronRight
            className="size-3.5 shrink-0 text-slate-700"
            aria-hidden="true"
          />

          <div className="min-w-0">
            <p className="truncate text-xs font-medium text-slate-500">
              Lab {lab.number}
            </p>

            <p className="truncate text-sm font-medium text-slate-200">
              {lab.title}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Badge
            variant="success"
            size="sm"
          >
            <span className="mr-1.5 inline-block size-1.5 rounded-full bg-emerald-400" />

            {isComplete
              ? "Completed"
              : "Lab ready"}
          </Badge>

          <button
            type="button"
            onClick={resetLab}
            className="flex size-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-slate-500 transition hover:border-white/[0.14] hover:text-white"
            aria-label="Reset lab"
            title="Reset lab"
          >
            <RotateCcw className="size-3.5" />
          </button>
        </div>
      </header>

      {/* WORKSPACE */}

      <div className="min-h-0 flex-1 overflow-hidden">
        <div
          className={[
            "grid h-full min-h-0 transition-[grid-template-columns] duration-200",
            leftOpen && rightOpen
              ? "grid-cols-[270px_minmax(0,1fr)_330px]"
              : leftOpen
                ? "grid-cols-[270px_minmax(0,1fr)]"
                : rightOpen
                  ? "grid-cols-[minmax(0,1fr)_330px]"
                  : "grid-cols-[minmax(0,1fr)]",
          ].join(" ")}
        >
          {/* MISSION */}

          {leftOpen && (
            <aside className="flex min-h-0 min-w-0 flex-col overflow-hidden border-r border-white/[0.08] bg-[#070B16]">
              <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/[0.07] px-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-[#67E8F9]/10 text-[#67E8F9]">
                    <TerminalSquare className="size-4" />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#67E8F9]">
                      Mission
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-600">
                      Lab {lab.number}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setLeftOpen(false)
                  }
                  className="flex size-7 items-center justify-center rounded-md text-slate-600 transition hover:bg-white/[0.04] hover:text-white"
                  aria-label="Close mission"
                >
                  <ArrowLeft className="size-3.5" />
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto">
                <div className="px-4 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-slate-300">
                        Mission progress
                      </p>

                      <p className="mt-1 text-[11px] text-slate-600">
                        Investigate. Fix. Verify.
                      </p>
                    </div>

                    <span className="font-mono text-xs font-semibold text-[#67E8F9]">
                      {currentStep}/{lab.steps.length}
                    </span>
                  </div>

                  {/* PROGRESS */}

                  <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/[0.05]">
                    <div
                      className="h-full rounded-full bg-[#67E8F9] transition-all duration-300"
                      style={{
                        width: `${
                          lab.steps.length > 0
                            ? Math.min(
                                (currentStep /
                                  lab.steps.length) *
                                  100,
                                100,
                              )
                            : 0
                        }%`,
                      }}
                    />
                  </div>

                  {/* STEPS */}

                  <div className="mt-5 space-y-1.5">
                    {steps.map((step) => {
                      const definition =
                        lab.steps.find(
                          (item) =>
                            item.id === step.id,
                        );

                      const active =
                        step.status === "active";

                      const completed =
                        step.status ===
                        "completed";

                      return (
                        <div
                          key={step.id}
                          className={[
                            "flex items-start gap-3 rounded-xl border p-3 transition",
                            active
                              ? "border-[#67E8F9]/20 bg-[#67E8F9]/[0.055]"
                              : completed
                                ? "border-emerald-400/[0.08] bg-emerald-400/[0.025]"
                                : "border-transparent",
                          ].join(" ")}
                        >
                          <span
                            className={[
                              "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold",
                              completed
                                ? "bg-emerald-400/15 text-emerald-400"
                                : active
                                  ? "bg-[#67E8F9] text-[#031015]"
                                  : "border border-white/[0.1] text-slate-600",
                            ].join(" ")}
                          >
                            {completed ? (
                              <CheckCircle2 className="size-3.5" />
                            ) : (
                              step.id
                            )}
                          </span>

                          <div className="min-w-0">
                            <p
                              className={[
                                "text-xs font-medium",
                                active
                                  ? "text-white"
                                  : completed
                                    ? "text-slate-400"
                                    : "text-slate-500",
                              ].join(" ")}
                            >
                              {definition?.title ??
                                step.title}
                            </p>

                            <p className="mt-1 text-[11px] leading-5 text-slate-700">
                              {definition?.description ??
                                step.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* OBJECTIVE */}

                  <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.015] p-4">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="size-3.5 text-[#67E8F9]" />

                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                        Objective
                      </p>
                    </div>

                    <p className="mt-2 text-[11px] leading-5 text-slate-500">
                      {lab.objective}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          )}

          {/* TERMINAL CENTER */}

          <main className="min-h-0 min-w-0 overflow-hidden bg-[#03060D]">
            <div className="flex h-full min-h-0 flex-col">
              {/* CENTER TOOLBAR */}

              <div className="flex h-12 shrink-0 items-center justify-between border-b border-white/[0.06] px-3 sm:px-5">
                <div className="flex items-center gap-2">
                  {!leftOpen && (
                    <button
                      type="button"
                      onClick={() =>
                        setLeftOpen(true)
                      }
                      className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-2.5 py-1.5 text-[11px] text-slate-500 transition hover:border-white/[0.14] hover:text-white"
                    >
                      <ArrowRight className="size-3" />
                      Mission
                    </button>
                  )}

                  <span className="hidden text-[10px] font-medium uppercase tracking-[0.14em] text-slate-700 sm:inline">
                    Terminal workspace
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-slate-600">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  {lab.environment.operatingSystem}
                </div>
              </div>

              {/* TERMINAL AREA */}

              <div className="min-h-0 flex-1 overflow-y-auto">
                <div className="mx-auto w-full max-w-[1500px] px-3 py-4 sm:px-5 sm:py-5 lg:px-6">
                  {/* PROBLEM STRIP */}

                  <section
                    id="lab-problem-area"
                    className="mb-4 rounded-xl border border-white/[0.07] bg-[#070B16]"
                  >
                    <div className="flex items-start gap-3 px-4 py-3.5">
                      <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#67E8F9]/10 text-[#67E8F9]">
                        <Lightbulb className="size-3.5" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#67E8F9]">
                          Mission objective
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-400">
                          {lab.objective}
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* TERMINAL */}

                  <section>
                    <div className="mb-2 flex items-center justify-between px-1">
                      <div className="flex items-center gap-2">
                        <TerminalSquare className="size-3.5 text-slate-600" />

                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                          Lab terminal
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                        <span className="size-1.5 rounded-full bg-emerald-400" />
                        Connected
                      </div>
                    </div>

                    <TerminalProvider
                      commands={commands}
                      status="connected"
                    >
                      <Terminal className="flex h-[min(62vh,620px)] min-h-[400px] w-full max-w-none flex-col overflow-hidden rounded-xl border border-white/[0.1] bg-black shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
                        <TerminalHeader className="shrink-0 px-4 py-2.5">
                          <TerminalToolbar>
                            <div className="flex items-center gap-3">
                              <span className="flex gap-1.5">
                                <span className="size-2.5 rounded-full bg-red-400/70" />
                                <span className="size-2.5 rounded-full bg-amber-400/70" />
                                <span className="size-2.5 rounded-full bg-emerald-400/70" />
                              </span>

                              <span className="font-mono text-[10px] text-slate-500">
                                ubuntu@kubeza-lab
                              </span>
                            </div>

                            <TerminalStatus status="connected" />
                          </TerminalToolbar>
                        </TerminalHeader>

                        <TerminalBody
                          autoScrollKey={
                            commands.length
                          }
                          className="min-h-0 flex-1 p-4 sm:p-5"
                        >
                          <div className="min-h-0">
                            {commands.map(
                              (command) => (
                                <div
                                  key={command.id}
                                  className="mb-4"
                                >
                                  <TerminalLine className="min-w-0">
                                    <TerminalPrompt
                                      user="ubuntu"
                                      host="kubeza-lab"
                                      path="~"
                                    />

                                    <span className="ml-2 break-words font-mono text-xs font-medium text-slate-200">
                                      {
                                        command.command
                                      }
                                    </span>
                                  </TerminalLine>

                                  {command.output ? (
                                    <TerminalOutput className="mt-1 max-w-full overflow-x-hidden whitespace-pre-wrap break-words font-mono text-[11px] leading-5 text-slate-500">
                                      {
                                        command.output
                                      }
                                    </TerminalOutput>
                                  ) : null}
                                </div>
                              ),
                            )}

                            <TerminalLine className="min-w-0">
                              <TerminalPrompt
                                user="ubuntu"
                                host="kubeza-lab"
                                path="~"
                              />

                              <TerminalInput
                                value={input}
                                onChange={(
                                  event,
                                ) =>
                                  setInput(
                                    event
                                      .target
                                      .value,
                                  )
                                }
                                onKeyDown={(
                                  event,
                                ) => {
                                  if (
                                    event.key ===
                                    "Enter"
                                  ) {
                                    handleRunCommand();
                                  }
                                }}
                                autoFocus
                                aria-label="Linux terminal command"
                                className="ml-2"
                                placeholder=""
                              />

                              <TerminalCursor />
                            </TerminalLine>
                          </div>
                        </TerminalBody>
                      </Terminal>
                    </TerminalProvider>
                  </section>

                  {/* GUIDED ACTIONS */}

                  <section className="mt-4">
                    <GuidedMode
                      actions={lab.guidedActions}
                      className="overflow-hidden rounded-xl border border-white/[0.07]"
                      onAction={
                        handleGuidedAction
                      }
                    />
                  </section>

                  {/* ENVIRONMENT + SUCCESS */}

                  <section className="mt-4 grid gap-3 pb-6 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/[0.07] bg-[#070B16] p-4">
                      <div className="flex items-center gap-2.5">
                        <Server className="size-3.5 text-slate-600" />

                        <p className="text-xs font-medium text-slate-300">
                          Environment
                        </p>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-[11px] text-slate-600">
                          Operating system
                        </span>

                        <span className="text-[11px] text-slate-400">
                          {
                            lab.environment
                              .operatingSystem
                          }
                        </span>
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-[11px] text-slate-600">
                          Session
                        </span>

                        <span className="text-[11px] text-emerald-400">
                          {lab.environment.session}
                        </span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-[#070B16] p-4">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="size-3.5 text-emerald-400" />

                        <p className="text-xs font-medium text-slate-300">
                          Success condition
                        </p>
                      </div>

                      <p className="mt-3 text-[11px] leading-5 text-slate-500">
                        {lab.successCondition}
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>

          {/* AI MENTOR */}

          {rightOpen && (
            <aside className="flex min-h-0 min-w-0 flex-col overflow-hidden border-l border-white/[0.08] bg-[#070B16]">
              <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/[0.07] px-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-[#67E8F9]/10 text-[#67E8F9]">
                    <Sparkles className="size-3.5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-semibold text-white">
                        AI Mentor
                      </p>

                      <span className="rounded-full bg-emerald-400/10 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-emerald-400">
                        Ready
                      </span>
                    </div>

                    <p className="mt-0.5 text-[10px] text-slate-600">
                      Guidance, not answers
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setRightOpen(false)
                  }
                  className="flex size-7 items-center justify-center rounded-md text-slate-600 transition hover:bg-white/[0.04] hover:text-white"
                  aria-label="Close AI Mentor"
                >
                  <X className="size-3.5" />
                </button>
              </div>

              <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
                <div className="shrink-0 border-b border-white/[0.07] px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] text-slate-600">
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                      Watching your terminal
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        askMentor(
                          "I need help with this lab.",
                        )
                      }
                      className="flex items-center gap-1 text-[10px] text-slate-600 transition hover:text-slate-300"
                    >
                      <CircleHelp className="size-3" />
                      Need help?
                    </button>
                  </div>
                </div>

                {/* CHAT */}

                <div className="min-h-0 flex-1 overflow-hidden p-3">
                  <AIChat
                    messages={mentorMessages}
                    emptyMessage="Your AI Mentor is ready."
                    className="h-full min-h-0 overflow-hidden border-0 bg-transparent"
                  />
                </div>

                {/* QUICK ACTIONS */}

                <div className="shrink-0 border-t border-white/[0.07] p-3">
                  <p className="mb-2.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-700">
                    Quick guidance
                  </p>

                  <div className="space-y-1.5">
                    <button
                      type="button"
                      onClick={() =>
                        askMentor(
                          "Give me a hint without giving me the answer.",
                        )
                      }
                      className="flex w-full items-center gap-2.5 rounded-lg border border-[#67E8F9]/10 bg-[#67E8F9]/[0.025] px-3 py-2.5 text-left text-[11px] text-[#67E8F9] transition hover:border-[#67E8F9]/25 hover:bg-[#67E8F9]/[0.05]"
                    >
                      <Lightbulb className="size-3.5 shrink-0" />
                      Give me a hint
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        askMentor(
                          "Explain what is happening in this lab.",
                        )
                      }
                      className="flex w-full items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.015] px-3 py-2.5 text-left text-[11px] text-slate-500 transition hover:border-white/[0.12] hover:text-white"
                    >
                      <Search className="size-3.5 shrink-0" />
                      Explain this
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* COMPLETION */}

      {showCompletionModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lab-complete-title"
        >
          <div className="w-full max-w-md overflow-hidden rounded-2xl border border-emerald-400/20 bg-[#080D18] shadow-2xl shadow-black/50">
            <div className="p-6 sm:p-7">
              <div className="flex flex-col items-center text-center">
                <div className="relative flex size-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                  <div className="absolute inset-0 rounded-2xl border border-emerald-400/20" />

                  <Award className="size-7" />
                </div>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Mission accomplished
                </p>

                <h2
                  id="lab-complete-title"
                  className="mt-2 text-2xl font-semibold tracking-tight text-white"
                >
                  Lab complete 🎉
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                  You found the problem, fixed the
                  Nginx configuration, and restored
                  the service successfully.
                </p>
              </div>

              <div className="mt-5 space-y-2 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                {[
                  "Investigated the service failure",
                  "Found the broken configuration",
                  "Made the required fix",
                  "Verified and restored Nginx",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-xs text-slate-400"
                  >
                    <CheckCircle2 className="size-3.5 shrink-0 text-emerald-400" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={continueLab}
                  className="flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#67E8F9] px-4 text-sm font-semibold text-[#031015] transition hover:bg-[#8CF0FF]"
                >
                  Continue exploring
                  <ArrowRight className="size-4" />
                </button>

                <button
                  type="button"
                  onClick={resetLab}
                  className="flex h-9 w-full items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 text-xs font-medium text-slate-400 transition hover:border-white/[0.14] hover:text-white"
                >
                  <RotateCcw className="size-3.5" />
                  Try again
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}