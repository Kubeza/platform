import {
  Bot,
  CheckCircle2,
  Play,
  Search,
  Terminal,
  Wrench,
} from "lucide-react";

import Container from "../../layout/Container";
import Section from "../../layout/Section";
import {
  Step,
  StepLabel,
  Stepper,
} from "../../ui/stepper";

const workflowSteps = [
  {
    icon: Play,
    title: "Select a Lab",
    description:
      "Choose a real DevOps failure scenario and start the engineering challenge.",
  },
  {
    icon: Terminal,
    title: "Environment Starts",
    description:
      "A fresh broken Linux environment is provisioned and connected to your browser.",
  },
  {
    icon: Search,
    title: "Investigate",
    description:
      "Use the terminal to inspect processes, logs, configuration and system state.",
  },
  {
    icon: Wrench,
    title: "Fix & Verify",
    description:
      "Apply the correct remediation and verify that the system has recovered.",
  },
  {
    icon: Bot,
    title: "AI Mentor",
    description:
      "Get contextual hints when you are stuck without losing the engineering challenge.",
  },
];

export default function HowItWorks(): React.JSX.Element {
  return (
    <Section
      id="how-it-works"
      className="relative overflow-hidden border-t border-white/[0.04] bg-[#050816]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[-12rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#4F46E5]/[0.05] blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#67E8F9]">
              How Kubeza Works
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Learn through the
              <span className="block bg-gradient-to-r from-[#4F46E5] via-[#1D9BF0] to-[#67E8F9] bg-clip-text text-transparent">
                engineering loop.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
              Kubeza turns every lab into a controlled production-style
              incident. You investigate first, make decisions, execute the
              fix and verify the result.
            </p>
          </div>

          <div className="mt-14 rounded-2xl border border-white/[0.08] bg-[#080D1D]/80 p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
            <Stepper
              activeStep={0}
              orientation="horizontal"
              className="gap-3"
            >
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Step
                    key={step.title}
                    index={index}
                    className="min-w-0"
                  >
                    <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-[#4F46E5]/30 bg-[#0A1020] shadow-lg shadow-black/20">
                      <Icon
                        className="size-5 text-[#67E8F9]"
                        aria-hidden="true"
                      />
                    </div>

                    <StepLabel
                      title={step.title}
                      description={step.description}
                      className="mt-4 max-w-40"
                    />
                  </Step>
                );
              })}
            </Stepper>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
              <Terminal
                className="mt-0.5 size-4 shrink-0 text-[#1D9BF0]"
                aria-hidden="true"
              />

              <div>
                <p className="text-sm font-medium text-white">
                  Real terminal interaction
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Work with commands and system state instead of clicking
                  through simulated answers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
              <Bot
                className="mt-0.5 size-4 shrink-0 text-[#67E8F9]"
                aria-hidden="true"
              />

              <div>
                <p className="text-sm font-medium text-white">
                  Contextual assistance
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  The Mentor helps you reason about the current failure rather
                  than simply revealing the answer.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
              <CheckCircle2
                className="mt-0.5 size-4 shrink-0 text-emerald-400"
                aria-hidden="true"
              />

              <div>
                <p className="text-sm font-medium text-white">
                  Verification matters
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  A lab is complete only when the broken system is actually
                  recovered and verified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}