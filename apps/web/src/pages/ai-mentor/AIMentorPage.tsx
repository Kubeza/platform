import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";

import Navbar from "../../components/navigation/Navbar";

const capabilities = [
  {
    icon: Lightbulb,
    title: "Hints before answers",
    description:
      "The mentor can guide your investigation instead of immediately solving the problem.",
  },
  {
    icon: Terminal,
    title: "Context-aware guidance",
    description:
      "The long-term goal is to understand what you are doing inside the engineering environment.",
  },
  {
    icon: MessageCircle,
    title: "Interactive conversation",
    description:
      "Ask questions about commands, failures, architecture and the reasoning behind a fix.",
  },
  {
    icon: ShieldCheck,
    title: "Engineer stays in control",
    description:
      "AI should assist the engineer, not hide the underlying system or remove the learning experience.",
  },
];

export default function AIMentorPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-white/[0.07]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(79,70,229,0.2),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(103,232,249,0.07),transparent_30%)]" />

          <div className="relative mx-auto max-w-screen-2xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
            <div className="max-w-5xl">
              <div className="mb-7 flex size-12 items-center justify-center rounded-2xl border border-[#67E8F9]/15 bg-[#67E8F9]/[0.05] text-[#67E8F9]">
                <Sparkles className="size-5" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#67E8F9]">
                AI Mentor
              </p>

              <h1 className="mt-4 text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                AI that helps you
                <span className="block text-[#4F46E5]">
                  think like an engineer.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                Kubeza's AI Mentor is designed around investigation,
                reasoning, and guided problem solving.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                <a
                  href="/labs"
                  className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#4F46E5] px-4 text-sm font-semibold text-white transition hover:bg-[#4338CA]"
                >
                  Try a lab
                  <ArrowRight className="size-4" />
                </a>

                <a
                  href="/practice"
                  className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-4 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
                >
                  Practice freely
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid gap-4 lg:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.title}
                  className="rounded-2xl border border-white/[0.07] bg-[#070B16] p-7"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-[#67E8F9]/[0.06] text-[#67E8F9]">
                    <Icon className="size-5" />
                  </div>

                  <h2 className="mt-6 text-lg font-semibold">
                    {capability.title}
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                    {capability.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/[0.07] bg-[#070B16]">
          <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#67E8F9]">
                  Example interaction
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  The mentor should make you better, not dependent.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  Imagine your service has stopped working. Instead of
                  immediately receiving the fix, the mentor can help you
                  inspect the service status, interpret the error, identify
                  the relevant configuration, and verify your change.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "What should I check first?",
                    "What does this error mean?",
                    "Give me a hint, not the answer.",
                    "How can I verify the fix?",
                  ].map((question) => (
                    <div
                      key={question}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#050816] px-4 py-3"
                    >
                      <MessageCircle className="size-3.5 text-[#67E8F9]" />

                      <span className="text-xs text-slate-400">
                        {question}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#67E8F9]/10 bg-[#050816] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.3)]">
                <div className="flex items-center gap-3 border-b border-white/[0.07] pb-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-[#67E8F9]/10 text-[#67E8F9]">
                    <Bot className="size-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      AI Mentor
                    </p>

                    <p className="text-[10px] text-slate-600">
                      Engineering guidance
                    </p>
                  </div>

                  <span className="ml-auto flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-emerald-400">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    Ready
                  </span>
                </div>

                <div className="space-y-4 py-5">
                  <div className="flex gap-3">
                    <div className="size-7 shrink-0 rounded-full bg-[#67E8F9]/10" />

                    <div className="rounded-xl bg-white/[0.04] px-3 py-2.5">
                      <p className="text-xs leading-5 text-slate-400">
                        Start by checking whether the service itself is
                        running. That will tell us whether we should
                        investigate the process or its configuration.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <div className="rounded-xl bg-[#4F46E5] px-3 py-2.5">
                      <p className="text-xs text-white">
                        Give me a hint.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="size-7 shrink-0 rounded-full bg-[#67E8F9]/10" />

                    <div className="rounded-xl bg-white/[0.04] px-3 py-2.5">
                      <p className="text-xs leading-5 text-slate-400">
                        Run the service status command first. Look
                        carefully at the failure reason before changing
                        anything.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/[0.07] pt-4">
                  <div className="flex items-center gap-2 rounded-xl border border-white/[0.07] px-3 py-2.5 text-xs text-slate-700">
                    Ask your mentor...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 lg:py-28">
          <CheckCircle2 className="mx-auto size-7 text-[#67E8F9]" />

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            You remain the engineer.
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
            The AI Mentor is part of the platform's future direction.
            The goal is to make infrastructure learning more interactive,
            contextual, and useful without pretending the AI has already
            replaced the underlying engineering systems.
          </p>
        </section>
      </main>
    </div>
  );
}