import type {
  TerminalEngine,
  TerminalExecutionResult,
} from "../../labs/engine/terminal-engine.types";

const HOST = "kubeza-network";

export class NetworkingPracticeEngine
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

    if (
      normalized === "ip addr" ||
      normalized === "ip a"
    ) {
      return {
        command,
        output: [
          "1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536",
          "    inet 127.0.0.1/8 scope host lo",
          "2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500",
          "    inet 10.0.0.20/24 brd 10.0.0.255 scope global eth0",
          "    inet6 fe80::20c:29ff:fe4a:8a12/64 scope link",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized === "ip route"
    ) {
      return {
        command,
        output: [
          "default via 10.0.0.1 dev eth0",
          "10.0.0.0/24 dev eth0 proto kernel scope link src 10.0.0.20",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized === "ss -tuln"
    ) {
      return {
        command,
        output: [
          "Netid State  Local Address:Port",
          "tcp   LISTEN 0.0.0.0:22",
          "tcp   LISTEN 0.0.0.0:80",
          "tcp   LISTEN 0.0.0.0:443",
          "udp   UNCONN 0.0.0.0:53",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized === "ss -tulpn"
    ) {
      return {
        command,
        output: [
          "Netid State  Local Address:Port Process",
          "tcp   LISTEN 0.0.0.0:22   users:(('sshd',pid=721,fd=3))",
          "tcp   LISTEN 0.0.0.0:80   users:(('nginx',pid=812,fd=6))",
          "tcp   LISTEN 0.0.0.0:443  users:(('nginx',pid=812,fd=7))",
          "udp   UNCONN 0.0.0.0:53   users:(('systemd-resolved',pid=402,fd=14))",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "cat /etc/resolv.conf"
    ) {
      return {
        command,
        output: [
          "nameserver 127.0.0.53",
          "options edns0 trust-ad",
          "search localdomain",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized === "resolvectl status"
    ) {
      return {
        command,
        output: [
          "Global",
          "       Protocols: -LLMNR -mDNS -DNSOverTLS DNSSEC=no/unsupported",
          "resolv.conf mode: stub",
          "",
          "Link 2 (eth0)",
          "    Current Scopes: DNS",
          "         DNS Servers: 10.0.0.1",
          "          DNS Domain: localdomain",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "ping -c 4 8.8.8.8"
    ) {
      return {
        command,
        output: [
          "PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.",
          "64 bytes from 8.8.8.8: icmp_seq=1 ttl=117 time=18.4 ms",
          "64 bytes from 8.8.8.8: icmp_seq=2 ttl=117 time=17.9 ms",
          "64 bytes from 8.8.8.8: icmp_seq=3 ttl=117 time=18.2 ms",
          "64 bytes from 8.8.8.8: icmp_seq=4 ttl=117 time=18.0 ms",
          "",
          "--- 8.8.8.8 ping statistics ---",
          "4 packets transmitted, 4 received, 0% packet loss",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "ping -c 4 google.com"
    ) {
      return {
        command,
        output: [
          "PING google.com (142.250.183.14) 56(84) bytes of data.",
          "64 bytes from 142.250.183.14: icmp_seq=1 ttl=117 time=19.1 ms",
          "64 bytes from 142.250.183.14: icmp_seq=2 ttl=117 time=18.7 ms",
          "64 bytes from 142.250.183.14: icmp_seq=3 ttl=117 time=18.9 ms",
          "64 bytes from 142.250.183.14: icmp_seq=4 ttl=117 time=18.8 ms",
          "",
          "--- google.com ping statistics ---",
          "4 packets transmitted, 4 received, 0% packet loss",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized === "ip neigh"
    ) {
      return {
        command,
        output: [
          "10.0.0.1 dev eth0 lladdr 00:11:22:33:44:55 REACHABLE",
          "10.0.0.10 dev eth0 lladdr 00:11:22:33:44:66 STALE",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized === "curl localhost"
    ) {
      return {
        command,
        output:
          "Kubeza networking practice server",
        exitCode: 0,
      };
    }

    if (
      normalized === "curl -I localhost"
    ) {
      return {
        command,
        output: [
          "HTTP/1.1 200 OK",
          "Server: nginx/1.29.1",
          "Content-Type: text/html",
          "Connection: keep-alive",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (normalized === "help") {
      return {
        command,
        output: [
          "Kubeza Networking Practice",
          "",
          "Explore networking from your terminal.",
          "",
          "Try commands such as:",
          "  ip addr",
          "  ip route",
          "  ss -tuln",
          "  ss -tulpn",
          "  cat /etc/resolv.conf",
          "  resolvectl status",
          "  ping -c 4 8.8.8.8",
          "  ping -c 4 google.com",
          "  ip neigh",
          "  curl localhost",
          "  curl -I localhost",
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