import {
  BrainCircuit,
  CheckCircle2,
  Lightbulb,
  Terminal,
} from "lucide-react";

import Container from "../../layout/Container";
import Section from "../../layout/Section";

import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";

import { AIAgentStatus } from "../../ui/ai-agent-status";
import { AIChat } from "../../ui/ai-chat";
import { AICodeBlock } from "../../ui/ai-code-block";
import { AIPrompt } from "../../ui/ai-prompt";
import { AIToolResult } from "../../ui/ai-tool-result";

const mentorMessages = [
  {
    id: "mentor-1",
    role: "assistant" as const,
    content:
      "What have you checked so far? Start by validating the Nginx configuration before changing anything.",
    timestamp: "AI Mentor",
  },
  {
    id: "user-1",
    role: "user" as const,
    content: "nginx -t reports an unexpected closing brace.",
    timestamp: "You",
  },
  {
    id: "mentor-2",
    role: "assistant" as const,
    content:
      "Good. That confirms the failure is in the configuration. Inspect the reported area and identify which directive is incorrectly closed.",
    timestamp: "AI Mentor",
  },
];

export default function AIMentor(): React.JSX.Element {
  return (
    <Section
      id="ai-mentor"
      className="relative overflow-hidden border-t border-white/[0.04] bg-[#050816]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[-14rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#4F46E5]/[0.06] blur-3xl" />

        <div className="absolute right-[-12rem] top-1/2 h-[26rem] w-[26rem] rounded-full bg-[#67E8F9]/[0.04] blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#67E8F9]">
              AI Mentor
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Don't get the answer.
              <span className="block bg-gradient-to-r from-[#4F46E5] via-[#1D9BF0] to-[#67E8F9] bg-clip-text text-transparent">
                Get better at finding it.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
              Kubeza's AI Mentor understands the lab context and helps you
              reason through the failure. It gives you the next useful
              direction without taking the engineering problem away from you.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080D1D]/90 shadow-2xl shadow-black/30">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-white/[0.07] bg-[#070B18] p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                      Current lab
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-white">
                      Broken Nginx configuration
                    </h3>
                  </div>

                  <Badge
                    variant="warning"
                    size="sm"
                  >
                    Investigation
                  </Badge>
                </div>

                <div className="mt-7">
                  <AIAgentStatus
                    name="Kubeza AI Mentor"
                    status="running"
                    task="Analyzing lab context"
                    detail="Using terminal output and current failure state"
                    className="border-white/[0.08] bg-[#0A1020]"
                  />
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#4F46E5]/10">
                      <Terminal
                        className="size-4 text-[#67E8F9]"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        Environment
                      </p>

                      <p className="mt-0.5 text-sm text-slate-200">
                        Ubuntu Linux
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-red-400/10">
                      <BrainCircuit
                        className="size-4 text-red-400"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        Detected state
                      </p>

                      <p className="mt-0.5 text-sm text-red-300">
                        Nginx configuration failure
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <AICodeBlock
                    title="Last command"
                    language="bash"
                    code="nginx -t"
                    className="border-white/[0.08]"
                  />
                </div>

                <div className="mt-4">
                  <AIToolResult
                    tool="nginx-config-check"
                    status="error"
                    title="Configuration validation"
                    result="Unexpected closing brace detected in /etc/nginx/nginx.conf:42"
                  />
                </div>
              </div>

              <div className="flex min-h-[520px] flex-col bg-[#050912] p-4 sm:p-6">
                <AIChat
                  messages={mentorMessages}
                  className="min-h-0 flex-1 border-white/[0.08] bg-[#080D18]"
                  emptyMessage="Your AI Mentor is ready."
                  footer={
                    <AIPrompt
                      placeholder="Ask your AI Mentor about the failure..."
                      submitLabel="Ask Mentor"
                      className="border-white/[0.08] bg-[#050912]"
                    />
                  }
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card className="border-white/[0.07] bg-white/[0.02] p-5">
              <Lightbulb
                className="size-5 text-[#67E8F9]"
                aria-hidden="true"
              />

              <h3 className="mt-4 text-sm font-semibold text-white">
                Context-aware hints
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Guidance is based on the lab state and what you have already
                discovered.
              </p>
            </Card>

            <Card className="border-white/[0.07] bg-white/[0.02] p-5">
              <BrainCircuit
                className="size-5 text-[#1D9BF0]"
                aria-hidden="true"
              />

              <h3 className="mt-4 text-sm font-semibold text-white">
                Engineering reasoning
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                The Mentor helps you form and test hypotheses instead of
                replacing your decisions.
              </p>
            </Card>

            <Card className="border-white/[0.07] bg-white/[0.02] p-5">
              <CheckCircle2
                className="size-5 text-emerald-400"
                aria-hidden="true"
              />

              <h3 className="mt-4 text-sm font-semibold text-white">
                Verify the outcome
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                The goal is a recovered system and a validated fix, not merely
                a correct-looking command.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}