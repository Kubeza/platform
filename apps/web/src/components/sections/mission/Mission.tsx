import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Compass,
  ShieldCheck,
} from "lucide-react";

import Container from "../../layout/Container";
import Section from "../../layout/Section";

const principles = [
  {
    icon: Code2,
    title: "Practice over theory",
    description:
      "Engineering skill grows through investigation, execution and verification—not passive content consumption.",
  },
  {
    icon: BrainCircuit,
    title: "AI as an engineering partner",
    description:
      "AI should strengthen technical reasoning and help engineers move through difficult incidents with context.",
  },
  {
    icon: ShieldCheck,
    title: "Production mindset",
    description:
      "The environment should reward diagnosis, safe changes and validated outcomes.",
  },
];

export default function Mission(): React.JSX.Element {
  return (
    <Section
      id="mission"
      className="relative overflow-hidden border-t border-white/[0.04] bg-[#050816]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F46E5]/[0.045] blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#67E8F9]">
                Mission / Vision
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                Building engineers who can
                <span className="block bg-gradient-to-r from-[#4F46E5] via-[#1D9BF0] to-[#67E8F9] bg-clip-text text-transparent">
                  operate what they build.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                Kubeza exists to close the gap between knowing DevOps concepts
                and being able to operate real systems under pressure.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
                <Compass
                  className="size-4 text-[#67E8F9]"
                  aria-hidden="true"
                />

                <span>
                  From learning commands to developing engineering judgment.
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#4F46E5]/10 via-transparent to-[#67E8F9]/[0.05] blur-xl" />

              <div className="relative rounded-3xl border border-white/[0.08] bg-[#080D1D]/90 p-6 shadow-2xl shadow-black/20 sm:p-8">
                <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-600">
                      Kubeza principle
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-300">
                      Engineering intelligence
                    </p>
                  </div>

                  <BrainCircuit
                    className="size-5 text-[#67E8F9]"
                    aria-hidden="true"
                  />
                </div>

                <blockquote className="py-8 text-2xl font-medium leading-10 tracking-[-0.025em] text-white sm:text-3xl">
                  “The best way to learn infrastructure is to{" "}
                  <span className="text-[#67E8F9]">
                    operate it.
                  </span>
                  ”
                </blockquote>

                <div className="grid gap-3 border-t border-white/[0.07] pt-5 sm:grid-cols-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-600">
                      Investigate
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Understand the failure
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-600">
                      Execute
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Make the change
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-600">
                      Verify
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Prove the recovery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:border-[#4F46E5]/25 hover:bg-white/[0.03]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-xl border border-[#4F46E5]/20 bg-[#4F46E5]/10">
                      <Icon
                        className="size-5 text-[#67E8F9]"
                        aria-hidden="true"
                      />
                    </div>

                    <ArrowUpRight
                      className="size-4 text-slate-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#67E8F9]"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}