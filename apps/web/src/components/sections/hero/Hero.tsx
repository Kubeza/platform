import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  Code2,
  Globe2,
  Server,
  TerminalSquare,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Container from "../../layout/Container";
import Section from "../../layout/Section";
import Button from "../../ui/button/Button";

const rotatingWords = [
  "systems.",
  "Linux.",
  "Docker.",
  "Kubernetes.",
  "Terraform.",
  "AI.",
];

const labs = [
  {
    name: "Linux",
    description:
      "Work with files, processes, permissions and services.",
    icon: TerminalSquare,
  },
  {
    name: "Networking",
    description:
      "Understand routes, DNS, ports and connectivity.",
    icon: Globe2,
  },
  {
    name: "Docker",
    description:
      "Build, inspect and troubleshoot real containers.",
    icon: Server,
  },
  {
    name: "Kubernetes",
    description:
      "Operate workloads, services and deployments.",
    icon: Server,
  },
  {
    name: "Terraform",
    description:
      "Work with infrastructure, configuration and state.",
    icon: Code2,
  },
];

export default function Hero(): React.JSX.Element {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWordIndex(
        (current) =>
          (current + 1) % rotatingWords.length,
      );
    }, 2600);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const goToLabs = () => {
    window.location.href = "/labs";
  };

  const goToPlatform = () => {
    window.location.href = "/platform";
  };

  return (
    <Section
      id="hero"
      className="relative !min-h-0 !h-auto !overflow-hidden !bg-[#F3F2EE] !py-0 !text-[#18181B]"
    >
      <div className="relative z-10">
        {/* HERO */}
        <div className="border-b border-[#1B1B1B]/[0.08]">
          <Container className="!py-12 sm:!py-14 lg:!py-16">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              {/* LEFT */}
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4F46E5]">
                  <span className="size-1.5 rounded-full bg-[#4F46E5]" />
                  DevOps engineering platform
                </div>

                <h1 className="mt-5 max-w-2xl text-balance text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-[#18181B] sm:text-6xl lg:text-[4.6rem]">
                  Build the skill
                  <span className="block text-[#4F46E5]">
                    to operate{" "}
                    <span className="relative inline-block min-w-[5.8ch]">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={rotatingWords[wordIndex]}
                          initial={{
                            opacity: 0,
                            y: 16,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -16,
                          }}
                          transition={{
                            duration: 0.35,
                            ease: "easeOut",
                          }}
                          className="absolute left-0 top-0 whitespace-nowrap"
                        >
                          {rotatingWords[wordIndex]}
                        </motion.span>
                      </AnimatePresence>

                      <span className="invisible">
                        Kubernetes.
                      </span>
                    </span>
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-[#686861] sm:text-lg sm:leading-8">
                  Practice DevOps the way it actually works. Use real
                  environments, run real commands, investigate failures and
                  learn how systems behave.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    variant="primary"
                    size="lg"
                    rightIcon={
                      <ArrowRight
                        className="size-4"
                        aria-hidden="true"
                      />
                    }
                    onClick={goToLabs}
                    className="bg-[#4F46E5] px-7 shadow-[0_10px_25px_rgba(79,70,229,0.15)] hover:bg-[#4338CA]"
                  >
                    Start practicing
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={goToPlatform}
                    className="border-[#1B1B1B]/[0.13] bg-[#FAF9F6] px-7 text-[#3F3F3A] hover:bg-white"
                  >
                    See the platform
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#777770]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      className="size-4 text-[#4F46E5]"
                      aria-hidden="true"
                    />
                    Real environments
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      className="size-4 text-[#4F46E5]"
                      aria-hidden="true"
                    />
                    Open terminal
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      className="size-4 text-[#4F46E5]"
                      aria-hidden="true"
                    />
                    AI guidance
                  </div>
                </div>
              </div>

              {/* TERMINAL */}
              <div className="relative">
                <div className="absolute -inset-8 rounded-[40px] bg-[#4F46E5]/[0.025] blur-3xl" />

                <div className="relative overflow-hidden rounded-2xl border border-[#151515]/[0.14] bg-[#111214] shadow-[0_28px_70px_rgba(25,25,25,0.15)]">
                  {/* Terminal header */}
                  <div className="flex h-12 items-center justify-between border-b border-white/[0.08] px-4">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <span className="size-2.5 rounded-full bg-[#FF5F57]" />
                        <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
                        <span className="size-2.5 rounded-full bg-[#28C840]" />
                      </div>

                      <div className="flex items-center gap-2 font-mono text-xs text-[#777]">
                        <TerminalSquare
                          className="size-3.5"
                          aria-hidden="true"
                        />
                        kubeza-linux
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] text-[#777]">
                      <span className="size-1.5 rounded-full bg-[#6BC58A]" />
                      connected
                    </div>
                  </div>

                  {/* Terminal */}
                  <div className="min-h-[370px] p-6 font-mono text-[12px] leading-7 sm:p-7 sm:text-[13px]">
                    <div className="text-[#555]">
                      Last login: today on kubeza-linux
                    </div>

                    <div className="mt-6">
                      <span className="text-[#67E8F9]">
                        ubuntu
                      </span>
                      <span className="text-[#555]">
                        @
                      </span>
                      <span className="text-[#999]">
                        kubeza
                      </span>
                      <span className="text-[#555]">
                        :~$
                      </span>{" "}
                      <span className="text-[#F2F2F2]">
                        systemctl status nginx
                      </span>
                    </div>

                    <div className="mt-2 text-[#E06A6A]">
                      ● nginx.service - A high performance web server
                    </div>

                    <div className="text-[#777]">
                      Active:{" "}
                      <span className="text-[#E06A6A]">
                        failed (Result: exit-code)
                      </span>
                    </div>

                    <div className="mt-4">
                      <span className="text-[#67E8F9]">
                        ubuntu
                      </span>
                      <span className="text-[#555]">
                        @
                      </span>
                      <span className="text-[#999]">
                        kubeza
                      </span>
                      <span className="text-[#555]">
                        :~$
                      </span>{" "}
                      <span className="text-[#F2F2F2]">
                        nginx -t
                      </span>
                    </div>

                    <div className="mt-2 text-[#D9A84E]">
                      nginx: configuration file test failed
                    </div>

                    <div className="mt-4">
                      <span className="text-[#67E8F9]">
                        ubuntu
                      </span>
                      <span className="text-[#555]">
                        @
                      </span>
                      <span className="text-[#999]">
                        kubeza
                      </span>
                      <span className="text-[#555]">
                        :~$
                      </span>{" "}
                      <span className="text-[#F2F2F2]">
                        sed -n '35,48p' /etc/nginx/nginx.conf
                      </span>
                    </div>

                    <div className="mt-2 text-[#777]">
                      42 &nbsp; {"} }"}
                    </div>

                    <div className="text-[#777]">
                      43 &nbsp; {"}"}
                    </div>

                    <div className="mt-4">
                      <span className="text-[#67E8F9]">
                        ubuntu
                      </span>
                      <span className="text-[#555]">
                        @
                      </span>
                      <span className="text-[#999]">
                        kubeza
                      </span>
                      <span className="text-[#555]">
                        :~$
                      </span>{" "}
                      <span className="text-[#F2F2F2]">
                        nginx -t
                      </span>
                    </div>

                    <div className="mt-2 text-[#6BC58A]">
                      nginx: configuration file syntax is ok
                    </div>

                    <div className="text-[#6BC58A]">
                      nginx: configuration file test is successful
                    </div>

                    <div className="mt-4">
                      <span className="text-[#67E8F9]">
                        ubuntu
                      </span>
                      <span className="text-[#555]">
                        @
                      </span>
                      <span className="text-[#999]">
                        kubeza
                      </span>
                      <span className="text-[#555]">
                        :~$
                      </span>{" "}
                      <span className="text-[#F2F2F2]">
                        systemctl restart nginx
                      </span>
                    </div>

                    <div className="mt-2 text-[#6BC58A]">
                      ● nginx.service - active (running)
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/[0.08] px-5 py-3 font-mono text-[10px] text-[#555]">
                    <span>
                      interactive linux environment
                    </span>

                    <span className="text-[#6BC58A]">
                      ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* LABS */}
        <div className="border-b border-[#1B1B1B]/[0.08]">
          <Container className="!py-20 sm:!py-24">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4F46E5]">
                  Practice environments
                </div>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#18181B] sm:text-4xl">
                  Work with the stack.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[#686861]">
                  Choose an environment and start solving problems instead of
                  only reading about them.
                </p>
              </div>

              <button
                type="button"
                onClick={goToLabs}
                className="flex w-fit items-center gap-2 text-sm font-medium text-[#4F46E5] hover:text-[#4338CA]"
              >
                Explore all labs
                <ArrowRight
                  className="size-4"
                  aria-hidden="true"
                />
              </button>
            </div>

            <div className="mt-10 grid overflow-hidden rounded-2xl border border-[#1B1B1B]/[0.1] bg-[#FAF9F6] sm:grid-cols-2 lg:grid-cols-5">
              {labs.map((lab) => {
                const Icon = lab.icon;

                return (
                  <button
                    key={lab.name}
                    type="button"
                    onClick={goToLabs}
                    className="group border-b border-[#1B1B1B]/[0.08] p-6 text-left transition-colors hover:bg-white lg:border-b-0 lg:border-r lg:last:border-r-0"
                  >
                    <Icon
                      className="size-5 text-[#4F46E5]"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />

                    <div className="mt-8 flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-[#242424]">
                        {lab.name}
                      </h3>

                      <ChevronRight
                        className="size-4 text-[#999] transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>

                    <p className="mt-2 text-xs leading-5 text-[#777770]">
                      {lab.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </Container>
        </div>

        {/* HOW IT WORKS */}
        <div className="border-b border-[#1B1B1B]/[0.08] bg-[#FAF9F6]">
          <Container className="!py-20 sm:!py-24">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4F46E5]">
                  How it works
                </div>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#18181B] sm:text-4xl">
                  Learn by doing.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#686861]">
                  Kubeza puts you inside the system. Your job is to understand
                  what is happening and make it work.
                </p>
              </div>

              <div className="divide-y divide-[#1B1B1B]/[0.08] border-y border-[#1B1B1B]/[0.08]">
                {[
                  [
                    "01",
                    "Open an environment",
                    "Start with a real system and inspect its current state.",
                  ],
                  [
                    "02",
                    "Investigate",
                    "Use the terminal, logs, configuration and system tools.",
                  ],
                  [
                    "03",
                    "Fix the problem",
                    "Make the smallest useful change based on what you found.",
                  ],
                  [
                    "04",
                    "Verify",
                    "Run the right checks and prove that the system works.",
                  ],
                ].map(
                  ([number, title, description]) => (
                    <div
                      key={number}
                      className="grid gap-4 py-6 sm:grid-cols-[55px_180px_1fr]"
                    >
                      <span className="font-mono text-xs text-[#4F46E5]">
                        {number}
                      </span>

                      <span className="text-sm font-semibold text-[#242424]">
                        {title}
                      </span>

                      <span className="text-sm leading-6 text-[#777770]">
                        {description}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </Container>
        </div>

        {/* AI MENTOR */}
        <div className="border-b border-[#1B1B1B]/[0.08]">
          <Container className="!py-20 sm:!py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4F46E5]">
                  AI Mentor
                </div>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#18181B] sm:text-4xl">
                  Get help without
                  <span className="block text-[#686861]">
                    losing the problem-solving.
                  </span>
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#686861]">
                  When you get stuck, the AI Mentor helps you understand what
                  you're seeing and points you toward the next useful step.
                </p>
              </div>

              <div className="rounded-2xl border border-[#1B1B1B]/[0.1] bg-[#FAF9F6] p-6 shadow-[0_12px_35px_rgba(20,20,20,0.04)]">
                <div className="flex items-center gap-3 border-b border-[#1B1B1B]/[0.08] pb-5">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-[#4F46E5]/[0.08]">
                    <Bot
                      className="size-4 text-[#4F46E5]"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-[#242424]">
                      Kubeza Mentor
                    </div>

                    <div className="text-xs text-[#888]">
                      Contextual assistance
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-xs font-medium text-[#999]">
                    You
                  </div>

                  <p className="mt-2 text-sm text-[#444]">
                    Why is nginx failing?
                  </p>
                </div>

                <div className="mt-6 border-l-2 border-[#4F46E5] pl-4">
                  <div className="text-xs font-medium text-[#4F46E5]">
                    Kubeza Mentor
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[#686861]">
                    Start with the configuration test. The service status tells
                    us nginx failed, but the configuration test can tell us why.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* FINAL CTA */}
        <div className="bg-[#202022]">
          <Container className="!py-24 text-center sm:!py-28">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#67E8F9]">
              Start building the skill
            </div>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Stop watching tutorials.
              <span className="block text-[#A9A9A4]">
                Start operating systems.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#999]">
              Open a lab, get a terminal and start solving real engineering
              problems.
            </p>

            <Button
              variant="primary"
              size="lg"
              rightIcon={
                <ArrowRight
                  className="size-4"
                  aria-hidden="true"
                />
              }
              onClick={goToLabs}
              className="mt-8 bg-[#4F46E5] px-7 hover:bg-[#4338CA]"
            >
              Explore labs
            </Button>
          </Container>
        </div>
      </div>
    </Section>
  );
}