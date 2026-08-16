import type {
  TerminalEngine,
  TerminalExecutionResult,
} from "../../labs/engine/terminal-engine.types";

const HOST = "kubeza-linux";

export class LinuxPracticeEngine
  implements TerminalEngine
{
  execute(
    rawCommand: string,
  ): TerminalExecutionResult {
    const command = rawCommand.trim();
    const normalized =
      command.toLowerCase();

    if (!normalized) {
      return {
        command,
        output: undefined,
        exitCode: 0,
      };
    }

    if (normalized === "clear") {
      return {
        command,
        output: undefined,
        exitCode: 0,
      };
    }

    if (normalized === "pwd") {
      return {
        command,
        output: "/home/ubuntu",
        exitCode: 0,
      };
    }

    if (normalized === "whoami") {
      return {
        command,
        output: "ubuntu",
        exitCode: 0,
      };
    }

    if (normalized === "hostname") {
      return {
        command,
        output: HOST,
        exitCode: 0,
      };
    }

    if (normalized === "ls") {
      return {
        command,
        output:
          "Desktop  Documents  Downloads  labs  practice",
        exitCode: 0,
      };
    }

    if (normalized === "ls -la") {
      return {
        command,
        output: [
          "total 32",
          "drwxr-xr-x 1 ubuntu ubuntu 4096 Aug 15 10:30 .",
          "drwxr-xr-x 1 root   root   4096 Aug 15 10:30 ..",
          "drwxr-xr-x 2 ubuntu ubuntu 4096 Aug 15 10:30 Desktop",
          "drwxr-xr-x 2 ubuntu ubuntu 4096 Aug 15 10:30 Documents",
          "drwxr-xr-x 2 ubuntu ubuntu 4096 Aug 15 10:30 Downloads",
          "drwxr-xr-x 2 ubuntu ubuntu 4096 Aug 15 10:30 labs",
          "drwxr-xr-x 2 ubuntu ubuntu 4096 Aug 15 10:30 practice",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (normalized === "uname -a") {
      return {
        command,
        output: [
          "Linux kubeza-linux 6.8.0-31-generic",
          "#31-Ubuntu SMP PREEMPT_DYNAMIC",
          "x86_64 GNU/Linux",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (normalized === "date") {
      return {
        command,
        output: new Date().toString(),
        exitCode: 0,
      };
    }

    if (normalized === "help") {
      return {
        command,
        output: [
          "Kubeza Linux Practice",
          "",
          "You have a Linux environment available for practice.",
          "",
          "Try commands such as:",
          "  pwd",
          "  ls",
          "  ls -la",
          "  whoami",
          "  hostname",
          "  uname -a",
          "  date",
        ].join("\n"),
        exitCode: 0,
      };
    }

    return {
      command,
      output:
        `bash: ${command}: command not found`,
      exitCode: 127,
    };
  }

  reset(): void {}
}