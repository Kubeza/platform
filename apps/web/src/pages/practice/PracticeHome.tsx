import {
  ArrowRight,
  Box,
  Container,
  Globe,
  TerminalSquare,
} from "lucide-react";

import Navbar from "../../components/navigation/Navbar";

interface PracticeOption {
  slug: string;
  name: string;
  description: string;
  icon: React.ElementType;
  available: boolean;
}

const practiceOptions: PracticeOption[] = [
  {
    slug: "linux",
    name: "Linux",
    description:
      "Practice Linux commands, files, permissions, processes, services, and system administration.",
    icon: TerminalSquare,
    available: true,
  },
  {
    slug: "networking",
    name: "Networking",
    description:
      "Explore interfaces, routes, ports, DNS, connectivity, and network services.",
    icon: Globe,
    available: true,
  },
  {
    slug: "docker",
    name: "Docker",
    description:
      "Practice containers, images, networks, volumes, and Docker commands.",
    icon: Container,
    available: true,
  },
  {
    slug: "kubernetes",
    name: "Kubernetes",
    description:
      "Practice pods, deployments, services, workloads, and cluster operations.",
    icon: Box,
    available: true,
  },
];

export default function PracticeHome(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <main>
        <section className="border-b border-white/[0.07] bg-[#070B16]">
          <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#67E8F9]">
                Practice environments
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                Work directly with the tools.
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Choose an environment and work directly in the
                terminal. Explore commands, inspect systems,
                experiment with configurations, and build your
                engineering instincts.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16 xl:px-16">
          <div className="mb-8 flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
              Available now
            </p>

            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">
              Choose an environment
            </h2>

            <p className="max-w-xl text-sm leading-6 text-slate-500">
              These environments are currently available for
              interactive practice.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {practiceOptions.map((option) => {
              const Icon = option.icon;

              if (!option.available) {
                return (
                  <div
                    key={option.slug}
                    className="relative rounded-2xl border border-white/[0.07] bg-[#070B16] p-6 opacity-60"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex size-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-slate-500">
                        <Icon className="size-5" />
                      </div>

                      <span className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-600">
                        Coming soon
                      </span>
                    </div>

                    <h2 className="mt-6 text-lg font-semibold text-slate-300">
                      {option.name}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {option.description}
                    </p>
                  </div>
                );
              }

              return (
                <a
                  key={option.slug}
                  href={`/practice/${option.slug}`}
                  className="group rounded-2xl border border-white/[0.08] bg-[#070B16] p-6 transition duration-200 hover:-translate-y-0.5 hover:border-[#4F46E5]/40 hover:bg-[#0A0F1C] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-[#67E8F9]/10 bg-[#67E8F9]/[0.06] text-[#67E8F9]">
                      <Icon className="size-5" />
                    </div>

                    <ArrowRight
                      className="size-5 text-slate-700 transition group-hover:translate-x-1 group-hover:text-[#67E8F9]"
                      aria-hidden="true"
                    />
                  </div>

                  <h2 className="mt-6 text-lg font-semibold text-white">
                    {option.name}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {option.description}
                  </p>

                  <div className="mt-6 text-xs font-medium text-slate-600 transition group-hover:text-[#67E8F9]">
                    Open environment
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section className="border-t border-white/[0.07]">
          <div className="mx-auto max-w-screen-2xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16 xl:px-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#67E8F9]">
                Practice vs labs
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                Explore first. Solve real failures next.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Practice environments give you room to experiment.
                Kubeza Labs then puts you into specific engineering
                scenarios where something is broken and you have to
                investigate and restore it.
              </p>

              <a
                href="/labs"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#67E8F9] transition hover:text-[#8CF0FF]"
              >
                Explore runnable labs
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}