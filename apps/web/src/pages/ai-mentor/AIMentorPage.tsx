import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  MessageSquare,
  Terminal,
} from "lucide-react";

import Navbar from "../../components/navigation/Navbar";

const principles = [
  "It gives guidance instead of immediately giving the answer.",
  "It can help interpret commands, logs and system symptoms.",
  "It keeps the investigation focused on the actual failure.",
];

export default function AIMentorPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#F3F2EE] text-[#18181B]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-[#18181B]/[0.07]">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(#18181B08 1px, transparent 1px), linear-gradient(90deg, #18181B08 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative mx-auto max-w-screen-2xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#4F46E5]/[0.14] bg-white/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#4F46E5]">
                <BrainCircuit className="size-3.5" />
                AI Mentor
              </div>

              <h1 className="mt-7 text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Don't just ask AI.
                <span className="block text-[#4F46E5]">
                  Investigate with it.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#686861] sm:text-lg">
                Kubeza's AI Mentor is designed to support the
                engineering process without turning every lab into
                an answer-copying exercise.
              </p>

              <a
                href="/labs"
                className="mt-9 inline-flex h-11 items-center gap-2 rounded-lg bg-[#4F46E5] px-5 text-sm font-medium text-white transition hover:bg-[#4338CA]"
              >
                Try it in a lab
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
                Mentor, not autopilot
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Your reasoning still matters.
              </h2>
            </div>

            <div className="space-y-4">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="flex gap-4 rounded-xl border border-[#18181B]/[0.08] bg-[#FAF9F6] p-5"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#4F46E5]" />

                  <p className="text-sm leading-6 text-[#555550]">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#18181B]/[0.07] bg-[#EAE9E4]">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-24">
            <div className="overflow-hidden rounded-2xl border border-[#18181B]/[0.10] bg-[#111214] shadow-[0_25px_70px_rgba(20,20,20,0.12)]">
              <div className="flex h-10 items-center gap-2 border-b border-white/[0.08] px-4">
                <Terminal className="size-3.5 text-[#777]" />

                <span className="font-mono text-[10px] text-[#777]">
                  mentor.session
                </span>
              </div>

              <div className="grid md:grid-cols-2">
                <div className="p-7 font-mono text-xs leading-7">
                  <div className="text-[#777]">
                    ubuntu@kubeza:~$ systemctl status nginx
                  </div>

                  <div className="text-[#E77676]">
                    ● nginx.service failed
                  </div>

                  <div className="mt-4 text-[#67E8F9]">
                    mentor:
                  </div>

                  <div className="text-[#B0B0AB]">
                    What changed immediately before the service
                    stopped?
                  </div>
                </div>

                <div className="border-t border-white/[0.08] p-7 md:border-l md:border-t-0">
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <MessageSquare className="size-4 text-[#67E8F9]" />
                    Contextual guidance
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[#999993]">
                    Instead of fixing the problem for you, the mentor
                    helps you identify the next useful diagnostic
                    step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}