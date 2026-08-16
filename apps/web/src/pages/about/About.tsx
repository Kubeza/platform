import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Terminal,
  Wrench,
} from "lucide-react";

import Navbar from "../../components/navigation/Navbar";

const values = [
  {
    icon: Terminal,
    title: "Practice over passive learning",
    description:
      "Infrastructure becomes understandable when you actually operate it.",
  },
  {
    icon: Wrench,
    title: "Problems over perfect demos",
    description:
      "Failures are part of engineering, so Kubeza makes them part of learning.",
  },
  {
    icon: BrainCircuit,
    title: "AI that supports reasoning",
    description:
      "The AI Mentor is designed to improve your investigation process, not replace it.",
  },
  {
    icon: Code2,
    title: "Built like real software",
    description:
      "The platform itself is developed as an evolving engineering product.",
  },
];

export default function About(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#F3F2EE] text-[#18181B]">
      <Navbar />

      <main>
        <section className="border-b border-[#18181B]/[0.07]">
          <div className="mx-auto max-w-screen-2xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
                About Kubeza
              </p>

              <h1 className="mt-5 text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                A different way to
                <span className="block text-[#4F46E5]">
                  learn infrastructure.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#686861] sm:text-lg">
                Kubeza is being built around a simple idea:
                infrastructure skills are developed through
                investigation, experimentation and repetition.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
                Why we're building it
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Learning should feel closer to engineering.
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-7 text-[#686861] sm:text-base">
              <p>
                Modern DevOps involves systems that are too complex
                to understand through isolated command lists and
                passive tutorials.
              </p>

              <p>
                Engineers need opportunities to investigate broken
                systems, make changes, observe consequences and
                learn from failure.
              </p>

              <p>
                That is the direction Kubeza is taking: a practical
                engineering environment where infrastructure,
                labs and AI assistance come together.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#18181B]/[0.07] bg-[#EAE9E4]">
          <div className="mx-auto max-w-screen-2xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
              Our principles
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.title}
                    className="rounded-2xl border border-[#18181B]/[0.08] bg-[#F8F7F3] p-7"
                  >
                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#4F46E5]/[0.08] text-[#4F46E5]">
                      <Icon className="size-5" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold tracking-[-0.025em]">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#686861]">
                      {value.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 lg:py-28">
            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Build. Break. Understand.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#686861] sm:text-base">
              Kubeza is still evolving. The platform will grow
              alongside the engineers using it.
            </p>

            <a
              href="/labs"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-[#4F46E5] px-6 text-sm font-medium text-white transition hover:bg-[#4338CA]"
            >
              Explore the labs
              <ArrowRight className="size-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
