import {
  ArrowRight,
  Bot,
  Code2,
  Terminal,
} from "lucide-react";

import Navbar from "../../components/navigation/Navbar";

const principles = [
  {
    number: "01",
    title: "Operate, don't just read",
    description:
      "DevOps is learned through interaction. Kubeza puts engineers inside environments where they can investigate, change, break, and recover systems.",
    icon: Terminal,
  },
  {
    number: "02",
    title: "Understand the failure",
    description:
      "The goal is not to memorize commands. It is to understand what failed, why it failed, and how to verify the fix.",
    icon: Code2,
  },
  {
    number: "03",
    title: "AI as an engineering partner",
    description:
      "The AI Mentor is designed to guide reasoning and investigation instead of simply handing over answers.",
    icon: Bot,
  },
];

export default function About(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#F3F2EE] text-[#18181B]">
      <Navbar />

      <main>
        <section className="border-b border-[#18181B]/[0.07]">
          <div className="mx-auto max-w-screen-2xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
            <div className="max-w-5xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
                About Kubeza
              </p>

              <h1 className="mt-5 text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                DevOps should be
                <span className="block text-[#4F46E5]">
                  experienced.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#686861] sm:text-lg">
                Kubeza is being built as an interactive engineering
                platform where developers learn infrastructure by
                operating it.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
                Why Kubeza
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                From learning concepts
                <br />
                to operating systems.
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-7 text-[#686861] sm:text-base">
              <p>
                Traditional learning often separates theory from the
                systems engineers eventually have to operate. Kubeza
                is designed around closing that gap.
              </p>

              <p>
                Instead of only watching a tutorial about a broken
                service, you should be able to enter the environment,
                inspect it, find the failure, make a change, and
                verify the result.
              </p>

              <p>
                AI then becomes a layer of engineering assistance:
                helping you reason through a problem without removing
                the problem-solving experience itself.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#18181B]/[0.07] bg-[#EAE9E4]">
          <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
                Our principles
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Built around engineering reality.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.number}
                    className="rounded-2xl border border-[#18181B]/[0.08] bg-[#F8F7F3] p-7"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-[#4F46E5]/[0.08] text-[#4F46E5]">
                        <Icon className="size-5" />
                      </div>

                      <span className="font-mono text-xs text-[#A0A09A]">
                        {principle.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-lg font-semibold">
                      {principle.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#777770]">
                      {principle.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
          <div className="rounded-3xl bg-[#18181B] px-7 py-12 text-white sm:px-12 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#67E8F9]">
                  The direction
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Build a place where engineers can learn by doing.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#A6A6A1]">
                  Kubeza will grow environment by environment,
                  scenario by scenario, toward a deeper AI-powered
                  engineering workspace.
                </p>
              </div>

              <a
                href="/labs"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-[#18181B] transition hover:bg-[#F3F2EE]"
              >
                Explore labs
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}