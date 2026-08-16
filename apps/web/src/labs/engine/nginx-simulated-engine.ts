import type {
  TerminalEngine,
  TerminalExecutionResult,
} from "./terminal-engine.types";

const FIX_COMMAND =
  "sed -i '42s/} }/}/' /etc/nginx/nginx.conf";

export class NginxSimulatedEngine
  implements TerminalEngine
{
  private configurationFixed = false;

  execute(
    rawCommand: string,
  ): TerminalExecutionResult {
    const command = rawCommand.trim();

    if (!command) {
      return {
        command,
        output: undefined,
        exitCode: 0,
      };
    }

    if (command === "clear") {
      return {
        command,
        output: undefined,
        exitCode: 0,
      };
    }

    if (
      command ===
      "systemctl status nginx"
    ) {
      return this.executeStatusCommand(
        command,
      );
    }

    if (command === "nginx -t") {
      return this.executeConfigTest(
        command,
      );
    }

    if (
      command ===
      "sed -n '35,48p' /etc/nginx/nginx.conf"
    ) {
      return this.executeConfigView(
        command,
      );
    }

    if (
      command ===
      "nano /etc/nginx/nginx.conf"
    ) {
      return {
        command,
        output: [
          "GNU nano 8.0",
          "/etc/nginx/nginx.conf",
          "",
          "Use the editor to remove the extra } on line 42.",
          "",
          "^X Exit    ^O Write Out",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      command ===
      "vim /etc/nginx/nginx.conf"
    ) {
      return {
        command,
        output: [
          "VIM",
          "",
          "/etc/nginx/nginx.conf",
          "",
          "Remove the extra } on line 42.",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (command === FIX_COMMAND) {
      this.configurationFixed = true;

      return {
        command,
        output: "Configuration updated.",
        exitCode: 0,
      };
    }

    if (
      command ===
      "systemctl restart nginx"
    ) {
      return this.executeRestartCommand(
        command,
      );
    }

    if (command === "pwd") {
      return {
        command,
        output: "/home/ubuntu",
        exitCode: 0,
      };
    }

    if (command === "ls") {
      return {
        command,
        output: "nginx.conf  logs  html",
        exitCode: 0,
      };
    }

    return {
      command,
      output: `bash: ${command}: command not found`,
      exitCode: 127,
    };
  }

  reset(): void {
    this.configurationFixed = false;
  }

  private executeStatusCommand(
    command: string,
  ): TerminalExecutionResult {
    if (this.configurationFixed) {
      return {
        command,
        output: [
          "● nginx.service - A high performance web server",
          "   Loaded: loaded (/usr/lib/systemd/system/nginx.service)",
          "   Active: active (running)",
          "   Docs: man:nginx(8)",
        ].join("\n"),
        exitCode: 0,
      };
    }

    return {
      command,
      output: [
        "● nginx.service - A high performance web server",
        "   Loaded: loaded (/usr/lib/systemd/system/nginx.service)",
        "   Active: failed (Result: exit-code)",
      ].join("\n"),
      exitCode: 3,
    };
  }

  private executeConfigTest(
    command: string,
  ): TerminalExecutionResult {
    if (this.configurationFixed) {
      return {
        command,
        output: [
          "nginx: the configuration file /etc/nginx/nginx.conf syntax is ok",
          "nginx: configuration file /etc/nginx/nginx.conf test is successful",
        ].join("\n"),
        exitCode: 0,
      };
    }

    return {
      command,
      output: [
        'nginx: [emerg] unexpected "}" in /etc/nginx/nginx.conf:42',
        "nginx: configuration file /etc/nginx/nginx.conf test failed",
      ].join("\n"),
      exitCode: 1,
    };
  }

  private executeConfigView(
    command: string,
  ): TerminalExecutionResult {
    if (this.configurationFixed) {
      return {
        command,
        output: [
          "35  server {",
          "36      listen 80;",
          "37      server_name localhost;",
          "38",
          "39      location / {",
          "40          root /var/www/html;",
          "41          index index.html;",
          "42      }",
          "43  }",
          "",
        ].join("\n"),
        exitCode: 0,
      };
    }

    return {
      command,
      output: [
        "35  server {",
        "36      listen 80;",
        "37      server_name localhost;",
        "38",
        "39      location / {",
        "40          root /var/www/html;",
        "41          index index.html;",
        '42      } }',
        "43  }",
        "",
      ].join("\n"),
      exitCode: 0,
    };
  }

  private executeRestartCommand(
    command: string,
  ): TerminalExecutionResult {
    if (this.configurationFixed) {
      return {
        command,
        output: undefined,
        exitCode: 0,
      };
    }

    return {
      command,
      output:
        "Job for nginx.service failed because the control process exited with error code.",
      exitCode: 1,
    };
  }
}