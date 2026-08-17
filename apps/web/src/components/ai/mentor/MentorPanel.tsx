import { useState } from "react";

import {
  CircleHelp,
  Lightbulb,
  Search,
  Sparkles,
} from "lucide-react";

import {
  AIChat,
  type AIChatMessage,
} from "../../ui/ai-chat";

import { AIPrompt } from "../../ui/ai-prompt";

import {
  mentorEngine,
  type MentorContext,
} from "../../../ai/mentor";

interface MentorPanelProps {
  context: MentorContext;
}

const initialMessages: AIChatMessage[] = [
  {
    id: "mentor-welcome",
    role: "assistant",
    content:
      "Your AI Mentor is ready. I will help you investigate the problem without giving you the solution.",
    timestamp: "AI Mentor",
  },
];

export function MentorPanel({
  context,
}: MentorPanelProps): React.JSX.Element {
  const [messages, setMessages] =
    useState<AIChatMessage[]>(
      initialMessages,
    );

  const [input, setInput] =
    useState("");

  const [isThinking, setIsThinking] =
    useState(false);

  function askMentor(message: string): void {
    const trimmed = message.trim();

    if (!trimmed || isThinking) {
      return;
    }

    setMessages((current) => [
      ...current,
      {
        id: `user-${Date.now()}`,
        role: "user",
        content: trimmed,
        timestamp: "You",
      },
    ]);

    setInput("");
    setIsThinking(true);

    window.setTimeout(() => {
      const response =
        mentorEngine.respond({
          message: trimmed,
          context,
        });

      setMessages((current) => [
        ...current,
        {
          id: `mentor-${Date.now()}`,
          role: "assistant",
          content: response.message,
          timestamp: "AI Mentor",
        },
      ]);

      setIsThinking(false);
    }, 250);
  }

  return (
    <section className="flex min-h-0 flex-1 flex-col overflow-hidden bg-[#070B16]">
      <header className="flex h-16 shrink-0 items-center gap-3 border-b border-white/[0.07] px-4">
        <div className="flex size-9 items-center justify-center rounded-lg bg-[#67E8F9]/10 text-[#67E8F9]">
          <Sparkles className="size-4" />
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-white">
              AI Mentor
            </p>

            <span className="rounded-full bg-emerald-400/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-emerald-400">
              Ready
            </span>
          </div>

          <p className="mt-0.5 truncate text-[11px] text-slate-600">
            Context-aware lab guidance
          </p>
        </div>
      </header>

      <div className="shrink-0 border-b border-white/[0.07] p-4">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="size-1.5 rounded-full bg-emerald-400" />
          Watching your lab context
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-hidden p-4">
        <AIChat
          messages={messages}
          emptyMessage="Your AI Mentor is ready."
          className="h-full min-h-0 overflow-auto border-0 bg-transparent"
        />
      </div>

      <div className="shrink-0 border-t border-white/[0.07] p-4">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-700">
          Ask the Mentor
        </p>

        <div className="mb-3 grid gap-2">
          <button
            type="button"
            onClick={() =>
              askMentor(
                "Give me a hint without giving me the answer.",
              )
            }
            disabled={isThinking}
            className="flex w-full items-center gap-3 rounded-xl border border-[#67E8F9]/15 bg-[#67E8F9]/[0.035] px-3 py-3 text-left text-xs text-[#67E8F9] transition hover:border-[#67E8F9]/30 hover:bg-[#67E8F9]/[0.06] disabled:pointer-events-none disabled:opacity-40"
          >
            <Lightbulb className="size-4 shrink-0" />
            Give me a hint
          </button>

          <button
            type="button"
            onClick={() =>
              askMentor(
                "Explain what is happening in this lab.",
              )
            }
            disabled={isThinking}
            className="flex w-full items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.015] px-3 py-3 text-left text-xs text-slate-400 transition hover:border-white/[0.14] hover:text-white disabled:pointer-events-none disabled:opacity-40"
          >
            <Search className="size-4 shrink-0" />
            Explain this
          </button>

          <button
            type="button"
            onClick={() =>
              askMentor(
                "What should I investigate next?",
              )
            }
            disabled={isThinking}
            className="flex w-full items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.015] px-3 py-3 text-left text-xs text-slate-400 transition hover:border-white/[0.14] hover:text-white disabled:pointer-events-none disabled:opacity-40"
          >
            <CircleHelp className="size-4 shrink-0" />
            What should I do next?
          </button>
        </div>

        <AIPrompt
          value={input}
          onValueChange={setInput}
          onSubmitPrompt={askMentor}
          disabled={isThinking}
          placeholder={
            isThinking
              ? "Mentor is thinking..."
              : "Ask your AI Mentor..."
          }
        />

        <p className="mt-2 px-1 text-[10px] text-slate-700">
          {isThinking
            ? "Analyzing your lab context..."
            : "Enter to send · Shift + Enter for a new line"}
        </p>
      </div>
    </section>
  );
}