import { ArrowRight, Sparkles } from "lucide-react";

import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { buttonVariants } from "../../ui/button/button.variants";

export default function CTA(): React.JSX.Element {
  return (
    <Section
      id="get-started"
      className="relative overflow-hidden border-t border-white/[0.04] bg-[#050816]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F46E5]/[0.08] blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#67E8F9]/[0.04] blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex size-12 items-center justify-center rounded-2xl border border-[#67E8F9]/20 bg-[#67E8F9]/10">
            <Sparkles
              className="size-5 text-[#67E8F9]"
              aria-hidden="true"
            />
          </div>

          <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-[#67E8F9]">
            The next generation of DevOps learning
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-6xl">
            Stop just learning DevOps.
            <span className="block bg-gradient-to-r from-[#4F46E5] via-[#1D9BF0] to-[#67E8F9] bg-clip-text text-transparent">
              Start engineering.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Kubeza is being built for engineers who want to practice real
            systems, solve real failures and develop the judgment needed to
            operate modern infrastructure.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#labs"
              className={buttonVariants({
                variant: "primary",
                size: "lg",
              })}
            >
              Explore the Labs

              <ArrowRight
                className="size-4"
                aria-hidden="true"
              />
            </a>

            <a
              href="#ai-mentor"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
              })}
            >
              Meet the AI Mentor
            </a>
          </div>

          <p className="mt-5 text-xs text-slate-600">
            Kubeza is currently being built. More engineering experiences are
            coming.
          </p>
        </div>
      </Container>
    </Section>
  );
}