import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Container,
  GitBranch,
  Network,
  Server,
  Terminal,
  Wrench,
} from "lucide-react";

import Navbar from "../../components/navigation/Navbar";

const practiceAreas = [
  {
    icon: Terminal,
    title: "Linux",
    description:
      "Work with processes, services, permissions, filesystems, logs and system failures.",
  },
  {
    icon: Network,
    title: "Networking",
    description:
      "Diagnose connectivity, DNS, ports, routing and service communication problems.",
  },
  {
    icon: Container,
    title: "Docker",
    description:
      "Build, inspect and troubleshoot containerized workloads and their runtime behavior.",
  },
  {
    icon: Server,
    title: "Kubernetes",
    description:
      "Operate workloads, inspect cluster resources and investigate application failures.",
  },
  {
    icon: GitBranch,
    title: "Terraform",
    description:
      "Practice infrastructure changes, state management and infrastructure troubleshooting.",
  },
  {
    icon: Cloud,
    title: "Cloud",
    description:
      "Develop practical skills across modern cloud infrastructure and DevOps workflows.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Choose a problem",
    description:
      "Pick an engineering scenario instead of watching another tutorial.",
  },
  {
    number: "02",
    title: "Enter the environment",
    description:
      "Get a working environment containing the systems and failures you need to investigate.",
  },
  {
    number: "03",
    title: "Investigate",
    description:
      "Use commands, logs, metrics and system tools to understand what is actually happening.",
  },
  {
    number: "04",
    title: "Fix and verify",
    description:
      "Make the change, validate the result and prove that the system is healthy again.",
  },
];

export default function Platform(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#F3F2EE] text-[#18181B]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-[#18181B]/[0.07]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(#18181B08 1px, transparent 1px), linear-gradient(90deg, #18181B08 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative mx-auto grid max-w-screen-2xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-12 lg:py-28 xl:px-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/[0.14] bg-white/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#4F46E5]">
                <Wrench className="size-3.5" />
                The Kubeza platform
              </div>

              <h1 className="mt-7 text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Stop studying
                <span className="block text-[#4F46E5]">
                  infrastructure.
                </span>
                Start operating it.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#686861] sm:text-lg">
                Kubeza is a hands-on engineering platform where you
                practice troubleshooting real systems instead of only
                reading about them.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="/labs"
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#4F46E5] px-5 text-sm font-medium text-white transition hover:bg-[#4338CA]"
                >
                  Explore labs
                  <ArrowRight className="size-4" />
                </a>

                <a
                  href="/ai-mentor"
                  className="inline-flex h-11 items-center rounded-lg border border-[#18181B]/[0.12] bg-white/60 px-5 text-sm font-medium text-[#3F3F3A] transition hover:bg-white"
                >
                  Meet the AI Mentor
                </a>
              </div>
            </div>

            <div className="flex items-center lg:justify-end">
              <div className="w-full max-w-[500px] overflow-hidden rounded-2xl border border-[#18181B]/[0.10] bg-[#111214] shadow-[0_30px_80px_rgba(20,20,20,0.13)]">
                <div className="flex h-10 items-center gap-1.5 border-b border-white/[0.08] px-4">
                  <span className="size-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="size-2.5 rounded-full bg-[#28C840]" />

                  <span className="ml-2 font-mono text-[10px] text-[#666]">
                    kubeza / nginx-lab
                  </span>
                </div>

                <div className="grid min-h-[300px] md:grid-cols-[1.25fr_0.75fr]">
                  <div className="border-b border-white/[0.07] p-5 font-mono text-xs leading-7 md:border-b-0 md:border-r">
                    <div className="text-[#666]">
                      # investigate the service
                    </div>

                    <div className="mt-3 text-[#E5E5E5]">
                      <span className="text-[#67E8F9]">
                        ubuntu
                      </span>
                      <span className="text-[#555]">@</span>
                      <span className="text-[#5BA8FF]">
                        kubeza
                      </span>
                      <span className="text-[#555]">
                        :~$
                      </span>{" "}
                      systemctl status nginx
                    </div>

                    <div className="text-[#E77676]">
                      ● nginx.service failed
                    </div>

                    <div className="mt-2 text-[#E5E5E5]">
                      <span className="text-[#67E8F9]">
                        ubuntu
                      </span>
                      <span className="text-[#555]">@</span>
                      <span className="text-[#5BA8FF]">
                        kubeza
                      </span>
                      <span className="text-[#555]">
                        :~$
                      </span>{" "}
                      nginx -t
                    </div>

                    <div className="text-[#E6B85C]">
                      configuration test failed
                    </div>

                    <div className="mt-3 text-[#777]">
                      investigate → fix → verify
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <BrainCircuit className="size-4 text-[#67E8F9]" />
                      AI Mentor
                    </div>

                    <p className="mt-4 text-xs leading-6 text-[#8C8C88]">
                      Start by inspecting the reported configuration
                      error before changing the service state.
                    </p>

                    <div className="mt-8 space-y-3 text-[11px]">
                      {[
                        "Environment ready",
                        "Failure detected",
                        "Mentor available",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-[#67C587]"
                        >
                          <CheckCircle2 className="size-3.5" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
              How Kubeza works
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Practice the way engineers actually work.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#686861]">
              The objective isn't to memorize commands. It's to
              understand systems, investigate failures and make
              reliable changes.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#18181B]/[0.08] bg-[#18181B]/[0.08] md:grid-cols-2 xl:grid-cols-4">
            {workflow.map((item) => (
              <article
                key={item.number}
                className="bg-[#F8F7F3] p-7 transition-colors hover:bg-white"
              >
                <span className="font-mono text-xs font-medium text-[#4F46E5]">
                  {item.number}
                </span>

                <h3 className="mt-8 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#686861]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#18181B]/[0.07] bg-[#EAE9E4]">
          <div className="mx-auto max-w-screen-2xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
              Practice areas
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              From the shell to the cloud.
            </h2>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {practiceAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <article
                    key={area.title}
                    className="rounded-xl border border-[#18181B]/[0.08] bg-[#F8F7F3] p-6 transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#4F46E5]/[0.08] text-[#4F46E5]">
                      <Icon className="size-5" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold">
                      {area.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#686861]">
                      {area.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}