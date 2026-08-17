import {
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

import Navbar from "../../components/navigation/Navbar";

const plans = [
  {
    name: "Free",
    description:
      "Start exploring Kubeza and experience the platform.",
    price: "₹0",
    period: "for now",
    featured: false,
    features: [
      "Explore platform environments",
      "Access available practice environments",
      "Runnable introductory labs",
      "AI Mentor experience as available",
    ],
  },
  {
    name: "Pro",
    description:
      "A deeper engineering workspace for serious learners.",
    price: "Coming",
    period: "soon",
    featured: true,
    features: [
      "Expanded interactive labs",
      "Deeper practice environments",
      "Advanced AI Mentor capabilities",
      "Progress and engineering history",
      "More realistic infrastructure scenarios",
    ],
  },
  {
    name: "Teams",
    description:
      "A future workspace for engineering teams and communities.",
    price: "Coming",
    period: "later",
    featured: false,
    features: [
      "Team learning environments",
      "Shared engineering scenarios",
      "Team progress visibility",
      "Organization workflows",
      "Advanced platform controls",
    ],
  },
];

export default function Pricing(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#F3F2EE] text-[#18181B]">
      <Navbar />

      <main>
        <section className="border-b border-[#18181B]/[0.07]">
          <div className="mx-auto max-w-screen-2xl px-6 py-20 text-center sm:px-8 lg:px-12 lg:py-24 xl:px-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
              Pricing
            </p>

            <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Start free.
              <span className="block text-[#4F46E5]">
                Grow with Kubeza.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#686861] sm:text-base">
              Kubeza is still evolving. The current experience is focused
              on building the core engineering platform before introducing
              paid plans.
            </p>

            <div className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/15 bg-[#4F46E5]/[0.05] px-3.5 py-2 text-xs font-medium text-[#5B54C9]">
              <Sparkles className="size-3.5" />
              No payment required right now
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-6 py-14 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
          <div className="grid gap-4 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={[
                  "relative flex flex-col rounded-2xl border p-7",
                  plan.featured
                    ? "border-[#4F46E5]/30 bg-[#18181B] text-white shadow-[0_24px_60px_rgba(20,20,20,0.12)]"
                    : "border-[#18181B]/[0.09] bg-[#FAF9F6]",
                ].join(" ")}
              >
                {plan.featured && (
                  <div className="absolute right-5 top-5 rounded-full bg-[#4F46E5] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white">
                    Future
                  </div>
                )}

                <p
                  className={[
                    "text-xs font-semibold uppercase tracking-[0.15em]",
                    plan.featured
                      ? "text-[#67E8F9]"
                      : "text-[#4F46E5]",
                  ].join(" ")}
                >
                  {plan.name}
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
                  {plan.price}
                </h2>

                <p
                  className={[
                    "mt-1 text-xs",
                    plan.featured
                      ? "text-slate-500"
                      : "text-[#999]",
                  ].join(" ")}
                >
                  {plan.period}
                </p>

                <p
                  className={[
                    "mt-5 min-h-[48px] text-sm leading-6",
                    plan.featured
                      ? "text-slate-400"
                      : "text-[#686861]",
                  ].join(" ")}
                >
                  {plan.description}
                </p>

                <div
                  className={[
                    "my-7 h-px",
                    plan.featured
                      ? "bg-white/[0.08]"
                      : "bg-[#18181B]/[0.08]",
                  ].join(" ")}
                />

                <ul className="space-y-3">
                  {plan.features.map(
                    (feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5"
                      >
                        <Check
                          className={[
                            "mt-0.5 size-3.5 shrink-0",
                            plan.featured
                              ? "text-[#67E8F9]"
                              : "text-[#4F46E5]",
                          ].join(" ")}
                        />

                        <span
                          className={[
                            "text-xs leading-5",
                            plan.featured
                              ? "text-slate-400"
                              : "text-[#777770]",
                          ].join(" ")}
                        >
                          {feature}
                        </span>
                      </li>
                    ),
                  )}
                </ul>

                <div className="mt-auto pt-8">
                  <a
                    href={
                      plan.name === "Free"
                        ? "/signup"
                        : "/"
                    }
                    className={[
                      "flex h-10 items-center justify-center gap-2 rounded-lg text-sm font-semibold transition",
                      plan.featured
                        ? "bg-white text-[#18181B] hover:bg-[#F3F2EE]"
                        : "bg-[#4F46E5] text-white hover:bg-[#4338CA]",
                    ].join(" ")}
                  >
                    {plan.name === "Free"
                      ? "Get started"
                      : "Learn more"}

                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[#18181B]/[0.07] bg-[#EAE9E4]">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:px-8 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
              Before pricing
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
              We are building the product first.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#686861]">
              The priority is making Kubeza genuinely useful for
              infrastructure learning and engineering practice. Paid
              features will come after the core platform experience is
              strong.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}