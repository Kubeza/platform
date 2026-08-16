import {
  ArrowRight,
  Box,
  CheckCircle2,
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

type EnvironmentStatus =
  | "available"
  | "in-development"
  | "coming-soon";

type Environment = {
  name: string;
  description: string;
  icon: React.ElementType;
  status: EnvironmentStatus;
};

const runnableLabs = [
  {
    title: "Nginx Failure",
    category: "Linux",
    description:
      "Investigate a broken web server, identify the configuration failure and restore the service.",
    icon: Server,
    href: "/labs/nginx",
    difficulty: "Intermediate",
  },
];

const environments: Environment[] = [
  {
    name: "Linux",
    description:
      "Processes, services, permissions, filesystems, logs and system troubleshooting.",
    icon: Terminal,
    status: "available",
  },
  {
    name: "Networking",
    description:
      "DNS, ports, routing, connectivity and service-to-service communication.",
    icon: Network,
    status: "available",
  },
  {
    name: "Docker",
    description:
      "Containers, images, volumes, networking and container runtime behaviour.",
    icon: Container,
    status: "in-development",
  },
  {
    name: "Kubernetes",
    description:
      "Clusters, workloads, services, deployments and Kubernetes troubleshooting.",
    icon: Box,
    status: "coming-soon",
  },
  {
    name: "Terraform",
    description:
      "Infrastructure as code, state, resources and infrastructure workflows.",
    icon: Workflow,
    status: "in-development",
  },
  {
    name: "AWS",
    description:
      "Cloud infrastructure, compute, networking, storage and DevOps workflows.",
    icon: Cloud,
    status: "coming-soon",
  },
  {
    name: "Azure",
    description:
      "Microsoft cloud infrastructure and cloud-native engineering workflows.",
    icon: Cloud,
    status: "coming-soon",
  },
  {
    name: "GCP",
    description:
      "Google Cloud infrastructure and modern cloud engineering workflows.",
    icon: Cloud,
    status: "coming-soon",
  },
  {
    name: "Security",
    description:
      "DevSecOps, security controls, system hardening and infrastructure security.",
    icon: ShieldCheck,
    status: "in-development",
  },
  {
    name: "Databases",
    description:
      "Database infrastructure, connectivity, configuration and operational problems.",
    icon: Database,
    status: "coming-soon",
  },
  {
    name: "Web Infrastructure",
    description:
      "Reverse proxies, application services, traffic and production infrastructure.",
    icon: Globe,
    status: "available",
  },
];

function getStatusLabel(status: EnvironmentStatus): string {
  switch (status) {
    case "available":
      return "Available";

    case "in-development":
      return "In development";

    case "coming-soon":
      return "Coming soon";
  }
}

function getStatusClasses(status: EnvironmentStatus): string {
  switch (status) {
    case "available":
      return "border-[#67C587]/20 bg-[#67C587]/[0.08] text-[#39865A]";

    case "in-development":
      return "border-[#4F46E5]/15 bg-[#4F46E5]/[0.06] text-[#5B54C9]";

    case "coming-soon":
      return "border-[#18181B]/[0.08] bg-[#18181B]/[0.03] text-[#999]";
  }
}

function getStatusDotClasses(
  status: EnvironmentStatus,
): string {
  switch (status) {
    case "available":
      return "bg-[#55B879]";

    case "in-development":
      return "bg-[#4F46E5]";

    case "coming-soon":
      return "bg-[#B5B5AE]";
  }
}

export default function LabsHome(): React.JSX.Element {
  const availableEnvironments = environments.filter(
    (environment) => environment.status === "available",
  );

  const developmentEnvironments = environments.filter(
    (environment) =>
      environment.status === "in-development",
  );

  const upcomingEnvironments = environments.filter(
    (environment) =>
      environment.status === "coming-soon",
  );

  return (
    <div className="min-h-screen bg-[#F3F2EE] text-[#18181B]">
      <Navbar />

      <main>
        {/* HERO */}

        <section className="border-b border-[#18181B]/[0.07]">
          <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
                <span className="size-1.5 rounded-full bg-[#4F46E5]" />
                Kubeza Labs
              </div>

              <h1 className="mt-5 text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Explore systems.
                <span className="block text-[#4F46E5]">
                  Break things. Learn why.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#686861] sm:text-lg">
                Explore the engineering environments that make up
                Kubeza. Run real labs where available, and discover
                what is being built next.
              </p>
            </div>

            {/* QUICK STATS */}

            <div className="mt-10 flex flex-wrap gap-2">
              <div className="rounded-full border border-[#67C587]/20 bg-[#67C587]/[0.07] px-3.5 py-2 text-xs font-medium text-[#39865A]">
                {runnableLabs.length} runnable{" "}
                {runnableLabs.length === 1
                  ? "lab"
                  : "labs"}
              </div>

              <div className="rounded-full border border-[#18181B]/[0.08] bg-[#FAF9F6] px-3.5 py-2 text-xs font-medium text-[#686861]">
                {availableEnvironments.length} available
                environments
              </div>

              <div className="rounded-full border border-[#4F46E5]/15 bg-[#4F46E5]/[0.05] px-3.5 py-2 text-xs font-medium text-[#5B54C9]">
                {developmentEnvironments.length} in
                development
              </div>

              <div className="rounded-full border border-[#18181B]/[0.08] bg-[#FAF9F6] px-3.5 py-2 text-xs font-medium text-[#999]">
                {upcomingEnvironments.length} coming soon
              </div>
            </div>
          </div>
        </section>

        {/* RUNNABLE LABS */}

        <section className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#39865A]">
                <CheckCircle2 className="size-3.5" />
                Ready to run
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Hands-on labs
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#686861]">
                These are the environments you can actually enter
                and practice in today.
              </p>
            </div>

            <div className="rounded-full border border-[#67C587]/20 bg-[#67C587]/[0.08] px-3 py-1.5 text-xs font-medium text-[#39865A]">
              {runnableLabs.length}{" "}
              {runnableLabs.length === 1
                ? "lab"
                : "labs"}{" "}
              available
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {runnableLabs.map((lab) => {
              const Icon = lab.icon;

              return (
                <article
                  key={lab.title}
                  className="group flex min-h-[285px] flex-col rounded-2xl border border-[#18181B]/[0.09] bg-[#FAF9F6] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#4F46E5]/[0.25] hover:bg-white hover:shadow-[0_18px_45px_rgba(20,20,20,0.06)]"
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

                  <div className="mt-7 flex items-center gap-2">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#999]">
                      {lab.category}
                    </p>

                    <span className="text-[#C2C2BC]">
                      •
                    </span>

                    <p className="text-xs font-medium text-[#999]">
                      {lab.difficulty}
                    </p>
                  </div>

                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em]">
                    {lab.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#686861]">
                    {lab.description}
                  </p>

                  <div className="mt-auto pt-7">
                    <a
                      href={lab.href}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#4F46E5] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#4338CA]"
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

        {/* ENVIRONMENT CATALOG */}

        <section className="border-y border-[#18181B]/[0.07] bg-[#EAE9E4]">
          <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
                The Kubeza environment
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                The whole engineering stack.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#686861] sm:text-base">
                Kubeza is not limited to the labs that are runnable
                today. These environments represent the broader
                engineering surface that the platform will cover.
              </p>
            </div>

            {/* STATUS LEGEND */}

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="flex items-center gap-2 rounded-full border border-[#67C587]/20 bg-[#F8F7F3] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#39865A]">
                <span className="size-1.5 rounded-full bg-[#55B879]" />
                Available
              </span>

              <span className="flex items-center gap-2 rounded-full border border-[#4F46E5]/15 bg-[#F8F7F3] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#5B54C9]">
                <span className="size-1.5 rounded-full bg-[#4F46E5]" />
                In development
              </span>

              <span className="flex items-center gap-2 rounded-full border border-[#18181B]/[0.08] bg-[#F8F7F3] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#999]">
                <span className="size-1.5 rounded-full bg-[#B5B5AE]" />
                Coming soon
              </span>
            </div>

            {/* CATALOG */}

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {environments.map((environment) => {
                const Icon = environment.icon;

                return (
                  <article
                    key={environment.name}
                    className="group relative overflow-hidden rounded-xl border border-[#18181B]/[0.08] bg-[#F8F7F3] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_35px_rgba(20,20,20,0.04)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#4F46E5]/[0.07] text-[#4F46E5]">
                        <Icon className="size-5" />
                      </div>

                      <span
                        className={`rounded-full border px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] ${getStatusClasses(
                          environment.status,
                        )}`}
                      >
                        {getStatusLabel(
                          environment.status,
                        )}
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-semibold">
                      {environment.name}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#777770]">
                      {environment.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-[10px] font-medium text-[#A0A09A]">
                      <span
                        className={`size-1.5 rounded-full ${getStatusDotClasses(
                          environment.status,
                        )}`}
                      />

                      {environment.status ===
                      "available"
                        ? "Environment available"
                        : environment.status ===
                            "in-development"
                          ? "Environment being built"
                          : "Environment planned"}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* EXPLANATION */}

        <section className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
                How Kubeza grows
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Environment first.
                <br />
                Labs next.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[#18181B]/[0.08] bg-[#FAF9F6] p-5">
                <span className="text-xs font-semibold text-[#4F46E5]">
                  01
                </span>

                <h3 className="mt-3 font-semibold">
                  Environment
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#777770]">
                  The technology becomes part of the Kubeza
                  environment catalog.
                </p>
              </div>

              <div className="rounded-xl border border-[#18181B]/[0.08] bg-[#FAF9F6] p-5">
                <span className="text-xs font-semibold text-[#4F46E5]">
                  02
                </span>

                <h3 className="mt-3 font-semibold">
                  Scenario
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#777770]">
                  Real engineering problems are designed around
                  that environment.
                </p>
              </div>

              <div className="rounded-xl border border-[#18181B]/[0.08] bg-[#FAF9F6] p-5">
                <span className="text-xs font-semibold text-[#4F46E5]">
                  03
                </span>

                <h3 className="mt-3 font-semibold">
                  Runnable lab
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#777770]">
                  Once the environment is ready, learners can
                  actually operate it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}

        <section className="border-t border-[#18181B]/[0.07] bg-[#18181B]">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#67E8F9]">
              The platform grows from here
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              One environment at a time.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#A6A6A1] sm:text-base">
              Kubeza will gradually turn these environments into
              deeper, realistic engineering experiences.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}