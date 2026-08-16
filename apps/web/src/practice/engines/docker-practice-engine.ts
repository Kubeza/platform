import type {
  TerminalEngine,
  TerminalExecutionResult,
} from "../../labs/engine/terminal-engine.types";

const HOST = "kubeza-docker";

export class DockerPracticeEngine
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

    if (normalized === "docker version") {
      return {
        command,
        output: [
          "Client:",
          " Version:           28.3.3",
          " API version:       1.51",
          " Go version:        go1.24.5",
          " OS/Arch:           linux/amd64",
          "",
          "Server:",
          " Engine:",
          "  Version:          28.3.3",
          "  API version:      1.51",
          "  OS/Arch:          linux/amd64",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (normalized === "docker info") {
      return {
        command,
        output: [
          "Client:",
          " Context:    default",
          "",
          "Server:",
          " Containers: 3",
          " Running: 1",
          " Paused: 0",
          " Stopped: 2",
          " Images: 5",
          " Server Version: 28.3.3",
          " Storage Driver: overlay2",
          " Cgroup Driver: systemd",
          " Operating System: Ubuntu 24.04.2 LTS",
          " Architecture: x86_64",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized === "docker ps" ||
      normalized ===
        "docker container ls"
    ) {
      return {
        command,
        output: [
          "CONTAINER ID   IMAGE        COMMAND                  STATUS         PORTS                  NAMES",
          "a81f42c91d2e   nginx:alpine \"nginx -g daemon off;\" Up 18 minutes  0.0.0.0:8080->80/tcp   web",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized === "docker ps -a" ||
      normalized ===
        "docker container ls -a"
    ) {
      return {
        command,
        output: [
          "CONTAINER ID   IMAGE          COMMAND                  STATUS                      PORTS                  NAMES",
          "a81f42c91d2e   nginx:alpine   \"nginx -g daemon off;\" Up 18 minutes               0.0.0.0:8080->80/tcp   web",
          "c32bd71a8421   redis:7        \"docker-entrypoint.s…\" Exited (0) 2 hours ago                             cache",
          "f19ac88271de   ubuntu:24.04   \"/bin/bash\"              Exited (0) 3 hours ago                             ubuntu-test",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized === "docker images" ||
      normalized === "docker image ls"
    ) {
      return {
        command,
        output: [
          "REPOSITORY   TAG       IMAGE ID       CREATED        SIZE",
          "nginx        alpine    8a1b3c4d5e6f   2 weeks ago    47.2MB",
          "redis        7         1f2e3d4c5b6a   3 weeks ago    117MB",
          "ubuntu       24.04     7c06e91f61fa   1 month ago    78.1MB",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "docker network ls"
    ) {
      return {
        command,
        output: [
          "NETWORK ID     NAME      DRIVER    SCOPE",
          "8f31ab27c901   bridge    bridge    local",
          "a7c21d89f442   host      host      local",
          "c51f93e82b17   none      null      local",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "docker volume ls"
    ) {
      return {
        command,
        output: [
          "DRIVER    VOLUME NAME",
          "local     app-data",
          "local     database-data",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "docker logs web"
    ) {
      return {
        command,
        output: [
          "/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty",
          "/docker-entrypoint.sh: Configuration complete; ready for start up",
          "2026/08/15 06:32:41 [notice] 1#1: using the \"epoll\" event method",
          "2026/08/15 06:32:41 [notice] 1#1: nginx/1.29.1",
          "2026/08/15 06:32:41 [notice] 1#1: start worker processes",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "docker inspect web"
    ) {
      return {
        command,
        output: [
          "[",
          "  {",
          '    "Name": "/web",',
          '    "Image": "nginx:alpine",',
          '    "State": {',
          '      "Status": "running",',
          '      "Running": true',
          "    },",
          '    "NetworkMode": "bridge"',
          "  }",
          "]",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "docker exec -it web sh"
    ) {
      return {
        command,
        output: [
          "/ #",
          "",
          "Interactive shell session started.",
          "Use exit to leave the container.",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "docker stop web"
    ) {
      return {
        command,
        output: "web",
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "docker start web"
    ) {
      return {
        command,
        output: "web",
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "docker restart web"
    ) {
      return {
        command,
        output: "web",
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "docker run --name practice-nginx -d nginx:alpine"
    ) {
      return {
        command,
        output: "b4c9f12e7a3d",
        exitCode: 0,
      };
    }

    if (
      normalized === "docker rm web"
    ) {
      return {
        command,
        output: "web",
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "docker rmi nginx:alpine"
    ) {
      return {
        command,
        output: "Untagged: nginx:alpine",
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
          "Desktop  Documents  Downloads  docker  labs  practice",
        exitCode: 0,
      };
    }

    if (normalized === "help") {
      return {
        command,
        output: [
          "Kubeza Docker Practice",
          "",
          "Explore Docker from your terminal.",
          "",
          "Try commands such as:",
          "  docker version",
          "  docker info",
          "  docker ps",
          "  docker ps -a",
          "  docker images",
          "  docker network ls",
          "  docker volume ls",
          "  docker logs web",
          "  docker inspect web",
          "  docker exec -it web sh",
          "  docker stop web",
          "  docker start web",
          "  docker run --name practice-nginx -d nginx:alpine",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized.startsWith("docker ")
    ) {
      return {
        command,
        output:
          `docker: '${command.slice(7)}' is not a simulated command in this practice environment.`,
        exitCode: 125,
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