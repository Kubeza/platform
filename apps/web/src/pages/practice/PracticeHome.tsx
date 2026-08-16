import {
  ArrowRight,
  Box,
  Container,
  Network,
  Terminal,
} from "lucide-react";

import Navbar from "../../components/navigation/Navbar";

const environments = [
  {
    name: "Linux",
    description:
      "Practice processes, services, permissions, filesystems, logs and troubleshooting.",
    icon: Terminal,
    href: "/practice/linux",
  },
  {
    name: "Networking",
    description:
      "Practice DNS, ports, routing, connectivity and service communication.",
    icon: Network,
    href: "/practice/networking",
  },
  {
    name: "Docker",
    description:
      "Practice containers, images, volumes, networking and runtime behaviour.",
    icon: Container,
    href: "/practice/docker",
  },
  {
    name: "Kubernetes",
    description:
      "Practice workloads, services, deployments and cluster troubleshooting.",
    icon: Box,
    href: "/practice/kubernetes",
  },
];

export default function PracticeHome(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#F3F2EE] text-[#18181B]">
      <Navbar />

      <main>
        <section className="border-b border-[#18181B]/[0.07]">
          <div className="mx-auto max-w-screen-2xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
              Kubeza Practice
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Build the muscle
              <span className="block text-[#4F46E5]">
                before production.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#686861] sm:text-lg">
              Practice core engineering environments through focused,
              repeatable exercises before moving into deeper failure-driven
              labs.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
              Environments
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Choose an environment
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#686861]">
              Each environment focuses on a different layer of modern
              infrastructure engineering.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {environments.map((environment) => {
              const Icon = environment.icon;

              return (
                <a
                  key={environment.name}
                  href={environment.href}
                  className="group rounded-2xl border border-[#18181B]/[0.09] bg-[#FAF9F6] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#4F46E5]/[0.25] hover:bg-white"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-[#4F46E5]/[0.08] text-[#4F46E5]">
                      <Icon className="size-6" />
                    </div>

                    <ArrowRight className="size-5 text-[#A0A09A] transition-transform group-hover:translate-x-1 group-hover:text-[#4F46E5]" />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold tracking-[-0.03em]">
                    {environment.name}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-[#686861]">
                    {environment.description}
                  </p>

                  <div className="mt-7 text-xs font-semibold uppercase tracking-[0.12em] text-[#4F46E5]">
                    Open environment
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}