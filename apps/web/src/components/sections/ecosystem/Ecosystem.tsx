import {
  Cloud,
  Container,
  Database,
  GitBranch,
  Globe,
  LockKeyhole,
  Server,
  Workflow,
} from "lucide-react";

import ContainerLayout from "../../layout/Container";
import Section from "../../layout/Section";

const ecosystem = [
  {
    icon: Server,
    name: "Linux",
    description: "Systems, processes and infrastructure fundamentals.",
  },
  {
    icon: GitBranch,
    name: "Git",
    description: "Version control and engineering workflows.",
  },
  {
    icon: Container,
    name: "Docker",
    description: "Containers, images and runtime failures.",
  },
  {
    icon: Workflow,
    name: "Kubernetes",
    description: "Cloud-native orchestration and workloads.",
  },
  {
    icon: Cloud,
    name: "AWS",
    description: "Cloud infrastructure and production services.",
  },
  {
    icon: Globe,
    name: "Azure",
    description: "Enterprise cloud engineering environments.",
  },
  {
    icon: Database,
    name: "GCP",
    description: "Cloud-native infrastructure and services.",
  },
  {
    icon: LockKeyhole,
    name: "DevSecOps",
    description: "Security integrated into the engineering lifecycle.",
  },
];

export default function Ecosystem(): React.JSX.Element {
  return (
    <Section
      id="ecosystem"
      className="relative overflow-hidden border-t border-white/[0.04] bg-[#060A17]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[-15rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#1D9BF0]/[0.045] blur-3xl" />
      </div>

      <ContainerLayout className="relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#67E8F9]">
              DevOps / Cloud Ecosystem
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              One engineering mindset.
              <span className="block bg-gradient-to-r from-[#4F46E5] via-[#1D9BF0] to-[#67E8F9] bg-clip-text text-transparent">
                Across the stack.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
              Kubeza brings the tools and concepts that modern DevOps
              engineers work with into one practical engineering environment.
            </p>
          </div>

          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 hidden h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#4F46E5]/30 to-transparent lg:block"
            />

            <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {ecosystem.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="group relative rounded-2xl border border-white/[0.07] bg-[#080D1D]/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#4F46E5]/30 hover:bg-[#0A1020]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-10 items-center justify-center rounded-xl border border-[#4F46E5]/20 bg-[#4F46E5]/10">
                        <Icon
                          className="size-5 text-[#67E8F9]"
                          aria-hidden="true"
                        />
                      </div>

                      <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-600">
                        Ecosystem
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-semibold text-white">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>

                    <div className="mt-5 h-px w-8 bg-gradient-to-r from-[#4F46E5] to-[#67E8F9] transition-all duration-300 group-hover:w-14" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-[#4F46E5]/15 bg-gradient-to-r from-[#4F46E5]/[0.06] via-[#1D9BF0]/[0.04] to-[#67E8F9]/[0.03] p-6 sm:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#67E8F9]">
                  Built for real engineering
                </p>

                <p className="mt-3 text-lg font-medium tracking-tight text-white">
                  Learn the systems that production engineers actually
                  operate.
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  The platform can grow from Linux incidents into containers,
                  orchestration, cloud infrastructure and security workflows
                  without changing the core engineering loop.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                {["Linux", "Cloud", "Containers", "Security"].map(
                  (label) => (
                    <span
                      key={label}
                      className="hidden rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400 sm:inline-flex"
                    >
                      {label}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </Section>
  );
}