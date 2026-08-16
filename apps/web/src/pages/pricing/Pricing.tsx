import {
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

import Navbar from "../../components/navigation/Navbar";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description:
      "Start exploring Kubeza and build your first hands-on experience.",
    features: [
      "Selected DevOps labs",
      "Real command-line environments",
      "Basic lab guidance",
      "Progress tracking",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "Coming soon",
    description:
      "A deeper engineering experience for developers building serious DevOps skills.",
    features: [
      "Full lab library",
      "Advanced environments",
      "AI Mentor capabilities",
      "Detailed engineering progress",
      "More cloud and Kubernetes scenarios",
    ],
    featured: true,
  },
];

export default function Pricing(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#F3F2EE] text-[#18181B]">
      <Navbar />

      <main>
        <section className="border-b border-[#18181B]/[0.07]">
          <div className="mx-auto max-w-screen-2xl px-6 py-20 text-center sm:px-8 lg:px-12 lg:py-28 xl:px-16">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/[0.14] bg-white/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#4F46E5]">
              <Sparkles className="size-3.5" />
              Kubeza pricing
            </div>

            <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Start building your
              <span className="block text-[#4F46E5]">
                engineering skills.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#686861] sm:text-lg">
              Start free and explore the platform. Paid capabilities
              will be introduced as Kubeza grows.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-5 md:grid-cols-2">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative rounded-2xl border p-7 sm:p-8 ${
                  plan.featured
                    ? "border-[#4F46E5]/[0.25] bg-[#18181B] text-white shadow-[0_25px_70px_rgba(79,70,229,0.12)]"
                    : "border-[#18181B]/[0.09] bg-[#FAF9F6]"
                }`}
              >
                {plan.featured && (
                  <span className="absolute right-6 top-6 rounded-full bg-[#4F46E5] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                    Coming soon
                  </span>
                )}

                <h2 className="text-xl font-semibold">
                  {plan.name}
                </h2>

                <p
                  className={`mt-3 min-h-12 text-sm leading-6 ${
                    plan.featured
                      ? "text-[#A7A7A2]"
                      : "text-[#686861]"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-8">
                  <span className="text-3xl font-semibold tracking-[-0.04em]">
                    {plan.price}
                  </span>
                </div>

                <div
                  className={`my-8 h-px ${
                    plan.featured
                      ? "bg-white/[0.10]"
                      : "bg-[#18181B]/[0.08]"
                  }`}
                />

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex gap-3 text-sm ${
                        plan.featured
                          ? "text-[#D1D1CC]"
                          : "text-[#555550]"
                      }`}
                    >
                      <Check
                        className={`mt-0.5 size-4 shrink-0 ${
                          plan.featured
                            ? "text-[#67E8F9]"
                            : "text-[#4F46E5]"
                        }`}
                      />

                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.featured ? "/signup" : "/labs"}
                  className={`mt-9 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg text-sm font-medium transition ${
                    plan.featured
                      ? "bg-[#4F46E5] text-white hover:bg-[#4338CA]"
                      : "border border-[#18181B]/[0.10] bg-white text-[#3F3F3A] hover:bg-[#F3F2EE]"
                  }`}
                >
                  {plan.featured
                    ? "Join the waitlist"
                    : "Explore for free"}

                  <ArrowRight className="size-4" />
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
