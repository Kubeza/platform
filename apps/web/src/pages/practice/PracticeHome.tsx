"use client";

import {
  ArrowRight,
  Container,
  Globe,
  Server,
  TerminalSquare,
} from "lucide-react";

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
    icon: Server,
    available: true,
  },
];

export default function PracticeHome(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <header className="flex h-14 items-center border-b border-white/[0.08] bg-[#070B16] px-5">
        <a
          href="/"
          className="text-sm font-semibold tracking-tight text-white"
        >
          Kubeza
        </a>

        <span className="mx-3 text-slate-700">
          /
        </span>

        <span className="text-sm text-slate-400">
          Practice
        </span>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#67E8F9]">
            Practice
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Practice what you want.
          </h1>

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
            Choose an environment and start working directly in the terminal.
            No difficulty selection. No predefined exercise. Just practice.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
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
                      <Icon
                        className="size-5"
                        aria-hidden="true"
                      />
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
                className="group rounded-2xl border border-white/[0.08] bg-[#070B16] p-6 transition hover:border-[#4F46E5]/40 hover:bg-[#0A0F1C]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl border border-[#67E8F9]/10 bg-[#67E8F9]/[0.06] text-[#67E8F9]">
                    <Icon
                      className="size-5"
                      aria-hidden="true"
                    />
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
      </main>
    </div>
  );
}