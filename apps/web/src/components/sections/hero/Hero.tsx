import {
  ArrowRight,
  Bot,
  CheckCircle2,
  CircleDot,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

import Container from "../../layout/Container";
import Section from "../../layout/Section";
import Button from "../../ui/button/Button";

const ecosystem = [
  "Kubernetes",
  "Docker",
  "Terraform",
  "AWS",
  "Azure",
  "GCP",
];

export default function Hero(): React.JSX.Element {
  const goToLabs = () => {
    window.location.hash = "labs";
  };

  const goToHowItWorks = () => {
    window.location.hash = "how-it-works";
  };

  return (
    <Section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-18rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#4F46E5]/10 blur-3xl" />

        <div className="absolute right-[-12rem] top-[22%] h-[28rem] w-[28rem] rounded-full bg-[#1D9BF0]/[0.07] blur-3xl" />

        <div className="absolute bottom-[-18rem] left-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[#67E8F9]/[0.04] blur-3xl" />

        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/30 bg-[#4F46E5]/[0.08] px-3.5 py-1.5 text-sm font-medium text-[#67E8F9]">
            <Sparkles className="size-3.5" aria-hidden="true" />
            AI-NATIVE DEVOPS ENGINEERING
          </div>

          <h1 className="text-balance max-w-5xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Engineer infrastructure.
            <span className="block bg-gradient-to-r from-[#4F46E5] via-[#1D9BF0] to-[#67E8F9] bg-clip-text text-transparent">
              Not just learn it.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-balance text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Kubeza gives developers real infrastructure, real failures and an
            AI Mentor that helps them diagnose, fix and operate cloud-native
            systems through hands-on engineering.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="size-4" aria-hidden="true" />}
              onClick={goToLabs}
              className="bg-[#4F46E5] px-7 shadow-xl shadow-[#4F46E5]/20 hover:bg-[#4338CA]"
            >
              Explore DevOps Labs
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={goToHowItWorks}
              className="border-white/[0.12] bg-white/[0.02] px-7 text-slate-200 hover:bg-white/[0.06]"
            >
              See How It Works
            </Button>
          </div>

          <div className="mt-14 grid w-full max-w-5xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080D1D]/90 text-left shadow-2xl shadow-black/30 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3 sm:px-5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-400/80" />
                  <span className="size-2.5 rounded-full bg-amber-400/80" />
                  <span className="size-2.5 rounded-full bg-emerald-400/80" />
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <TerminalSquare
                    className="size-3.5"
                    aria-hidden="true"
                  />
                  kubeza-lab
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-400">
                <CircleDot className="size-3" aria-hidden="true" />
                Environment ready
              </div>
            </div>

            <div className="grid min-h-64 md:grid-cols-[1.35fr_0.65fr]">
              <div className="border-b border-white/[0.07] p-5 font-mono text-sm leading-7 md:border-b-0 md:border-r">
                <div className="text-slate-500">
                  # Diagnose a broken production service
                </div>

                <div className="mt-3">
                  <span className="text-[#67E8F9]">ubuntu</span>
                  <span className="text-slate-600">@</span>
                  <span className="text-[#1D9BF0]">kubeza-lab</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-slate-300">~$</span>{" "}
                  <span className="text-white">systemctl status nginx</span>
                </div>

                <div className="mt-2 text-red-400">
                  ● nginx.service - A high performance web server
                </div>

                <div className="text-slate-500">
                  Active:{" "}
                  <span className="text-red-400">
                    failed (Result: exit-code)
                  </span>
                </div>

                <div className="mt-3">
                  <span className="text-[#67E8F9]">ubuntu</span>
                  <span className="text-slate-600">@</span>
                  <span className="text-[#1D9BF0]">kubeza-lab</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-slate-300">~$</span>{" "}
                  <span className="text-white">nginx -t</span>
                </div>

                <div className="text-amber-300">
                  nginx: configuration file /etc/nginx/nginx.conf test failed
                </div>

                <div className="mt-3 flex items-center gap-2 text-slate-400">
                  <span className="text-[#67E8F9]">▸</span>
                  Fix the failure. Verify the service. Complete the lab.
                  <span className="inline-block h-4 w-2 animate-pulse bg-[#67E8F9]" />
                </div>
              </div>

              <div className="flex flex-col justify-between p-5">
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <Bot className="size-4 text-[#67E8F9]" aria-hidden="true" />
                    AI Mentor
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Your Nginx configuration is failing validation. Check the
                    reported directive and verify the configuration before
                    restarting the service.
                  </p>
                </div>

                <div className="mt-8 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-emerald-400">
                    <CheckCircle2 className="size-3.5" aria-hidden="true" />
                    Real Linux environment
                  </div>

                  <div className="flex items-center gap-2 text-xs text-emerald-400">
                    <CheckCircle2 className="size-3.5" aria-hidden="true" />
                    Contextual AI guidance
                  </div>

                  <div className="flex items-center gap-2 text-xs text-emerald-400">
                    <CheckCircle2 className="size-3.5" aria-hidden="true" />
                    Hands-on engineering
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs uppercase tracking-[0.18em] text-slate-600 sm:text-sm">
            {ecosystem.map((technology, index) => (
              <span key={technology} className="flex items-center gap-5">
                <span>{technology}</span>

                {index < ecosystem.length - 1 && (
                  <span className="text-slate-800">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}