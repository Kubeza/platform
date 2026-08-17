import {
  ArrowRight,
  Box,
  Cloud,
  Container,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";

import Navbar from "../../components/navigation/Navbar";

const environments = [
  {
    name: "Linux",
    description:
      "The foundation for system administration, services, processes, permissions and troubleshooting.",
    icon: Terminal,
    status: "Available",
  },
  {
    name: "Networking",
    description:
      "Connectivity, DNS, ports, routing and service-to-service communication.",
    icon: Network,
    status: "Available",
  },
  {
    name: "Docker",
    description:
      "Containers, images, volumes, networking and runtime behaviour.",
    icon: Container,
    status: "In development",
  },
  {
    name: "Kubernetes",
    description:
      "Workloads, services, deployments, clusters and production troubleshooting.",
    icon: Box,
    status: "Coming soon",
  },
  {
    name: "Terraform",
    description:
      "Infrastructure as code, state, resources and infrastructure workflows.",
    icon: Workflow,
    status: "In development",
  },
  {
    name: "Cloud",
    description:
      "Cloud infrastructure across compute, networking, storage and DevOps workflows.",
    icon: Cloud,
    status: "Coming soon",
  },
  {
    name: "Security",
    description:
      "Infrastructure hardening, DevSecOps practices and security-aware engineering.",
    icon: ShieldCheck,
    status: "In development",
  },
];

export default function Platform(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-white/[0.07]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.18),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(103,232,249,0.07),transparent_30%)]" />

          <div className="relative mx-auto max-w-screen-2xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
            <div className="max-w-5xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#67E8F9]/15 bg-[#67E8F9]/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#67E8F9]">
                <Sparkles className="size-3" />
                The Kubeza platform
              </div>

              <h1 className="text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                One place to
                <span className="block text-[#4F46E5]">
                  operate infrastructure.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                Kubeza brings environments, realistic engineering
                scenarios, practice, and AI assistance into one
                evolving platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                <a
                  href="/labs"
                  className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#4F46E5] px-4 text-sm font-semibold text-white transition hover:bg-[#4338CA]"
                >
                  Explore environments
                  <ArrowRight className="size-4" />
                </a>

                <a
                  href="/ai-mentor"
                  className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-4 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
                >
                  Meet the AI Mentor
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              [
                "01",
                "Environments",
                "The technologies and infrastructure domains you need to understand.",
              ],
              [
                "02",
                "Engineering scenarios",
                "Problems designed around realistic operational failures.",
              ],
              [
                "03",
                "AI assistance",
                "Guidance that helps you reason through problems while keeping you in control.",
              ],
            ].map(([number, title, description]) => (
              <article
                key={number}
                className="rounded-2xl border border-white/[0.07] bg-[#070B16] p-7"
              >
                <span className="font-mono text-[10px] text-[#67E8F9]">
                  {number}
                </span>

                <h2 className="mt-6 text-lg font-semibold">
                  {title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/[0.07] bg-[#070B16]">
          <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#67E8F9]">
                Environment layer
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                The platform grows environment by environment.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                An environment does not automatically mean a runnable lab.
                Kubeza separates technologies that are planned, being built,
                and actually ready for interaction.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {environments.map((environment) => {
                const Icon = environment.icon;

                return (
                  <article
                    key={environment.name}
                    className="rounded-xl border border-white/[0.07] bg-[#050816] p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-[#4F46E5]/10 text-[#67E8F9]">
                        <Icon className="size-5" />
                      </div>

                      <span className="rounded-full border border-white/[0.07] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-slate-600">
                        {environment.status}
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-semibold">
                      {environment.name}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      {environment.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#67E8F9]">
            The bigger direction
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            From interactive labs to an AI engineering workspace.
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
            The current platform is the foundation. More environments,
            deeper automation, and increasingly capable AI engineering
            assistance will be built on top of it.
          </p>
        </section>
      </main>
    </div>
  );
}