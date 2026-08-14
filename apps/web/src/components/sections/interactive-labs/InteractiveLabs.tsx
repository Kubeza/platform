import {
  ArrowRight,
  Box,
  KeyRound,
  Server,
  Terminal as TerminalIcon,
} from "lucide-react";

import Container from "../../layout/Container";
import Section from "../../layout/Section";

import { Badge } from "../../ui/badge";
import {
  Card,
  CardBody,
  CardDescription,
  CardTitle,
} from "../../ui/card";
import { Status } from "../../ui/status";

import {
  Terminal,
  TerminalBody,
  TerminalHeader,
  TerminalOutput,
} from "../../ui/terminal";

const labs = [
  {
    icon: Server,
    category: "Linux",
    difficulty: "Beginner",
    title: "Broken Nginx configuration",
    description:
      "Diagnose a production-style Nginx configuration failure and restore the service.",
    command: "systemctl status nginx",
  },
  {
    icon: KeyRound,
    category: "Linux",
    difficulty: "Beginner",
    title: "SSH key permissions error",
    description:
      "Investigate an SSH authentication failure caused by incorrect private-key permissions.",
    command: "ssh -i ~/.ssh/id_rsa user@server",
  },
  {
    icon: Box,
    category: "Docker",
    difficulty: "Intermediate",
    title: "Crashed Docker container",
    description:
      "Inspect a failed container, identify the root cause and recover the application.",
    command: "docker ps -a",
  },
];

export default function InteractiveLabs(): React.JSX.Element {
  return (
    <Section
      id="labs"
      className="relative overflow-hidden border-t border-white/[0.04] bg-[#060A17]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[-12rem] top-1/4 h-[30rem] w-[30rem] rounded-full bg-[#4F46E5]/[0.05] blur-3xl" />

        <div className="absolute right-[-14rem] bottom-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#1D9BF0]/[0.04] blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#67E8F9]">
                Interactive DevOps Labs
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                Real failures.
                <span className="block bg-gradient-to-r from-[#4F46E5] via-[#1D9BF0] to-[#67E8F9] bg-clip-text text-transparent">
                  Real engineering.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                Start with a broken environment, open the terminal and work
                through the incident yourself. Kubeza is built around
                investigation, not multiple-choice answers.
              </p>
            </div>

            <Status
              variant="success"
              label="Lab environments ready"
              className="shrink-0 self-start rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-4 py-2"
            />
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {labs.map((lab) => {
              const Icon = lab.icon;

              return (
                <Card
                  key={lab.title}
                  interactive
                  className="group flex h-full flex-col overflow-hidden border-white/[0.08] bg-[#080D1D]/90 transition-all duration-300 hover:-translate-y-1 hover:border-[#4F46E5]/30 hover:bg-[#0A1020]"
                >
                  <CardBody className="flex h-full flex-col p-0">
                    <div className="border-b border-white/[0.07] bg-[#070B18] px-6 py-5">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex size-11 items-center justify-center rounded-xl border border-[#4F46E5]/20 bg-[#4F46E5]/10">
                          <Icon
                            className="size-5 text-[#67E8F9]"
                            aria-hidden="true"
                          />
                        </div>

                        <Badge
                          variant="outline"
                          size="sm"
                          className="border-white/[0.08] bg-white/[0.02] text-slate-400"
                        >
                          {lab.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          size="sm"
                          className="border-[#1D9BF0]/20 bg-[#1D9BF0]/10 text-[#67E8F9]"
                        >
                          {lab.difficulty}
                        </Badge>

                        <span className="text-xs text-slate-600">•</span>

                        <span className="text-xs text-slate-500">
                          Failure scenario
                        </span>
                      </div>

                      <CardTitle className="mt-5">
                        {lab.title}
                      </CardTitle>

                      <CardDescription className="mt-3">
                        {lab.description}
                      </CardDescription>

                      <div className="mt-6 rounded-lg border border-white/[0.06] bg-black/30 px-4 py-3">
                        <div className="flex items-center gap-2">
                          <TerminalIcon
                            className="size-3.5 text-[#67E8F9]"
                            aria-hidden="true"
                          />

                          <code className="truncate text-xs text-slate-400">
                            {lab.command}
                          </code>
                        </div>
                      </div>

                      <a
                        href="#get-started"
                        className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-[#4F46E5]/40 hover:bg-[#4F46E5]/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]/50"
                      >
                        Start lab
                        <ArrowRight
                          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </div>

          <Card className="mt-6 overflow-hidden border-white/[0.08] bg-[#070B18]/95">
            <div className="grid lg:grid-cols-[1.45fr_0.55fr]">
              <div className="min-w-0 border-b border-white/[0.07] lg:border-b-0 lg:border-r">
                <Terminal className="rounded-none border-0 bg-[#03060D]">
                  <TerminalHeader className="bg-[#080D18]">
                    <div className="flex items-center gap-2">
                      <span className="size-2.5 rounded-full bg-red-400/80" />
                      <span className="size-2.5 rounded-full bg-yellow-400/80" />
                      <span className="size-2.5 rounded-full bg-emerald-400/80" />

                      <span className="ml-2 text-xs text-slate-500">
                        kubeza-lab
                      </span>
                    </div>

                    <Status
                      variant="success"
                      label="Environment ready"
                      className="text-xs"
                    />
                  </TerminalHeader>

                  <TerminalBody className="min-h-[280px] bg-[#03060D] p-6">
                    <TerminalOutput className="text-sm leading-7">
                      {`# Diagnose a broken production service

ubuntu@kubeza-lab:~$ systemctl status nginx

● nginx.service - A high performance web server
   Loaded: loaded (/lib/systemd/system/nginx.service)
   Active: failed (Result: exit-code)

ubuntu@kubeza-lab:~$ nginx -t
nginx: [emerg] unexpected "}" in /etc/nginx/nginx.conf:42
nginx: configuration file /etc/nginx/nginx.conf test failed

ubuntu@kubeza-lab:~$`}
                    </TerminalOutput>

                    <div className="mt-3 flex items-center gap-2 font-mono text-sm">
                      <span className="text-[#67E8F9]">
                        ubuntu@kubeza-lab:~$
                      </span>

                      <span className="h-4 w-2 animate-pulse bg-[#67E8F9]" />
                    </div>
                  </TerminalBody>
                </Terminal>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8">
                <div className="flex size-10 items-center justify-center rounded-xl border border-[#67E8F9]/20 bg-[#67E8F9]/10">
                  <TerminalIcon
                    className="size-5 text-[#67E8F9]"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Inside the lab
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                  Your terminal. Your decision.
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Every scenario starts with incomplete information. Inspect
                  the system, form a hypothesis and prove your fix.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="size-1.5 rounded-full bg-[#4F46E5]" />
                    Real Linux environment
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="size-1.5 rounded-full bg-[#1D9BF0]" />
                    Real system failures
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="size-1.5 rounded-full bg-[#67E8F9]" />
                    Contextual AI guidance
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}