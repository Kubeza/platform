import {
  ArrowRight,
  Box,
  Cloud,
  Container,
  Database,
  Globe,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react";

import Navbar from "../../components/navigation/Navbar";

const runnableLabs = [
  {
    title: "Broken Nginx Configuration",
    category: "Linux",
    description:
      "Diagnose a broken Nginx configuration, make the smallest safe fix, and restore the service.",
    icon: Server,
    href: "/labs/nginx",
  },
];

const environments = [
  {
    name: "Linux",
    description:
      "Processes, services, permissions, filesystems, logs and system troubleshooting.",
    icon: Terminal,
  },
  {
    name: "Networking",
    description:
      "DNS, ports, routing, connectivity and service-to-service communication.",
    icon: Network,
  },
  {
    name: "Docker",
    description:
      "Containers, images, volumes, networking and container runtime behaviour.",
    icon: Container,
  },
  {
    name: "Kubernetes",
    description:
      "Clusters, workloads, services, deployments and Kubernetes troubleshooting.",
    icon: Box,
  },
  {
    name: "Terraform",
    description:
      "Infrastructure as code, state, resources and infrastructure workflows.",
    icon: Workflow,
  },
  {
    name: "AWS",
    description:
      "Cloud infrastructure, compute, networking, storage and DevOps workflows.",
    icon: Cloud,
  },
  {
    name: "Azure",
    description:
      "Microsoft cloud infrastructure and cloud-native engineering workflows.",
    icon: Cloud,
  },
  {
    name: "GCP",
    description:
      "Google Cloud infrastructure and modern cloud engineering workflows.",
    icon: Cloud,
  },
  {
    name: "Security",
    description:
      "DevSecOps, security controls, system hardening and infrastructure security.",
    icon: ShieldCheck,
  },
  {
    name: "Databases",
    description:
      "Database infrastructure, connectivity, configuration and operational problems.",
    icon: Database,
  },
  {
    name: "Web Infrastructure",
    description:
      "Reverse proxies, application services, traffic and production infrastructure.",
    icon: Globe,
  },
];

export default function LabsHome(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#F3F2EE] text-[#18181B]">
      <Navbar />

      <main>
        <section className="border-b border-[#18181B]/[0.07]">
          <div className="mx-auto max-w-screen-2xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
                Kubeza Labs
              </p>

              <h1 className="mt-5 text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Explore systems.
                <span className="block text-[#4F46E5]">
                  Break things. Learn why.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#686861] sm:text-lg">
                Kubeza brings modern infrastructure environments together.
                Some environments are ready to run today. Others are part of
                the platform we are building.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
                Ready to run
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Hands-on labs
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#686861]">
                Real interactive environments currently available for
                practice.
              </p>
            </div>

            <div className="rounded-full border border-[#67C587]/20 bg-[#67C587]/[0.08] px-3 py-1.5 text-xs font-medium text-[#39865A]">
              {runnableLabs.length} lab available
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {runnableLabs.map((lab) => {
              const Icon = lab.icon;

              return (
                <article
                  key={lab.title}
                  className="group flex min-h-[285px] flex-col rounded-2xl border border-[#18181B]/[0.09] bg-[#FAF9F6] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#4F46E5]/[0.25] hover:bg-white"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-[#4F46E5]/[0.08] text-[#4F46E5]">
                      <Icon className="size-5" />
                    </div>

                    <span className="flex items-center gap-1.5 rounded-full bg-[#67C587]/[0.10] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#39865A]">
                      <span className="size-1.5 rounded-full bg-[#55B879]" />
                      Runnable
                    </span>
                  </div>

                  <p className="mt-7 text-xs font-medium uppercase tracking-[0.14em] text-[#999]">
                    {lab.category}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em]">
                    {lab.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#686861]">
                    {lab.description}
                  </p>

                  <div className="mt-auto pt-7">
                    <a
                      href={lab.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#4F46E5] transition hover:text-[#4338CA]"
                    >
                      Enter lab
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-[#18181B]/[0.07] bg-[#EAE9E4]">
          <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
                The Kubeza environment
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                More than today's labs.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#686861] sm:text-base">
                These environments form the broader Kubeza engineering
                platform. They are shown as part of the roadmap and are not
                presented as runnable until their environments are ready.
              </p>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {environments.map((environment) => {
                const Icon = environment.icon;

                return (
                  <article
                    key={environment.name}
                    className="group relative overflow-hidden rounded-xl border border-[#18181B]/[0.08] bg-[#F8F7F3] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#4F46E5]/[0.07] text-[#4F46E5]">
                        <Icon className="size-5" />
                      </div>

                      <span className="rounded-full border border-[#18181B]/[0.08] bg-[#18181B]/[0.03] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#999]">
                        In development
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-semibold">
                      {environment.name}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#777770]">
                      {environment.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-[10px] font-medium text-[#A0A09A]">
                      <span className="size-1.5 rounded-full bg-[#B5B5AE]" />
                      Environment not runnable yet
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
            The platform grows from here
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            One environment at a time.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#686861] sm:text-base">
            Kubeza will gradually turn these environments into deeper,
            realistic engineering experiences.
          </p>
        </section>
      </main>
    </div>
  );
}