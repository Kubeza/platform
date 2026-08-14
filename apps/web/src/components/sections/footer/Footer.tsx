import {
  ArrowUpRight,
  Code2,
  Globe2,
  Sparkles,
} from "lucide-react";

import Container from "../../layout/Container";

const navigation = [
  { label: "Platform", href: "#platform" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Labs", href: "#labs" },
  { label: "AI Mentor", href: "#ai-mentor" },
  { label: "Ecosystem", href: "#ecosystem" },
];

export default function Footer(): React.JSX.Element {
  return (
    <footer className="border-t border-white/[0.07] bg-[#03060D]">
      <Container>
        <div className="py-12 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-sm">
              <a
                href="#"
                className="inline-flex items-center gap-3"
                aria-label="Kubeza home"
              >
                <span className="flex size-9 items-center justify-center rounded-xl border border-[#4F46E5]/30 bg-[#4F46E5]/10">
                  <Sparkles
                    className="size-4 text-[#67E8F9]"
                    aria-hidden="true"
                  />
                </span>

                <span className="text-lg font-semibold tracking-tight text-white">
                  Kubeza
                </span>
              </a>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                AI-native DevOps engineering practice for the systems and
                infrastructure of tomorrow.
              </p>

              <div className="mt-6 flex items-center gap-2">
                <a
                  href="#"
                  aria-label="Kubeza GitHub"
                  className="flex size-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.02] text-slate-500 transition-colors hover:border-white/[0.12] hover:text-white"
                >
                  <Code2
                    className="size-4"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="#"
                  aria-label="Kubeza community"
                  className="flex size-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.02] text-slate-500 transition-colors hover:border-white/[0.12] hover:text-white"
                >
                  <Globe2
                    className="size-4"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="#"
                  aria-label="Kubeza website"
                  className="flex size-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.02] text-slate-500 transition-colors hover:border-white/[0.12] hover:text-white"
                >
                  <ArrowUpRight
                    className="size-4"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <nav aria-label="Footer navigation">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                Explore
              </p>

              <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3 lg:grid-cols-2">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm text-slate-500 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Kubeza. All rights reserved.
            </p>

            <p>
              Built for engineers. Powered by intelligence.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}