import {
  Bot,
  Cloud,
  Code2,
  Container as ContainerIcon,
  Gauge,
  GitBranch,
  Network,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react";

import Container from "../../layout/Container";
import Section from "../../layout/Section";
import Card from "../../ui/card/Card";

const capabilities = [
  {
    icon: Terminal,
    eyebrow: "REAL ENVIRONMENTS",
    title: "Break things. Fix them.",
    description:
      "Practice against real Linux environments with intentional failures instead of simulated quizzes or static exercises.",
    accent: "from-[#4F46E5]/20 to-[#1D9BF0]/5",
  },
  {
    icon: Bot,
    eyebrow: "AI MENTOR",
    title: "Guidance when you need it.",
    description:
      "Get contextual hints based on the problem you're actually investigating without having the solution handed to you.",
    accent: "from-[#67E8F9]/15 to-[#1D9BF0]/5",
  },
  {
    icon: Workflow,
    eyebrow: "ENGINEERING WORKFLOW",
    title: "Think like production.",
    description:
      "Diagnose, investigate, execute, verify and recover using the same engineering loop used in real DevOps environments.",
    accent: "from-[#1D9BF0]/15 to-[#4F46E5]/5",
  },
];

const platformLayers = [
  {
    icon: Cloud,
    label: "Cloud Infrastructure",
    description: "AWS · Azure · GCP",
  },
  {
    icon: ContainerIcon,
    label: "Containers",
    description: "Docker · Kubernetes",
  },
  {
    icon: Code2,
    label: "Infrastructure as Code",
    description: "Terraform",
  },
  {
    icon: GitBranch,
    label: "Delivery",
    description: "Git · CI/CD",
  },
];

const engineeringLoop = [
  "Observe",
  "Diagnose",
  "Execute",
  "Verify",
];

export default function PlatformOverview(): React.JSX.Element {
  return (
    <Section
      id="platform"
      className="relative overflow-hidden border-t border-white/[0.04] bg-[#060A17]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[-16rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-[#4F46E5]/[0.05] blur-3xl" />

        <div className="absolute right-[-14rem] bottom-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#1D9BF0]/[0.04] blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#67E8F9]">
              The Kubeza Platform
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              A workspace built around
              <span className="block bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
                real engineering.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Kubeza connects infrastructure, terminal workflows and AI
              guidance into one engineering environment. The goal is not to
              memorize commands. It is to build the judgment to operate
              systems.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <Card
                  key={capability.title}
                  className="group relative overflow-hidden border-white/[0.08] bg-[#0A1020]/80 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-[#0C1326]"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 bg-gradient-to-br ${capability.accent} opacity-60`}
                  />

                  <div className="relative p-6 sm:p-7">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                      <Icon
                        className="size-5 text-[#67E8F9]"
                        aria-hidden="true"
                      />
                    </div>

                    <p className="mt-7 text-[11px] font-semibold tracking-[0.18em] text-slate-500">
                      {capability.eyebrow}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                      {capability.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {capability.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <Card className="overflow-hidden border-white/[0.08] bg-[#080D1D]/90">
              <div className="border-b border-white/[0.07] px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-[#4F46E5]/10 text-[#67E8F9]">
                    <Network className="size-4" aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      One engineering surface
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Infrastructure connected across the workflow
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-px bg-white/[0.05] sm:grid-cols-2">
                {platformLayers.map((layer) => {
                  const Icon = layer.icon;

                  return (
                    <div
                      key={layer.label}
                      className="bg-[#080D1D] p-5 transition-colors hover:bg-[#0B1122]"
                    >
                      <Icon
                        className="size-5 text-[#1D9BF0]"
                        aria-hidden="true"
                      />

                      <p className="mt-4 text-sm font-medium text-white">
                        {layer.label}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {layer.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="border-white/[0.08] bg-[#080D1D]/90">
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-[#67E8F9]/10 text-[#67E8F9]">
                    <Gauge className="size-4" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                      Engineering loop
                    </p>

                    <h3 className="mt-1 font-semibold text-white">
                      From failure to confidence
                    </h3>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {engineeringLoop.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-3"
                    >
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#4F46E5]/30 bg-[#4F46E5]/10 text-xs font-semibold text-[#67E8F9]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <span className="text-sm text-slate-300">
                        {step}
                      </span>

                      {index < engineeringLoop.length - 1 && (
                        <div className="ml-auto h-px w-8 bg-white/[0.08]" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-start gap-3 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.04] p-4">
                  <ShieldCheck
                    className="mt-0.5 size-4 shrink-0 text-emerald-400"
                    aria-hidden="true"
                  />

                  <p className="text-xs leading-5 text-slate-400">
                    Every lab is designed around investigation and verification,
                    not simply producing the correct command.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}