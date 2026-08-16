import {
  useCallback,
  useState,
} from "react";

import type { TerminalCommand } from "../components/ui/terminal/terminal.types";

import {
  NginxSimulatedEngine,
} from "../labs/engine/nginx-simulated-engine";

const initialCommands: TerminalCommand[] = [
  {
    id: "1",
    command: "systemctl status nginx",
    output:
      "● nginx.service - A high performance web server\n   Loaded: loaded (/usr/lib/systemd/system/nginx.service)\n   Active: failed (Result: exit-code)",
    timestamp: "now",
  },
  {
    id: "2",
    command: "nginx -t",
    output:
      'nginx: [emerg] unexpected "}" in /etc/nginx/nginx.conf:42\nnginx: configuration file /etc/nginx/nginx.conf test failed',
    timestamp: "now",
  },
];

export interface RunCommandResult {
  command: TerminalCommand;
  configurationFixed: boolean;
}

export function useLabTerminal() {
  const [commands, setCommands] =
    useState<TerminalCommand[]>(
      initialCommands,
    );

  const [input, setInput] =
    useState("");

  const [
    configurationFixed,
    setConfigurationFixed,
  ] = useState(false);

  const [engine] =
    useState(
      () => new NginxSimulatedEngine(),
    );

  const runCommand = useCallback(
    (
      rawCommand: string,
    ): RunCommandResult | null => {
      const command = rawCommand.trim();

      if (!command) {
        return null;
      }

      const result =
        engine.execute(command);

      if (command === "clear") {
        setCommands([]);
        setInput("");

        return {
          command: {
            id: `${Date.now()}-${Math.random()}`,
            command,
            timestamp: new Date(),
          },
          configurationFixed,
        };
      }

      if (
        command ===
        "sed -i '42s/} }/}/' /etc/nginx/nginx.conf"
      ) {
        setConfigurationFixed(true);
      }

      const nextConfigurationFixed =
        command ===
          "sed -i '42s/} }/}/' /etc/nginx/nginx.conf" ||
        configurationFixed;

      const terminalCommand: TerminalCommand =
        {
          id: `${Date.now()}-${Math.random()}`,
          command,
          output: result.output,
          timestamp: new Date(),
        };

      setCommands((current) => [
        ...current,
        terminalCommand,
      ]);

      setInput("");

      return {
        command: terminalCommand,
        configurationFixed:
          nextConfigurationFixed,
      };
    },
    [
      configurationFixed,
      engine,
    ],
  );

  const reset = useCallback(() => {
    engine.reset();

    setCommands(initialCommands);
    setInput("");
    setConfigurationFixed(false);
  }, [engine]);

  return {
    commands,
    input,
    setInput,
    runCommand,
    reset,
    configurationFixed,
  };
}