import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileSearch,
  Gauge,
  Lightbulb,
  Play,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";

import Navbar from "../../components/navigation/Navbar";

import type { LabDefinition } from "../../labs/types";

interface LabOverviewProps {
  lab: LabDefinition;
}

export default function LabOverview({
  lab,
}: LabOverviewProps): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#F3F2EE] text-[#18181B]">
      <Navbar />

      <main>
        {/* BACK */}

        <div className="mx-auto max-w-screen-2xl px-6 pt-8 sm:px-8 lg:px-12 xl:px-16">
          <a
            href="/labs"
            className="inline-flex items-center gap-2 text-sm text-[#777770] transition hover:text-[#18181B]"
          >
            <ArrowLeft className="size-4" />
            Back to labs
          </a>
        </div>

        {/* HERO */}

        <section>
          <div className="mx-auto max-w-screen-2xl px-6 pb-14 pt-10 sm:px-8 lg:px-12 lg:pb-20 lg:pt-14 xl:px-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#4F46E5]/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#4F46E5]">
                    Lab {lab.number}
                  </span>

                  <span className="flex items-center gap-1.5 rounded-full border border-[#67C587]/20 bg-[#67C587]/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#39865A]">
                    <span className="size-1.5 rounded-full bg-[#55B879]" />
                    Runnable
                  </span>
                </div>

                <h1 className="mt-6 text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                  {lab.title}
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-[#686861] sm:text-lg">
                  {lab.objective}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="flex items-center gap-2 rounded-full border border-[#18181B]/[0.08] bg-[#FAF9F6] px-3.5 py-2 text-xs font-medium text-[#686861]">
                    <Gauge className="size-3.5 text-[#4F46E5]" />
                    {lab.difficulty}
                  </span>

                  <span className="flex items-center gap-2 rounded-full border border-[#18181B]/[0.08] bg-[#FAF9F6] px-3.5 py-2 text-xs font-medium text-[#686861]">
                    <Clock3 className="size-3.5 text-[#4F46E5]" />
                    ~20 minutes
                  </span>

                  <span className="flex items-center gap-2 rounded-full border border-[#18181B]/[0.08] bg-[#FAF9F6] px-3.5 py-2 text-xs font-medium text-[#686861]">
                    <Terminal className="size-3.5 text-[#4F46E5]" />
                    Interactive terminal
                  </span>
                </div>
              </div>

              {/* START CARD */}

              <div className="rounded-2xl border border-[#18181B]/[0.09] bg-[#FAF9F6] p-6 shadow-[0_18px_50px_rgba(20,20,20,0.05)]">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-[#4F46E5]/[0.08] text-[#4F46E5]">
                    <Play className="size-5 fill-current" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Ready to investigate?
                    </p>

                    <p className="mt-1 text-xs text-[#888881]">
                      Your lab environment is ready.
                    </p>
                  </div>
                </div>

                <a
                  href={`/labs/${lab.slug}/workspace`}
                  className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#4F46E5] text-sm font-medium text-white shadow-[0_10px_25px_rgba(79,70,229,0.16)] transition hover:bg-[#4338CA]"
                >
                  Start lab
                  <ArrowRight className="size-4" />
                </a>

                <p className="mt-3 text-center text-[11px] leading-5 text-[#999]">
                  You can restart the environment whenever you need.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LAB INFORMATION */}

        <section className="border-y border-[#18181B]/[0.07] bg-[#EAE9E4]">
          <div className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
            <div className="grid gap-4 md:grid-cols-3">
              {/* ENVIRONMENT */}

              <div className="rounded-2xl border border-[#18181B]/[0.08] bg-[#F8F7F3] p-6">
                <div className="flex size-10 items-center justify-center rounded-lg bg-[#4F46E5]/[0.07] text-[#4F46E5]">
                  <Server className="size-5" />
                </div>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#999]">
                  Environment
                </p>

                <h2 className="mt-2 text-lg font-semibold">
                  {lab.environment.operatingSystem}
                </h2>

                <p className="mt-2 text-sm text-[#777770]">
                  {lab.environment.session} lab session
                </p>
              </div>

              {/* INTERACTION */}

              <div className="rounded-2xl border border-[#18181B]/[0.08] bg-[#F8F7F3] p-6">
                <div className="flex size-10 items-center justify-center rounded-lg bg-[#4F46E5]/[0.07] text-[#4F46E5]">
                  <Terminal className="size-5" />
                </div>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#999]">
                  Interaction
                </p>

                <h2 className="mt-2 text-lg font-semibold">
                  Real terminal
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#777770]">
                  Investigate the system directly instead of following
                  a simulated command sequence.
                </p>
              </div>

              {/* SUCCESS */}

              <div className="rounded-2xl border border-[#18181B]/[0.08] bg-[#F8F7F3] p-6">
                <div className="flex size-10 items-center justify-center rounded-lg bg-[#67C587]/[0.09] text-[#39865A]">
                  <CheckCircle2 className="size-5" />
                </div>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#999]">
                  Success
                </p>

                <h2 className="mt-2 text-lg font-semibold">
                  Fix and verify
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#777770]">
                  Complete the investigation and restore the service
                  to its expected state.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OBJECTIVES */}

        <section>
          <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
                  Mission
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  What you'll investigate.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#686861]">
                  You are not given the solution. The environment gives
                  you the evidence, and you work out what is wrong.
                </p>
              </div>

              <div className="space-y-3">
                {lab.steps.map((step) => (
                  <div
                    key={step.id}
                    className="group flex gap-5 rounded-2xl border border-[#18181B]/[0.08] bg-[#FAF9F6] p-5 transition hover:border-[#4F46E5]/20 hover:bg-white"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#18181B] text-xs font-semibold text-white">
                      {String(step.id).padStart(2, "0")}
                    </div>

                    <div>
                      <h3 className="font-semibold tracking-[-0.01em]">
                        {step.title}
                      </h3>

                      <p className="mt-1.5 text-sm leading-6 text-[#777770]">
                        {step.description}
                      </p>
                    </div>

                    <ArrowRight className="ml-auto mt-1 size-4 shrink-0 text-[#C0C0BA] transition group-hover:translate-x-1 group-hover:text-[#4F46E5]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GUIDED ACTIONS */}

        <section className="border-y border-[#18181B]/[0.07] bg-[#F8F7F3]">
          <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
                Optional guidance
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Need a starting point?
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#686861]">
                The lab includes a few investigation commands you can
                use if you need help getting started. They don't solve
                the problem for you.
              </p>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {lab.guidedActions.map((action, index) => (
                <div
                  key={action.id}
                  className="rounded-2xl border border-[#18181B]/[0.08] bg-white p-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#4F46E5]/[0.07] text-[#4F46E5]">
                      {index === 0 ? (
                        <FileSearch className="size-4" />
                      ) : index === 1 ? (
                        <ShieldCheck className="size-4" />
                      ) : (
                        <FileSearch className="size-4" />
                      )}
                    </div>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#AAA]">
                      Optional
                    </span>
                  </div>

                  <h3 className="mt-5 text-sm font-semibold">
                    {action.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#777770]">
                    {action.description}
                  </p>

                  <div className="mt-4 overflow-hidden rounded-lg bg-[#18181B] px-3 py-2.5">
                    <code className="block overflow-x-auto whitespace-nowrap font-mono text-[10px] text-[#A6A6A1]">
                      $ {action.command}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUCCESS CONDITION */}

        <section>
          <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
            <div className="mx-auto max-w-3xl rounded-2xl border border-[#67C587]/20 bg-[#67C587]/[0.05] p-7 sm:p-9">
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#67C587]/10 text-[#39865A]">
                  <Lightbulb className="size-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#39865A]">
                    Success condition
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#686861]">
                    {lab.successCondition}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}

        <section className="border-t border-[#18181B]/[0.07] bg-[#18181B]">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#67E8F9]">
              Lab {lab.number}
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Ready to investigate?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#A6A6A1]">
              Open the environment, investigate the evidence and
              restore the system.
            </p>

            <a
              href={`/labs/${lab.slug}/workspace`}
              className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#67E8F9] px-6 text-sm font-semibold text-[#031015] transition hover:bg-[#8CF0FF]"
            >
              Start lab
              <ArrowRight className="size-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}